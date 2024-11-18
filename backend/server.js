// server.js or app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Enables CORS for frontend-backend communication

const app = express();
app.use(express.json());
app.use(cors()); // Enables CORS

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error));

// Farmer Model (or import from models folder)
const Farmer = require('./models/Farmer'); // Ensure Farmer model is in models/Farmer.js

// Farmer Registration Route
app.post('/api/register', async (req, res) => {
  try {
    const farmerData = req.body;
    const newFarmer = new Farmer(farmerData);
    await newFarmer.save();
    res.status(201).json({ message: 'Farmer registered successfully', farmer: newFarmer });
  } catch (error) {
    console.error('Error registering farmer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get Farmers Route
app.get('/api/farmers', async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.json(farmers);
  } catch (error) {
    console.error('Error fetching farmers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
