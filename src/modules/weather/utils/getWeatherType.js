export default function getWeatherType(weather) {
  const weatherPatterns = {
    Slnečno: /bright sun|clear sky|sunny|mostly clear/i,
    Prehánky: /showers|drizzle/i,
    Dážd: /rain/,
    Oblačno: /cloudy|overcast|mist/i,
  };

  for (const [condition, pattern] of Object.entries(weatherPatterns)) {
    if (pattern.test(weather)) {
      return condition;
    }
  }

  return "Neznáme";
}
