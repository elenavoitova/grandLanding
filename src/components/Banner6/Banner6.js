import React from "react";
import {useSpring, animated, config} from "react-spring";
import "./Banner6.scss";

function Banner6() {

  const animateOpacity = useSpring({
    from: { opacity: "0"},
    to: { opacity: "1" },
    config: config.slow,
    delay: 3000
  });

  const animateDown = useSpring({
    from: {
      transform: "translateY(0px)",
      opacity: 0
    },
    to: {
      transform: "translateY(150px)",
      opacity: 1
      },
    config: config.wobbly,
    delay: 1000
  });

  const animateUp = useSpring({
    from: {
      transform: "translateY(300px)",
      opacity: 0
    },
    to: {
      transform: "translateY(160px)",
      opacity: 1
      },
    config: config.default,
    delay: 2000
  });

  return (
    <section
      className="main-banner6"
      style={{
        backgroundImage:
      `linear-gradient(to right, rgba(45,45,45, 0.7), rgba(45,45,45, 0.7)),
      url("./img/stock-photo-solar-panel-on-a-red-roof-reflecting-the-sun-and-the-cloudy-blue-sky-in-background-1262144449.jpg")`,
      }}
    >
      <div className="container">
        <animated.div className="main-banner6__info">Сонячна електростанція<br/>для вашого будинку</animated.div>
        <animated.div className="main-banner6__details">Проектування. Продаж. Установка. Працюємо по всій Україні</animated.div>
        <animated.button className="main-banner6__action">Безкоштовна Консультація</animated.button>
      </div>
    </section>
  );
}

export default Banner6;
