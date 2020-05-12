import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        setWeather(response.data.current);
      });
  }, [capital, api_key]);
  return (
    <>
      {console.log(weather.temperature)}
      <h3>Current weather in capital</h3>
      <p>Temperature: {weather.temperature}</p>
      <p>
        Wind: {weather.wind_dir} {weather.wind_speed} km/h
      </p>
      <img src={weather.weather_icons} alt={weather.weather_descriptions} />
    </>
  );
};

export default Weather;
