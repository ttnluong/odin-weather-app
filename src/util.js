export function formatDate(obj) {
  const date = new Date(obj * 1000);
  const format = new Intl.DateTimeFormat("en-GB", {
    timeZone: obj.timezone,
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  return format;
}

export function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function formatTemp(f) {
  const unit = document.querySelector("input[name='unit']:checked").value;
  const value = unit === "C" ? ((f - 32) * 5) / 9 : f;
  return `${Math.round(value)}°${unit}`;
}
