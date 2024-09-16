import styles from "./DetailCard.module.scss";
import { Wind, Umbrella, Droplet } from "../../../../assets/icons/weather";

const iconMap = {
  Wind: Wind,
  Umbrella: Umbrella,
  Droplet: Droplet,
};

function DetailCard(props) {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles["detail-card-img-container"]}>
        <img src={iconMap[data.icon]} alt={data.text} />
      </div>
      <p className={styles["detail-card-text"]}>{data.text}</p>
      <p className={styles["detail-card-text-bold"]}>{data.value}</p>
    </div>
  );
}

export default DetailCard;
