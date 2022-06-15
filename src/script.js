let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[date.getDay()];
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let seconds = date.getSeconds();

let displayDateAndTime = document.querySelector("#day-time");
displayDateAndTime.innerHTML = `Today is: ${today} ${hour}:${minutes}:${seconds}`;

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let city = document.querySelector("#city");
  city.innerHTML = `${cityInput.value}`;
}

let searchTown = document.querySelector("#search-city");
searchTown.addEventListener("submit", showCity);

function toFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 86;
}

function toCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 30;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", toFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", toCelsius);

//Homework week 5 - Search Form
function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#search-city-input");
  let headCity = document.querySelector("#city");
  headCity.innerHTML = `${inputCity.value}`;
  let apiKey = "ca2c5297af3e10f6430a712560f08ff1";
  let units = "metric";
  let apiLandingpage = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiLandingpage}q=${inputCity.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", searchCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = temperature;
  let city = response.data.name;
  let headCity = document.querySelector("#city");
  headCity.innerHTML = city;
}

//Current button

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiLandingpage = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "ca2c5297af3e10f6430a712560f08ff1";
  let units = "metric";
  let apiUrl = `${apiLandingpage}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function getCurrent() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getCurrent);
