import "./styles.css";
import { getWeatherData, useWeatherData } from "./state.js";
import { submitLocation } from "./events.js";

getWeatherData("london");
submitLocation();
