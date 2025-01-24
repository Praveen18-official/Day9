// App.js
import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const App = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    const fakeWeatherData = {
      city: location,
      temperature: Math.floor(Math.random() * 40),
      condition: "Sunny",
    };
    setWeather(fakeWeatherData);
  };

  const appStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  };

  return (
    <div style={appStyle}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <button onClick={handleSearch}>Get Weather</button>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;