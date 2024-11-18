// models/Farmer.js

const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Farmer', farmerSchema);
