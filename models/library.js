const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  title: String,
  author: String,
  publishDate: Number,
  ISBN: Number,
  currentlyReading: Boolean,
  read: Boolean
})


module.exports = mongoose.model('Library', librarySchema);