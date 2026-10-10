import { displayData } from "./render.js";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UDG82QTAUY9NGZYUAFTAGN4WN`,
    );
    const weatherData = await response.json();

    const data = useWeatherData(weatherData);
    console.log(weatherData);
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

function formatDate(obj) {
  const timestamp = obj.date;
  const date = new Date(timestamp);
  const format = new Intl.DateTimeFormat("en-US", {
    timeZone: obj.timezone,
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  return format;
}

export { getWeatherData, formatDate };
