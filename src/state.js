import { displayData } from "./render.js";

export async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&iconSet=icons2&key=UDG82QTAUY9NGZYUAFTAGN4WN`,
    );
    const json = await response.json();
    console.log(json);
    const data = useWeatherData(json);
    console.log(data);
    displayData(data);
  } catch (error) {
    console.error(error);
  }
}

function useWeatherData(obj) {
  const useData = {
    timezone: obj.timezone,
    location: obj.address,
    date: obj.currentConditions.datetimeEpoch,
    icon: obj.currentConditions.icon,
    temperature: obj.currentConditions.temp,
    description: obj.currentConditions.conditions,
  };

  return useData;
}

export async function getIcon(name) {
  const icon = await import(`./assets/weather-icons/${name}.svg`);
  return icon.default;
}
