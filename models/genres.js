const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Genre name is required'],
    unique: true,
  },
  description: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('Genre', genreSchema);