const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  title: String,
  author: String,
  publishDate: Number,
  ISBN: String,
  currentlyReading: Boolean,
  read: Boolean
})


module.exports = mongoose.model('Library', librarySchema);