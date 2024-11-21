// "use strict";

import { API_KEY, API_URL_FIRST, API_URL_SEC } from "./config.js";

const container = document.querySelector(".container");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const submit = document.querySelector(".search-box");
const inputField = document.querySelector("input");
const inputInner = document.querySelector(".inputInner");

const resetInput = function () {
  inputField.value = "";
  inputInner.placeholder = "SEARCH AGAIN ...";
};

const displayInfo = function (containerHeigth, boxAndDetalisDisplay) {
  container.style.height = containerHeigth;
  weatherBox.style.display = weatherDetails.style.display =
    boxAndDetalisDisplay;
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  // const APIKey = "";
  const city = inputField.value;

  if (city === "") return;

  fetch(`${API_URL_FIRST}=${city}&${API_URL_SEC}=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        // IMPLEMNTING DISPLAY ERROR FEATURES
        displayInfo("400px", "none");

        error404.style.display = "block";
        error404.classList.add("fadeIn");

        // RESETING SEACH INPUT VALUES
        resetInput();

        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      /*
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;

        case "Rain":
          image.src = "images/rain.png";
          break;

        case "Snow":
          image.src = "images/snow.png";
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          break;

        case "Haze":
          image.src = "images/mist.png";
          break;

        default:
          image.src = "";
      } */

      const weatherImages = {
        Clear: "images/clear.png",
        Rain: "images/rain.png",
        Snow: "images/snow.png",
        Clouds: "images/cloud.png",
        Haze: "images/mist.png",
      };

      image.src = weatherImages[json.weather[0].main] || "";

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      // RESETING SEACH INPUT VALUES
      resetInput();

      // IMPLEMNTING DISPLAY FEATURES
      displayInfo("590px", "");

      // ADDING TRANSTION STYLE CALSSES
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
    });
});
