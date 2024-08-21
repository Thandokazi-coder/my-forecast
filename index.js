function reloadWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
     let cityElement = document.querySelector("#city");

   cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  
}

function searchCity(city) {
  let apiKey = "t0db2ac0a4ca00efa9ab2ao6364fb8f5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reloadWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
