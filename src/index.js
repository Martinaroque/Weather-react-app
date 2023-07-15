import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <h1>Weather App</h1>
      <br />
      <App />
      <br />
      <ul className="descriptionWeather">
        <li>
          Temperature:<span id="temp"></span>
        </li>
        <li>
          Description:<span id="descrip"></span>
        </li>
        <li>
          Humidity:<span id="hum"></span>
        </li>
        <li>
          Wind:<span id="wind"></span> Km/h
        </li>
        <li>
          <img src="" alt="" id="icon" />
        </li>
      </ul>
      <div class="weather-forecast" id="forecast">
        <div class="row">
          <div class="col-2">
            <div class="forescast-date"></div>
            <div>
              <img src="#" alt="" width="42px" />
            </div>
            <div class="forecast-temp">
              <span class="forescast-temp-max"></span>
              <span class="forescast-temp-min"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
