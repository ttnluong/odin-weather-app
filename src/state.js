const div = document.querySelector("div");

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UDG82QTAUY9NGZYUAFTAGN4WN`,
    );
    const weatherData = await response.json();
    console.log(weatherData);
    const data = useWeatherData(weatherData);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

function useWeatherData(obj) {
  const usedData = {
    location: obj.address,
    date: obj.currentConditions.datetimeEpoch,
    temperature: obj.currentConditions.temp,
    description: obj.currentConditions.conditions,
  };

  return usedData;
}

export { getWeatherData };
