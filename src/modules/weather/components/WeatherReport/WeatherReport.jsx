import React from "react";
import styles from "./WeatherReport.module.scss";
import { Prehanky } from "../../../../assets/images/weather";
import WeatherCardList from "../WeatherCardList/WeatherCardList";
import DetailCardList from "../DetailCardList/DetailCardList";

function WeatherReport(props) {
  const [city, country, currentTemperature, currentWeather] = props.destination;

  return (
    <div className={styles.wrapper}>
      <div className={styles["destination-container"]}>
        <h1>
          {city},<br /> {country}
        </h1>
        <h2>Utorok, 30.09.2024</h2>
      </div>
      <div className={styles["current-destination-container"]}>
        <div className={styles["current-destination-img-container"]}>
          <img src={Prehanky} />
        </div>
        <div className={styles["current-destination-data-wrapper"]}>
          <p className={styles["current-destination-temperature"]}>
            {currentTemperature}°
          </p>
          <p className={styles["current-destination-weather"]}>
            {currentWeather}
          </p>
        </div>
      </div>
      {/* Malé karty na horizontal scroll*/}
      <WeatherCardList />
      <DetailCardList />
    </div>
  );
}

export default WeatherReport;
