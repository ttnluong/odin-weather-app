import "./styles.css";
import { getWeatherData } from "./state.js";
<<<<<<< HEAD
import { submitLocation, toggleUnit } from "./events.js";
=======
import { submitLocation } from "./events.js";
>>>>>>> b82a2c409d52211fc4d60e7758fcc6ac6116763a
import { displayData } from "./render.js";

getWeatherData("london");
submitLocation();
<<<<<<< HEAD
toggleUnit();
=======
>>>>>>> b82a2c409d52211fc4d60e7758fcc6ac6116763a
displayData();
