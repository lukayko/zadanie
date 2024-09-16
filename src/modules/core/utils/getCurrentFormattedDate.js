export default function getCurrentFormattedDate() {
  const date = new Date();

  const dayFormatter = new Intl.DateTimeFormat("sk-SK", { weekday: "long" });
  const dateFormatter = new Intl.DateTimeFormat("sk-SK", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const dayName = dayFormatter.format(date);
  const formattedDayName = dayName.replace(/^\w{1}/, (char) => {
    return char.toUpperCase();
  });

  const fullDate = dateFormatter.format(date);

  return `${formattedDayName}, ${fullDate}`;
}
