function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
FormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
