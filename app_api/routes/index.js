const express = require('express');
const router = express.Router();
const ctrlPosts = require('../controllers/posts');

router
  .route('/posts')
  .get(ctrlPosts.getPosts)
  .post(ctrlPosts.createPost);

router
  .route('/posts/:postId')
  .get(ctrlPosts.readOnePost)
  .put(ctrlPosts.updatePost)
  .delete(ctrlPosts.deletePost);

module.exports = router;