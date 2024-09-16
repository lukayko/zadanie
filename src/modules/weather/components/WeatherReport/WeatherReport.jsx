import { useState, useEffect } from "react";
import styles from "./WeatherReport.module.scss";
import WeatherCardList from "../WeatherCardList/WeatherCardList";
import DetailCardList from "../DetailCardList/DetailCardList";
import getCurrentFormattedDate from "../../../core/utils/getCurrentFormattedDate";
import getWeatherType from "../../utils/getWeatherType";
import getWeatherImg from "../../utils/getWeatherImg";

const city = "Bratislava";

function WeatherReport() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&q=${city}&days=2&aqi=no&alerts=no`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data!");
        }

        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles["destination-container"]}>
        <h1>
          {city}, <br /> Slovensko
        </h1>
        <h2>{getCurrentFormattedDate()}</h2>
      </div>
      {isLoading ? (
        <p>Načitávam počasie, prosím počkajte...</p>
      ) : isError ? (
        <p>Chyba: {isError}. Prosím, skúste to znova.</p>
      ) : (
        <>
          <div className={styles["current-destination-container"]}>
            <div className={styles["current-destination-img-container"]}>
              <img
                src={getWeatherImg(
                  getWeatherType(weatherData.current.condition.text)
                )}
              />
            </div>
            <div className={styles["current-destination-data-wrapper"]}>
              <p className={styles["current-destination-temperature"]}>
                {Math.round(weatherData.current.temp_c)}°
              </p>
              <p className={styles["current-destination-weather"]}>
                {getWeatherType(weatherData.current.condition.text)}
              </p>
            </div>
          </div>
          <WeatherCardList data={weatherData.forecast} />
          <DetailCardList data={weatherData.current} />
        </>
      )}
    </div>
  );
}

export default WeatherReport;
