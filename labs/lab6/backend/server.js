const express = require('express');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

app.get('/projects', (req, res) => {
  fs.readFile('projects.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read projects data.' });
    }
    res.json(JSON.parse(data));
  });
});

app.get('/weather', async (req, res) => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const city = 'Halifax'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=<span class="math-inline">\{city\}&appid\=</span>{apiKey}&units=metric`;
  
  try {
    const response = await axios.get(url);
    const { name, main, weather } = response.data;
    res.json({
      city: name,
      temperature: main.temp,
      humidity: main.humidity,
      description: weather[0].description,
    });
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).json({ error: 'Failed to fetch weather data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});