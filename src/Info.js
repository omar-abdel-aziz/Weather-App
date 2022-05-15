import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Info = ({ route, navigation }, props) => {
  const location = useLocation();
  const [city, setCity] = useState(location.state.city);
  const [country, setCountry] = useState(location.state.country);
  console.log(country);
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState();
  const [loading, setLoading] = useState(true);
  const getWeatherData = (city, country) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5089d726ee43dfaec5e713d460b0d6d9`,
    })
      .then((response) => {
        console.log(response.data.main.temp);
        setTemp(response.data.main.temp);
        setWeather(response.data.weather[0].main);
        setDesc(response.data.weather[0].description);
        setIcon(response.data.weather[0].icon);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    getWeatherData(city, country);
    console.log(city);
    loading ? setLoading(false) : console.log("lol");
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [loading]);
  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <text> loading </text>
      ) : (
        <div className="screen">
          <div className="info">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="click the button to get the weather icon"
            />
            <div className="tempretures">
              <div className="farenheit">
                {((temp - 273.15) * 1.8 + 32).toFixed(2)}°F
              </div>
              <div className="celcius"> {(temp - 273.15).toFixed(2)}°C </div>
            </div>
            <div className="description">
              Weather: {weather} <br />
              <br />
              Description: {desc}
              <br />
              <br />
              {time.toLocaleDateString()}, {time.toLocaleTimeString()}
              <br />
              <br />
              {city}, {country}
            </div>
          </div>
          <div className="goBackButton">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
