const mongoose = require('mongoose');
const readline = require('readline');

const dbURI = 'mongodb://localhost/weightblog';
mongoose.connect(dbURI, {useNewUrlParser: true});

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