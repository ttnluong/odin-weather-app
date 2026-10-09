const div = document.querySelector("div");

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UDG82QTAUY9NGZYUAFTAGN4WN`,
    );
    const weatherData = await response.json();
    console.log(weatherData);
    useWeatherData(weatherData);
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}

function useWeatherData(obj) {
  const usedData = {
    description: obj.currentConditions.conditions,
    temperature: obj.currentConditions.temp,
  };

  console.log(usedData);

  return usedData;
}

export { getWeatherData, useWeatherData };
