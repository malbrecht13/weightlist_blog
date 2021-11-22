const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    required: false
  }
});

mongoose.model('Post', postSchema);