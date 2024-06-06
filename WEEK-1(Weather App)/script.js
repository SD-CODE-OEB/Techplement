const searchInp = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-button");
const citiesStored = document.querySelector("#cities");

searchInp.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchBtn.click();
  } else {
    return;
  }
});
const api_key = "5269e7eee6c5f0a5cee268571cabde64";
const getWeather = async (url) => {
  try {
    document.querySelector(".weather-display").innerHTML = "";
    const loading = document.createElement("div");
    loading.classList.add("tri");
    document.querySelector(".weather-display").appendChild(loading);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let weatherDesc = data.weather[0].description;
    weatherDesc = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);
    if (
      weatherDesc.includes("Clear sky") ||
      weatherDesc.includes("Clear Sky") ||
      weatherDesc.includes("Clear") ||
      weatherDesc.includes("Sky")
    ) {
      setTimeout(() => {
        document.body.style.backgroundImage =
          "url('Images/_1b8d6e33-a8ea-4405-a10a-176037339928.jpeg')";
      }, 500);
    } else if (
      weatherDesc.includes("cloud") ||
      weatherDesc.includes("Cloud") ||
      weatherDesc.includes("clouds") ||
      weatherDesc.includes("Clouds") ||
      weatherDesc.includes("overcast") ||
      weatherDesc.includes("Overcast") ||
      weatherDesc.includes("fog") ||
      weatherDesc.includes("Fog") ||
      weatherDesc.includes("mist") ||
      weatherDesc.includes("Mist") ||
      weatherDesc.includes("haze") ||
      weatherDesc.includes("Haze") ||
      weatherDesc.includes("smoke") ||
      weatherDesc.includes("Smoke")
    ) {
      setTimeout(() => {
        document.body.style.backgroundImage =
          "url('Images/_6cdf35c9-de65-4cf3-bb9d-520ed0528d1b.jpeg')";
      }, 500);
    } else if (
      weatherDesc.includes("rain") ||
      weatherDesc.includes("Rain") ||
      weatherDesc.includes("drizzle") ||
      weatherDesc.includes("Drizzle") ||
      weatherDesc.includes("shower") ||
      weatherDesc.includes("Shower") ||
      weatherDesc.includes("thunderstorm") ||
      weatherDesc.includes("Thunderstorm") ||
      weatherDesc.includes("storm") ||
      weatherDesc.includes("Storm") ||
      weatherDesc.includes("rainy") ||
      weatherDesc.includes("Rainy") ||
      weatherDesc.includes("showers") ||
      weatherDesc.includes("Showers") ||
      weatherDesc.includes("thunderstorms") ||
      weatherDesc.includes("Thunderstorms") ||
      weatherDesc.includes("storms") ||
      weatherDesc.includes("Storms")
    ) {
      setTimeout(() => {
        document.body.style.backgroundImage =
          "url('Images/_80b7bee2-421c-4186-b172-40af192a4781.jpeg')";
      }, 500);
    } else if (
      weatherDesc.includes("snow") ||
      weatherDesc.includes("Snow") ||
      weatherDesc.includes("snowy") ||
      weatherDesc.includes("Snowy") ||
      weatherDesc.includes("blizzard") ||
      weatherDesc.includes("Blizzard") ||
      weatherDesc.includes("hail") ||
      weatherDesc.includes("Hail") ||
      weatherDesc.includes("sleet") ||
      weatherDesc.includes("Sleet") ||
      weatherDesc.includes("ice") ||
      weatherDesc.includes("Ice") ||
      weatherDesc.includes("freezing") ||
      weatherDesc.includes("Freezing") ||
      weatherDesc.includes("frost") ||
      weatherDesc.includes("Frost") ||
      weatherDesc.includes("icy") ||
      weatherDesc.includes("Icy") ||
      weatherDesc.includes("cold") ||
      weatherDesc.includes("Cold") ||
      weatherDesc.includes("chill") ||
      weatherDesc.includes("Chill")
    ) {
      setTimeout(() => {
        document.body.style.backgroundImage =
          "url('Images/_98e9b4b7-5038-42bd-aced-4f6192a274cd.jpeg')";
      }, 500);
    }
    document.querySelector(".weather-display").innerHTML = `
    <div class="weather-card">
      <h1 class="city">${data.name}</h1>
      <p class="description"><img src="https://openweathermap.org/img/wn/${
        data.weather[0].icon
      }@2x.png" alt="weather-icon" class="icon" />
      <span>${weatherDesc}</span>
      </p>
      <p class="temperature">Temparature: ${toCelsius(data.main.temp)}°C</p>
      <p class="humidity">Humidity: ${data.main.humidity} %</p>
      <p class="wind">Wind: ${data.wind.speed} m/s</p>
      </div>`;
  } catch (error) {
    document.querySelector(
      ".weather-display"
    ).innerHTML = `<div class="container">
      <div class="weather-card">
        <h1 class="city">City not found</h1>
        </div>
        </div>`;
  }
};
if (document.location.reload) {
  searchInp.value = "";
}
searchBtn.onclick = () => {
  const city = searchInp.value;
  const addCity = document.createElement("option");
  addCity.value = city;
  let cityExists = false;
  for (let i = 0; i < citiesStored.options.length; i++) {
    if (citiesStored.options[i].value === city) {
      cityExists = true;
    }
  }
  if (!cityExists) {
    citiesStored.appendChild(addCity);
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  getWeather(url);
};

function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
