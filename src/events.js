import { getWeatherData } from "./state.js";
import { formatTemp } from "./util.js";
import { updateTemp } from "./render.js";

export function submitLocation() {
  const locationForm = document.querySelector(".location-form");

  locationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input-location").value;
    console.log(input);

    getWeatherData(input);
    locationForm.reset();
  });
}

export function toggleUnit() {
  const unitForm = document.querySelector(".unit-form");
  unitForm.addEventListener("change", updateTemp);
}
