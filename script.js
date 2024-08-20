function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("search-form-input");
  let cityElement = documnet.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchForElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
