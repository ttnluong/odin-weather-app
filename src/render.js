import { formatDate, formatTemp } from "./util.js";
import { getIcon } from "./state.js";

let tempC;

export function displayData(obj) {
  const location = document.querySelector(".location");
  const date = document.querySelector(".date");
  const temp = document.querySelector(".temp");
  const description = document.querySelector(".description");

  tempC = obj.temperature;

  location.textContent = obj.location;
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
