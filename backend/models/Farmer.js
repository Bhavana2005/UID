// models/Farmer.js

const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  farmSize: Number,
});

module.exports = mongoose.model('Farmer', farmerSchema);
