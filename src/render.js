import { getWeatherData } from "./state.js";

function displayData() {
  const container = document.querySelector("main");
  const loc = document.createElement("h2");
  const date = document.createElement("p");
  const temp = document.createElement("h3");
  const description = document.createElement("p");

  const data = getWeatherData();

  loc.textContent = data.location;

  container.appendChild(loc);
}

export { displayData };
