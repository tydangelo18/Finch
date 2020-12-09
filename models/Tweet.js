// Require Mongoose for Schema
const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

// Tweets Schema
const tweetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },

  following: {
    type: Number,
    trim: true,
    required: true,
  },
  followers: {
    type: Number,
    trim: true,
    required: true,
  },
  userTweet: {
    type: Number,
    trim: true,
    required: true,
  },
  tweet: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  likes: {
    type: Number,
    trim: true,
    required: true,
  },
  retweets: {
    type: Number,
    trim: true,
    required: true,
  },
  replies: {
    type: Number,
    trim: true,
    required: true,
  },
});

// Define Schema as "Tweet"
const Tweet = mongoose.model('Tweet', tweetSchema);

// Export the Schema
module.exports = Tweet;
