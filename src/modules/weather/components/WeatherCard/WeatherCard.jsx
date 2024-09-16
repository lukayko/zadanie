import styles from "./WeatherCard.module.scss";
import getWeatherImg from "../../utils/getWeatherImg";
import getWeatherType from "../../utils/getWeatherType";

function WeatherCard(props) {
  const data = props.data;
  console.log(data);
  const currentHour = `${new Date().getHours().toString().padStart(2, "0")}:00`;
  const dataTime = new Date(data.time.replace(" ", "T"));
  const formattedDataHours = `${dataTime
    .getHours()
    .toString()
    .padStart(2, "0")}:00`;

  return (
    <div
      className={`${styles["wrapper"]} ${
        formattedDataHours === currentHour ? styles["is-active"] : ""
      }`}
    >
      <p className={styles["weather-card-time"]}>
        {formattedDataHours === currentHour ? "teraz" : formattedDataHours}
      </p>
      <div className={styles["weather-card-img-wrapper"]}>
        <img src={getWeatherImg(getWeatherType(data.condition.text))} />
      </div>
      <p className={styles["weather-card-temperature"]}>
        {Math.round(data.temp_c)} °
      </p>
    </div>
  );
}

export default WeatherCard;
