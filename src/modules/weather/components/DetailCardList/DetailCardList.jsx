import React, { useContext } from "react";
import styles from "./DetailCardList.module.scss";
import DetailCard from "../DetailCard/DetailCard";
import { WeatherContext } from "../../../../App";

function DetailCardList() {
  const weatherData = useContext(WeatherContext);

  return (
    <div className={styles.wrapper}>
      {weatherData.details.map((data, index) => {
        return <DetailCard weatherDetails={data} key={index} />;
      })}
    </div>
  );
}

export default DetailCardList;
