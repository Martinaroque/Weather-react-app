import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Weather() {
  let [city, setCity] = useState("");

  function showTemperature(response) {
    let temp = document.querySelector("#temp");
    temp.innerHTML = Math.round(response.data.main.temp);
    let descrip = document.querySelector("#descrip");
    descrip.innerHTML = response.data.weather[0].description;
    let hum = document.querySelector("#hum");
    hum.innerHTML = response.data.main.humidity;
    let wind = document.querySelector("#wind");
    wind.innerHTML = response.data.wind.speed;
    let icon = document.querySelector("#icon");
    icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    getForecast(response.data.coord);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cb72bec958f8fb02391985ed7b219d2&units=metric`;
    axios.get(url).then(showTemperature);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="type a city" onChange={updateCity} />
      <input type="submit" className="btn btn-primary m-2 p-2" />
    </form>
  );
  function formatDay(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  function showForecast(response) {
    let forecasting = response.data.daily;

    let forecastElement = document.querySelector("#forecast");

    let forecastHtml = ` <div class="row">`;

    forecasting.forEach(function (forecastDay, index) {
      if (index < 6) {
        forecastHtml =
          forecastHtml +
          ` <div class="col-2">
        <div class="forescast-date">
        ${formatDay(forecastDay.dt)}
    </div>
    <div>
        <img src="https://openweathermap.org/img/wn/${
          forecastDay.weather[0].icon
        }@2x.png" alt="" width="42px"/>
    </div>
    <div class="forecast-temp">
        <span class="forescast-temp-max" >${Math.round(
          forecastDay.temp.max
        )}º</span> 
        <span class="forescast-temp-min">${Math.round(
          forecastDay.temp.min
        )}º</span> 
    </div>
    </div>`;
      }
    });

    forecastHtml = forecastHtml + `</div>`;
    forecastElement.innerHTML = forecastHtml;
  }
  function getForecast(coordinates) {
    let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }
}
