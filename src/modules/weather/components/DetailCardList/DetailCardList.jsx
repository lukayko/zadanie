import styles from "./DetailCardList.module.scss";
import DetailCard from "../DetailCard/DetailCard";

function DetailCardList(props) {
  const { humidity, wind_kph: wind, precip_mm: precip } = props.data;

  const parsedData = [
    {
      text: "Úhrn zrážok",
      value: `${Math.round(precip)}mm`,
      icon: "Umbrella",
    },
    {
      text: "Rýchlosť vetra",
      value: `${Math.round(wind)}km/h`,
      icon: "Wind",
    },
    {
      text: "Vlhkosť vzduchu",
      value: `${humidity}%`,
      icon: "Droplet",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {parsedData.map((data, index) => {
        return <DetailCard data={data} key={index} />;
      })}
    </div>
  );
}

export default DetailCardList;
