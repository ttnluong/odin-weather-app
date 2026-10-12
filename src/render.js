<<<<<<< HEAD
import { formatDate, capitalizeFirstLetter, formatTemp } from "./util.js";
import { getIcon } from "./state.js";

let tempC;

export function displayData(obj) {
  const location = document.querySelector(".location");
  const date = document.querySelector(".date");
  const temp = document.querySelector(".temp");
  const description = document.querySelector(".description");

  tempC = obj.temperature;

  location.textContent = capitalizeFirstLetter(obj.location);
  date.textContent = formatDate(obj.date);
  temp.textContent = formatTemp(tempC);
  description.textContent = obj.description;
  displayIcon(obj.icon);
}

async function displayIcon(name) {
  const icon = document.querySelector(".icon");
  icon.src = await getIcon(name);
}

export function updateTemp() {
  document.querySelector(".temp").textContent = formatTemp(tempC);
}
=======
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
>>>>>>> b82a2c409d52211fc4d60e7758fcc6ac6116763a
