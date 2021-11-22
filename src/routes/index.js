const express = require('express');
const router = express.Router();
const ctrlPosts = require('../controllers/posts');

//Routes
router.get('/', ctrlPosts.renderPosts);

// router.get('/posts/:id', async (req,res) => {
//     try {
//         const jsonPath = './posts.json';
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

// router.get('/about', (req,res) => {
//     res.render('about', {
//         title: 'About Weightlist',
//         navitems: publicBlogLinks
//     });
// });

// router.get('/admin', (req,res) => {
//     res.render('login', {
//         title: 'Admin Login',
//         editURL: '/admin/edit'
//     });
// });

// router.get('/admin/edit', async (req,res) => {
//     const jsonPath = './public/json/posts.json';
//     const posts = await fs.readFile(require.resolve(jsonPath));
//     const parsedPosts = JSON.parse(posts);
//     res.render('edit_deleteposts', {
//         title: 'Edit/Delete Posts',
//         posts: parsedPosts,
//         navitems: adminLinks
//     });
// });

// router.get('/admin/edit/:id', async (req,res) => {
//     const jsonPath = '../public/json/posts.json';
//     const posts = await fs.readFile(require.resolve(jsonPath));
//     let parsedPosts = JSON.parse(posts);
//     res.render('editpost', {
//         title: `Edit Post "${parsedPosts[req.params.id - 1].title}"`,
//         post: parsedPosts[req.params.id - 1],
//         navitems: adminLinks
//     });
// });



// router.get('/admin/add', (req,res) => {
//     res.render('addposts', {
//         title: 'Add Post',
//         navitems: adminLinks
//     });
// });



// router.get('*', (req,res) => {
//     res.render('404', {
//         title: '404 Error',
//         errorMessage: 'Page not found!',
//     });
// });

module.exports = router;