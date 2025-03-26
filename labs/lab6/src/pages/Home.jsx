import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../services/api';

function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeatherData()
      .then((data) => setWeather(data))
      .catch((error) => console.error('Error fetching weather:', error));
  }, []);

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Description: {weather.description}</p>
    </div>
  );
}

export default Home;