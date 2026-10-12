import "./styles.css";
import { getWeatherData } from "./state.js";
import { submitLocation, toggleUnit } from "./events.js";
import { displayData } from "./render.js";

getWeatherData("london");
submitLocation();
toggleUnit();
displayData();
