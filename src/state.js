import { displayData } from "./render.js";

export async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UDG82QTAUY9NGZYUAFTAGN4WN`,
    );
    const json = await response.json();

    const data = useWeatherData(json);
    console.log(json);
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
    temperature: obj.currentConditions.temp,
    description: obj.currentConditions.conditions,
  };

  return useData;
}
