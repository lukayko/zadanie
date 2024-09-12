import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./WeatherCardList.module.scss";
import WeatherCard from "../WeatherCard/WeatherCard";
import { WeatherContext } from "../../../../App";

function WeatherCardList() {
  const weatherData = useContext(WeatherContext);

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
        {weatherData.weatherData.map((data, index) => {
          return <WeatherCard weatherData={data} key={index} />;
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
