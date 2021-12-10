const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  algorithms: ['HS512']
})
const ctrlPosts = require('../controllers/posts');
const ctrlAuth = require('../controllers/authentication');

router
  .route('/posts')
  .get(ctrlPosts.getPosts)
  .post(ctrlPosts.createPost);

router
  .route('/posts/:postId')
  .get(ctrlPosts.readOnePost)
  .put(ctrlPosts.updatePost)
  .delete(ctrlPosts.deletePost);

// router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;