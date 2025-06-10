"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  FaSearchLocation,
  FaTemperatureHigh,
  FaCloud,
  FaWind,
} from "react-icons/fa";
import TrendingPlaces from "../components/TrendingPlaces";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WeatherPage() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  /** Fetch weather by city name */
  const getWeather = async (city) => {
    const query = city?.trim() || location.trim();
    if (!query) return;

    setLoading(true);
    try {
      const apiKey = 'ef61d4ba3aaa35047b28f9b316bcc16f';
      
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          query
        )}&units=metric&appid=${apiKey}`
      );
      setWeather(data);
      setLocation(""); // clear input after success (optional)
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Location not found!");
      setWeather(null);
    }
    setLoading(false);
  };

  return (<>
  <Navbar />
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Check Weather</h1>

      {/* Search bar */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter location..."
          className="flex-grow border px-4 py-2 rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={() => getWeather()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* Weather result */}
      {weather && (
        <div className="bg-white rounded-xl shadow-md p-6 mt-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            <FaSearchLocation className="inline mr-2 text-blue-500" />
            {weather.name}, {weather.sys.country}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-lg">
            <p>
              <FaTemperatureHigh className="inline mr-2 text-red-500" />
              Temp: {weather.main.temp}°C (feels {weather.main.feels_like}°C)
            </p>
            <p>
              <FaCloud className="inline mr-2 text-gray-600" />
              {weather.weather[0].main}, {weather.weather[0].description}
            </p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            <p>
              <FaWind className="inline mr-2 text-blue-400" />
              Wind: {weather.wind.speed} m/s, dir {weather.wind.deg}°
            </p>
            <p>Visibility: {weather.visibility / 1000} km</p>
            <p>
              🌅 Sunrise:{" "}
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
            <p>
              🌇 Sunset:{" "}
              {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      )}
      
    </div>
    <TrendingPlaces onPlaceClick={getWeather} />
    <Footer />
    </>
  );
}
