import React from "react";
import styles from "./WeatherCard.module.scss";
import {
  Oblacno,
  PoloOblacno,
  Prehanky,
  Slnecno,
} from "../../../../assets/images/weather";

const getWeatherImg = (weather) => {
  switch (weather) {
    case "Oblačno":
      return Oblacno;
    case "Polooblačno":
      return PoloOblacno;
    case "Prehánky":
      return Prehanky;
    default:
      return Slnecno;
  }
};

function WeatherCard(props) {
  const data = props.weatherData;

  return (
    <div
      className={`${styles["wrapper"]} ${
        data.hour === "12:00" ? styles["is-active"] : ""
      }`}
    >
      <p className={styles["weather-card-time"]}>
        {data.hour === "12:00" ? "teraz" : data.hour}
      </p>
      <div className={styles["weather-card-img-wrapper"]}>
        <img src={getWeatherImg(data.weather)} />
      </div>
      <p className={styles["weather-card-temperature"]}>{data.temperature} °</p>
    </div>
  );
}

export default WeatherCard;
