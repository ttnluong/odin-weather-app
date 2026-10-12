import { getWeatherData } from "./state.js";
import { formatTemp } from "./util.js";
import { updateTemp } from "./render.js";

export function submitLocation() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input-location").value;
    console.log(input);

    getWeatherData(input);
    form.reset();
  });
}

export function toggleUnit() {
  const unitForm = document.querySelector(".unit-form");
  const tempText = document.querySelector(".temp");
  unitForm.addEventListener("change", updateTemp);
}
