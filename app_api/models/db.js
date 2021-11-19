const mongoose = require('mongoose');
const { MongoClient} = require('mongodb');
const readline = require('readline');

let dbURI = 'mongodb://localhost/weightblog';
if(process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
  mongoose.connect(dbURI).catch(err => console.log(err));
//   const client = new MongoClient(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
//   client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
}


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`)
});
mongoose.connection.on('error', () => {
  console.log('Mongoose connection error');
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  })
});
if(process.platform === 'win32') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

require('./posts');