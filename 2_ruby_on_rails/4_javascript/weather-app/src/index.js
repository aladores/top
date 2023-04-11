import './style.css';


function main() {
  const form = document.getElementById("search-form");
  const searchText = document.getElementById("search-text");
  const cityResults = document.getElementById("city-results");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    //console.log(searchText.value);
    try {
      const locationResult = await getWeatherLocation(searchText.value);
      if (locationResult.length > 1) {
        cityResults.innerHTML = "";
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
}


function createCityForm(locationResult, cityResults) {
  const locationForm = document.createElement("form");
  for (let i = 0; i < locationResult.length; i++) {
    const radioButton = document.createElement("input");
    radioButton.type = "radio"
    radioButton.id = `city-${i}`;
    radioButton.name = "city";
    radioButton.value = `${locationResult[i]["lat"]},${locationResult[i]["lon"]}, ${locationResult[i]["name"]}, ${locationResult[i]["country"]}, ${locationResult[i]["state"]}`;
    radioButton.addEventListener("click", handleRadioClick);
    //radioButton.addEventListener("click", handleRadioClick);

    const radioLabel = document.createElement("label");
    radioLabel.htmlFor = `city-${i}`;
    radioLabel.innerText = `${locationResult[i]["name"]}, ${locationResult[i]["country"]}, ${locationResult[i]["state"]}`;

    //radioButton.innerText = `type="radio" id="city-${i}" name="city" value="${locationResult[i]}"`;
    //radioLabel.innerHTML = `<for="city-${i}"> ${locationResult[i]["name"]}, ${locationResult[i]["country"]}, ${locationResult[i]["state"]}</label><br>`;

    locationForm.appendChild(radioButton);
    locationForm.appendChild(radioLabel);
    locationForm.appendChild(document.createElement("br"));
  }
  cityResults.append(locationForm);
}

function createWeatherInfo(weatherResult, cityInfo) {
  console.log(weatherResult);
  console.log(weatherResult["main"]);
  const weatherSection = document.getElementById("weather-results");
  const cityResults = document.getElementById("city-results");
  cityResults.innerHTML = "";
  weatherSection.innerHTML = `
    <h2>${cityInfo[0]}<h2>
    <h3>${cityInfo[1]},${cityInfo[2]}</h3>

    <p>${weatherResult["main"]["temp"]}</p>
    `;


}

async function handleRadioClick() {
  const selectedValue = document.querySelector('input[name="city"]:checked').value;
  const [lat, lon, name, country, state] = selectedValue.split(',');
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

  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  const weatherResult = await weatherResponse.json();
  return weatherResult;
}
main();