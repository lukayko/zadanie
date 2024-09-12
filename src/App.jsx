import Header from "./modules/core/components/Header/Header";
import WeatherReport from "./modules/weather/components/WeatherReport/WeatherReport";
import { createContext } from "react";

const weatherReport = {
  city: "Bratislava",
  country: "Slovensko",
  currentTemperature: 19,
  currentWeather: "Prehánky",
  details: [
    { text: "Úhrn zrážok", value: "3cm", img: "Umbrella" },
    { text: "Rýchlosť vetra", value: "19km/h", img: "Wind" },
    { text: "Vlhkosť vzduchu", value: "64%", img: "Droplet" },
  ],
  weatherData: [
    { hour: "11:00", temperature: 21, weather: "Prehánky" },
    { hour: "12:00", temperature: 22, weather: "Polooblačno" },
    { hour: "13:00", temperature: 22, weather: "Slnečno" },
    { hour: "14:00", temperature: 22, weather: "Slnečno" },
    { hour: "15:00", temperature: 24, weather: "Oblačno" },
    { hour: "16:00", temperature: 22, weather: "Oblačno" },
    { hour: "17:00", temperature: 23, weather: "Oblačno" },
    { hour: "18:00", temperature: 21, weather: "Polooblačno" },
    { hour: "19:00", temperature: 20, weather: "Polooblačno" },
    { hour: "20:00", temperature: 18, weather: "Prehánky" },
    { hour: "21:00", temperature: 16, weather: "Prehánky" },
  ],
};

export const WeatherContext = createContext();

function App() {
  return (
    <div>
      <Header />
      <WeatherContext.Provider value={weatherReport}>
        <WeatherReport
          destination={[
            weatherReport.city,
            weatherReport.country,
            weatherReport.currentTemperature,
            weatherReport.currentWeather,
          ]}
        />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
