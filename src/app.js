function formatDate(timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMonth();
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
  let day = days[date.getDay()];
  if (hours < 10) {
  hours = `0${hours}`;
  }
  if (minutes < 10) {
  minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000)
}


  // let cityName = document.querySelector("#search-input").value.trim();
let apiKey = "96fc9dbf0bd42fe281a341e984ec7160";
let units = "metric";
let endpointURL = `https://api.openweathermap.org/data/2.5/weather`;
let requestUrl = `${endpointURL}?q=New York&appid=${apiKey}&units=${units}`;

axios.get(requestUrl).then(displayTemperature);