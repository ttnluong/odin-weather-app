function formatDate(obj) {
  const date = new Date(obj.date);
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

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export { formatDate, capitalizeFirstLetter };
