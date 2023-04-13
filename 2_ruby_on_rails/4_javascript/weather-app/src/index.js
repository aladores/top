import './style.css';

//  To Do
//  Unit toggle
//- Error Handling
//  - if no city is found
//https://openweathermap.org/current

function main() {
  const form = document.getElementById("search-form");
  const searchText = document.getElementById("search-text");
  const cityResults = document.getElementById("city-results");
  const weatherSection = document.getElementById("weather-results");
  const unitToggle = document.getElementById("units-toggle");
  //Search bar
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const locationResult = await getWeatherLocation(searchText.value);
      if (locationResult.length > 1) {
        cityResults.innerHTML = "";
        weatherSection.innerHTML = "";
        createCityForm(locationResult, cityResults);
      }
      else {
        getWeather(locationResult["lat"], locationResult["lon"]);
      }
    }
    catch (error) {
      console.log("Error: ", error);
    }
  });

  //Unit toggle
  unitToggle.addEventListener("change", async () => {
    if (weatherSection.innerText.length != 0) {
      const currentLat = document.getElementById("city-lat");
      const currentLon = document.getElementById("city-lon");
      const cityName = document.getElementById("city-name");
      const cityLocation = document.getElementById("city-location");
      const cityInfo = [cityName.innerText, ...cityLocation.innerText.split(",")];
      const newWeatherResult = await getWeather(currentLat.innerText, currentLon.innerText);
      createWeatherInfo(newWeatherResult, cityInfo);

    }
  });
}

function createCityForm(locationResult, cityResults) {
  const cityOptionsDiv = document.createElement("div");
  cityOptionsDiv.classList.add("city-options");

  for (let i = 0; i < locationResult.length; i++) {
    if (typeof locationResult[i]["state"] == "undefined") {
      locationResult[i]["state"] = "";
    }
    const cityOptionDiv = document.createElement("div");
    cityOptionDiv.classList.add("city-option");
    cityOptionDiv.innerHTML += `
      <p>${locationResult[i]["name"]}
      ${locationResult[i]["state"]
        ? ', <span class="city-info">' + locationResult[i]["country"] + ', ' + locationResult[i]["state"] + '</span>'
        : ', <span class="city-info"> ' + locationResult[i]["country"]}</span></p>
    `;

    cityOptionDiv.addEventListener("click", () => {
      const value = `${locationResult[i]["lat"]},${locationResult[i]["lon"]},${locationResult[i]["name"]},${locationResult[i]["country"]},${locationResult[i]["state"]}`;
      handleOptionClick(value);
    });
    cityOptionsDiv.appendChild(cityOptionDiv);
  }
  cityResults.appendChild(cityOptionsDiv);
}

async function createWeatherInfo(weatherResult, cityInfo) {
  const unitToggle = document.getElementById("units-toggle");
  const unitSymbol = unitToggle.checked ? "°F" : "°C";
  const weatherSection = document.getElementById("weather-results");
  const cityResults = document.getElementById("city-results");
  const tempRound = Math.round(weatherResult["main"]["temp"]);
  const maxRound = Math.round(weatherResult["main"]["temp_max"]);
  const lowRound = Math.round(weatherResult["main"]["temp_min"]);
  const weatherIcon = await getWeatherIcon(weatherResult["weather"][0]["icon"]);
  cityResults.innerHTML = "";
  weatherSection.innerHTML = "";
  weatherSection.innerHTML = `
    <h2 id="city-name" class="city-header">${cityInfo[0]}</h2>
    <p id="city-location" class="city-location">
    ${cityInfo[2] == ""
      ? cityInfo[1]
      : cityInfo[1] + ', ' + cityInfo[2]}</p>
    <p id ="city-lon" class="hidden">${weatherResult["coord"]["lon"]}</p>
    <p id ="city-lat" class="hidden">${weatherResult["coord"]["lat"]}</p>
    <img src="${weatherIcon}" alt =${weatherResult["main"]["description"]} class="weather-icon"></img>
    <p id ="main-temp" class="main-temp">${tempRound}${unitSymbol}</p>
    <p class="main-weather">${weatherResult["weather"][0]["main"]}</p>
    <div class="temp-range">
    <p id = "temp-max">H: ${maxRound}${unitSymbol}</p>
    <p id = "temp-min">L: ${lowRound}${unitSymbol}</p>
    </div>
    `;
  setBackgroundColor(weatherResult["weather"][0]["icon"], weatherSection);
}

function setBackgroundColor(weatherIconValue, weatherSection) {
  if (weatherIconValue.slice(-1) == "d") {
    weatherSection.classList.remove("weather-results-dark-background");
    weatherSection.classList.add("weather-results-light-background");
    return;
  }
  weatherSection.classList.remove("weather-results-light-background");
  weatherSection.classList.add("weather-results-dark-background");
}
async function handleOptionClick(value) {
  const [lat, lon, name, country, state = ''] = value.split(',');
  const cityInfo = [name, country, state];

  try {
    const weatherResult = await getWeather(lat, lon);
    createWeatherInfo(weatherResult, cityInfo);
  }
  catch (error) {
    console.log("Error: ", error);
  }
}

async function getWeatherLocation(searchText) {

  const locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${apiKey}`);
  const locationResult = await locationResponse.json();
  return locationResult;
}

async function getWeather(lat, lon) {
  const unitToggle = document.getElementById("units-toggle");
  const units = unitToggle.checked ? "imperial" : "metric";

  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);
  const weatherResult = await weatherResponse.json();
  return weatherResult;
}

async function getWeatherIcon(icon) {
  const iconResponse = await fetch(`https://openweathermap.org/img/wn/${icon}@4x.png`);
  return (iconResponse["url"]);
}
main();