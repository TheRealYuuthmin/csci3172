import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../services/api';
import halifaxSkyline from '../assets/halifaxSkyline.jpg';

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
    <main>
      <section>
        <h1>Welcome to My Portfolio</h1>
        <img src={halifaxSkyline} alt="Halifax Skyline" style={{ maxWidth: '100%', height: 'auto' }} />
      </section>

      <section className="weather-info">
        <h2>Weather in {weather.city}</h2>
        <p>Temperature: {weather.temperature} °C</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Description: {weather.description}</p>
      </section>
    </main>
  );
}

export default Home;