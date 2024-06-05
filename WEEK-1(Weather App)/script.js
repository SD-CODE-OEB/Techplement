const searchInp = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-button");

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
      document.body.style.backgroundImage =
        "url('Images/evans-dims-FBXdyTMEyiU-unsplash.jpg')";
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
      document.body.style.backgroundImage =
        "url('Images/anandu-vinod-pbxwxwfI0B4-unsplash.jpg')";
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
      document.body.style.backgroundImage =
        "url('Images/joy-stamp-pGQbWXBC1dA-unsplash.jpg')";
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
      document.body.style.backgroundImage =
        "url('Images/click-and-learn-photography-NGB9oBtOUM8-unsplash.jpg')";
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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  getWeather(url);
};

function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
