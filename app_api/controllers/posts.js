const mongoose = require('mongoose');
const postModel = mongoose.model('Post');

// belong to /posts route
const createPost = (req, res) => {
  console.log(req.body.body);
  // modelName.create(dataToSave, callback)
  postModel.create({
      title: req.body.title,
      body: req.body.body
    }, (err, post) => {
      if(err) console.log(err);
      res.status(201).json(post);
    })
};

const getPosts = (req, res) => {
  res
    .status(200)
    .json({"status": "successfully received posts"});
};

// belong to /posts/:postId
const readOnePost = (req,res) => {
  postModel
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

};

const deletePost = (req, res) => {

};

module.exports = {
  createPost,
  getPosts,
  readOnePost,
  updatePost,
  deletePost
};