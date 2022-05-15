import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const WeatherApp = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const [city, setCity] = useState("Seattle");
  const [country, setCountry] = useState("US");
  const navigate = useNavigate();
  return (
    <div className="outer">
      <div className="inputs">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={country}
          onChange={(e) => {
            console.log(country);
            setCountry(e.target.value);
            console.log(country);
          }}
        />
      </div>
      <div className="submit">
        <button
          onClick={() => {
            navigate("info", { state: { city: city, country: country } }); // THE ISSUE IS HERE, THE PARAMATERS ARENT BEING PASSED TO THE OTHER PAGE
          }}
        >
          Get Weather Data
        </button>
      </div>
    </div>
  );
};

export default WeatherApp;
