function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}


  // let cityName = document.querySelector("#search-input").value.trim();
let apiKey = "96fc9dbf0bd42fe281a341e984ec7160";
let units = "metric";
let endpointURL = `https://api.openweathermap.org/data/2.5/weather`;
let requestUrl = `${endpointURL}?q=New York&appid=${apiKey}&units=${units}`;

axios.get(requestUrl).then(displayTemperature);