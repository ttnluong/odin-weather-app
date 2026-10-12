import { formatDate, capitalizeFirstLetter, formatTemp } from "./util.js";

let tempC;

export function displayData(obj) {
  console.log(obj);
  console.log(obj.temperature, typeof obj.temperature);

  const container = document.querySelector("main");
  const location = document.querySelector(".location");
  const date = document.querySelector(".date");
  const temp = document.querySelector(".temp");
  const description = document.querySelector(".description");

  tempC = obj.temperature;

  location.textContent = capitalizeFirstLetter(obj.location);
  date.textContent = formatDate(obj.date);
  temp.textContent = formatTemp(tempC);
  description.textContent = obj.description;

  container.append(location, date, temp, description);
}

export function updateTemp() {
  document.querySelector(".temp").textContent = formatTemp(tempC);
}
