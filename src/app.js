const express = require('express');
const app = express();
const path = require('path');
// const hbs = require('hbs');
const fs = require('fs/promises');
require('../app_api/models/db');
const PORT = process.env.PORT || 3000;

const apiRouter = require('../app_api/routes/index');
// const appRouter = require('./routes/index');

// const publicPath = path.join(__dirname, '../public');
const angularBuildPath = path.join(__dirname, '../weightblog', 'build');
// const viewsPath = path.join(__dirname, '../templates/views');
// const partialsPath = path.join(__dirname, '../templates/partials');

const publicBlogLinks = [{href: '/', linkName: 'Blog Posts'}, {href: '/about', linkName: 'About Weightlist'}];
const adminLinks = [{href: '/admin/add', linkName: 'Add Post'}, {href: '/admin/edit', linkName: 'Edit Posts'}, {href: '/admin', linkName: 'Sign Out'}];

//Set up handlebars
// app.set('view engine', 'hbs');
// app.set('views', viewsPath);
// hbs.registerPartials(partialsPath);
// hbs.registerHelper( 'concat', function(path) {
//     const num = path + 1;
//     return 'posts/' + num;
// });
// hbs.registerHelper( 'concatEdit', function(path) {
//     const num = path + 1;
//     return 'edit/' + num;
// });

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(express.static(publicPath));
app.use(express.static(angularBuildPath));
app.use('/api', (req,res,next) => {
  res.header('Access-Control-Allow-Origin', 'https://shielded-bayou-85397.herokuapp.com/api/posts');
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.use('/api', apiRouter);
// app.use('/', appRouter);


//Routes


// app.get('/posts/:id', async (req,res) => {
//     try {
//         const jsonPath = '../public/json/posts.json';
//         const posts = await fs.readFile(require.resolve(jsonPath));
//         const parsedPosts = JSON.parse(posts);  
//         const id = req.params.id;
//         const postWithId = parsedPosts[id - 1];
//         if(isNaN(id)) {
//             res.render('404', {
//                 title: '404 Error',
//                 errorMessage: 'Page not found!'
//             });
//         } 
//         if(!postWithId) {
//             res.render('404', {
//                 title: '404 Error',
//                 errorMessage: `Post ${id} does not exist!`
//             });
//         }
//         res.render('post', {
//             title: 'Weightlist Posts',
//             navitems: publicBlogLinks,
//             post: postWithId
//         });
//     } catch(e) {
//         console.log(e);
//     }
// });

// app.get('/about', (req,res) => {
//     res.render('about', {
//         title: 'About Weightlist',
//         navitems: publicBlogLinks
//     });
// });

// app.get('/admin', (req,res) => {
//     res.render('login', {
//         title: 'Admin Login',
//         editURL: '/admin/edit'
//     });
// });

// app.get('/admin/edit', async (req,res) => {
//     const jsonPath = '../public/json/posts.json';
//     const posts = await fs.readFile(require.resolve(jsonPath));
//     const parsedPosts = JSON.parse(posts);
//     res.render('edit_deleteposts', {
//         title: 'Edit/Delete Posts',
//         posts: parsedPosts,
//         navitems: adminLinks
//     });
// });

// app.get('/admin/edit/:id', async (req,res) => {
//     const jsonPath = '../public/json/posts.json';
//     const posts = await fs.readFile(require.resolve(jsonPath));
//     let parsedPosts = JSON.parse(posts);
//     res.render('editpost', {
//         title: `Edit Post "${parsedPosts[req.params.id - 1].title}"`,
//         post: parsedPosts[req.params.id - 1],
//         navitems: adminLinks
//     });
// });



// app.get('/admin/add', (req,res) => {
//     res.render('addposts', {
//         title: 'Add Post',
//         navitems: adminLinks
//     });
// });



// app.get('*', (req,res) => {
//     res.render('404', {
//         title: '404 Error',
//         errorMessage: 'Page not found!',
//     });
// });

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));