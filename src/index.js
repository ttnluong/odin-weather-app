import "./styles.css";
import { getWeatherData } from "./state.js";
import { submitLocation, toggleUnit } from "./events.js";
import { displayData } from "./render.js";

getWeatherData("amsterdam");
submitLocation();
toggleUnit();
displayData();
