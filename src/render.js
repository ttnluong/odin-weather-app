import { formatDate } from "./state.js";

function displayData(obj) {
  const container = document.querySelector("main");
  const location = document.querySelector(".location");
  const date = document.querySelector(".date");
  const temp = document.querySelector(".temp");
  const description = document.querySelector(".description");

  location.textContent = obj.location;
  date.textContent = formatDate(obj);
  temp.textContent = obj.temperature;
  description.textContent = obj.description;

  container.append(location, date, temp, description);
}

export { displayData };
