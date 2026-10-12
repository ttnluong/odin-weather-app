import { displayData } from "./render.js";

export async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&iconSet=icons2&key=UDG82QTAUY9NGZYUAFTAGN4WN`,
    );
<<<<<<< HEAD
    const json = await response.json();

    const data = useWeatherData(json);
    console.log(data);
    displayData(data);
=======
    const weatherData = await response.json();
    console.log(weatherData);
    const data = useWeatherData(weatherData);
    console.log(data);
    return data;
>>>>>>> b82a2c409d52211fc4d60e7758fcc6ac6116763a
  } catch (error) {
    console.error(error);
  }
}

function useWeatherData(obj) {
<<<<<<< HEAD
  const useData = {
    timezone: obj.timezone,
    location: obj.address,
    date: obj.currentConditions.datetimeEpoch,
    icon: obj.currentConditions.icon,
=======
  const usedData = {
    location: obj.address,
    date: obj.currentConditions.datetimeEpoch,
>>>>>>> b82a2c409d52211fc4d60e7758fcc6ac6116763a
    temperature: obj.currentConditions.temp,
    description: obj.currentConditions.conditions,
  };

<<<<<<< HEAD
  return useData;
}

export async function getIcon(name) {
  const icon = await import(`./assets/weather-icons/${name}.svg`);
  return icon.default;
}
=======
  return usedData;
}

export { getWeatherData };
>>>>>>> b82a2c409d52211fc4d60e7758fcc6ac6116763a
