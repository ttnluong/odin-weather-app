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

export function formatTemp(c) {
  const unit = document.querySelector("input[name='unit']:checked").value;
  const value = unit === "F" ? (c * 9) / 5 + 32 : c;
  return `${Math.round(value)}°${unit}`;
}

export function roundToInteger(value) {
  return Math.round(value);
}
