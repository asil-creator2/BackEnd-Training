const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  role: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    required: true,
  },

  skills: {
    type: [String],
    default: [],
  },

  github: {
    type: String,
    required: true,
  },

  linkedin: {
    type: String,
    required: true,
  },

  projects: {
    type: [String],
    default: [],
  },

  yearsExp: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = memberSchema