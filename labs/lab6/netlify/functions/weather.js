const axios = require('axios');

exports.handler = async (event, context) => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  // Get city from query param or default to Halifax
  const city = event.queryStringParameters?.city || 'Halifax';

  if (!apiKey) {
    console.error('OpenWeatherMap API Key not configured in Netlify environment variables.');
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Weather service API key is missing.' }),
    };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const { name, main, weather } = response.data;

    if (!main || !weather || !weather.length) {
      console.error('Incomplete weather data received:', response.data);
       return {
          statusCode: 500,
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ error: 'Incomplete weather data received from provider.' })
       };
    }

    const weatherData = {
      city: name,
      temperature: main.temp,
      humidity: main.humidity,
      description: weather[0].description,
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', 
      },
      body: JSON.stringify(weatherData),
    };
  } catch (error) {
    console.error('Error fetching weather:', error.response ? error.response.data : error.message);
    return {
      statusCode: error.response ? error.response.status : 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Failed to fetch weather data.' }),
    };
  }
};