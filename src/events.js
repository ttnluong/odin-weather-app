import { getWeatherData } from "./state.js";

function submitLocation() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input-location").value;
    console.log(input);

    getWeatherData(input);
    form.reset();
  });
}

export { submitLocation };
