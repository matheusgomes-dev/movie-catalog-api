const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true
  },
  movieDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Movie", MovieSchema);
