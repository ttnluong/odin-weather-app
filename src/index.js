import "./styles.css";
import { getWeatherData } from "./state.js";
import { submitLocation } from "./events.js";
import { displayData } from "./render.js";

getWeatherData("london");
submitLocation();
displayData();
