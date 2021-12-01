const mongoose = require('mongoose');
const Post = mongoose.model('Post');


// belong to /posts route
const createPost = (req, res) => {
  // modelName.create(dataToSave, callback)
  Post.create({
      title: req.body.title,
      body: req.body.body
    }, (err, post) => {
      if(err) console.log(err);
      res.status(201).json(post);
    })
};

const getPosts = (req, res) => {
  Post.find()
    .exec((err,posts) => {
      if(!posts) return res.status(404).json({"message": "Posts not found"});
      else if(err) return res.status(400).json(err);
      res.status(200).json(posts);
    })
  
};

// belong to /posts/:postId
const readOnePost = (req,res) => {
  Post
    .findById(req.params.postId)
    // .select('title body date')  if this were implemented, would return only title, body, and date
    .exec((err,post) => {
      if(!post) {
        return res
                .status(404)
                .json({"message": "post not found"})
      } else if (err) {
        return res
                .status(404)
                .json(err)
      }
      res
        .status(200)
        .json(post);
    });
};

const updatePost = (req, res) => {
  if(!req.params.postId) {
    return res.status(404).json({"message": "Post ID is required"});
  }
  Post.findById(req.params.postId)
    .exec((err, post) => {
      if(!post) {
        return res.status(404).json({"message": "postId not found"});
      } else if (err) {
        return res.status(400).json(err);
      }
      post.title = req.body.title;
      post.body = req.body.body;
      post.updatedAt = new Date();

      post.save((err,post) => {
        if(err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(post);
        }
      })
    })
};

const deletePost = (req, res) => {
  if(!req.params.postId) {
    return res.status(404).json({"message": "postId is required"});
  } 
  Post.findByIdAndRemove(req.params.postId)
    .exec((err, post) => {
      if(err) res.status(400).json(err);
      res.status(204).json(null);
    })
};

module.exports = {
  createPost,
  getPosts,
  readOnePost,
  updatePost,
  deletePost
};