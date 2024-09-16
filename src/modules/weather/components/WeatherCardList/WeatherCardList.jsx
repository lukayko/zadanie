import { useState, useRef, useEffect } from "react";
import styles from "./WeatherCardList.module.scss";
import WeatherCard from "../WeatherCard/WeatherCard";

function WeatherCardList(props) {
  const [forecastDayOne, forecastDayTwo] = props.data.forecastday;

  const cardsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft = 30;
    }
  }, []);

  useEffect(() => {
    const container = cardsRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const totalScrollableWidth =
      cardsRef.current.scrollWidth - cardsRef.current.clientWidth;
    const scrollPercent =
      (cardsRef.current.scrollLeft / totalScrollableWidth) * 100;
    setScrollPosition(scrollPercent);
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - cardsRef.current.offsetLeft);
    setScrollLeft(cardsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - cardsRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    cardsRef.current.scrollLeft = scrollLeft - walk;
  };

  const totalNumOfCards = 16;
  const combinedCards = [...forecastDayOne["hour"], ...forecastDayTwo["hour"]];
  const currentHour = new Date().getHours();
  const currentDate = new Date();

  const filteredCards = combinedCards.filter((hour) => {
    const hourDate = new Date(hour.time);
    return (
      hourDate.getHours() >= currentHour - 1 ||
      hourDate.getDate() !== currentDate.getDate()
    );
  });

  const limitedCards = filteredCards.slice(0, totalNumOfCards);

  return (
    <div>
      <div
        className={styles.wrapper}
        ref={cardsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {limitedCards.map((data, index) => {
          return <WeatherCard data={data} key={index} />;
        })}
      </div>
      <div className={styles["scroller-wrapper"]}>
        <div className={styles["scroller-dot"]}></div>
        <div className={styles["scroller-dot"]}></div>
        <div className={styles["scroller-dot"]}></div>
        <div className={styles["scroller-dot"]}></div>
        <div
          className={styles["scroller-oval"]}
          style={{
            transform: `translateX(${(scrollPosition / 100) * 120}%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default WeatherCardList;
