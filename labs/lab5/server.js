const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static('public'));

// API endpoint to fetch recommendations
app.get('/api/recommendations', async (req, res) => {
  try {
    const userPreferences = req.query; // Get user preferences from query parameters
    // Construct the MusicBrainz API query based on user preferences
    const apiUrl = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(userPreferences.genre)}&fmt=json`;
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from MusicBrainz API:', error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});