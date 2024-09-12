import React from "react";
import styles from "./DetailCard.module.scss";
import { Wind, Umbrella, Droplet } from "../../../../assets/icons/weather";

const iconMap = {
  Wind: Wind,
  Umbrella: Umbrella,
  Droplet: Droplet,
};

function DetailCard(props) {
  const details = props.weatherDetails;

  return (
    <div className={styles.wrapper}>
      <div className={styles["detail-card-img-container"]}>
        <img src={iconMap[details.img]} alt={details.text} />
      </div>
      <p className={styles["detail-card-text"]}>{details.text}</p>
      <p className={styles["detail-card-text-bold"]}>{details.value}</p>
    </div>
  );
}

export default DetailCard;
