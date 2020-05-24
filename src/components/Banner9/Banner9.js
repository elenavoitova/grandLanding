import React from "react";
import {useSpring, animated, config} from "react-spring";
import "./Banner9.scss";

function Banner9() {

  const animateOpacity = useSpring({
    from: { opacity: "0"},
    to: { opacity: "1" },
    config: config.slow,
    delay: 4000
  });

  const animateRight = useSpring({
    from: { left: "-15%", opacity: "0"},
    to: { left: "10%", opacity: "1" },
    config: config.slow,
    delay: 1000
  });

  const animateLeft = useSpring({
    from: { right: "-15%", opacity: "0"},
    to: { right: "10%", opacity: "1" },
    config: config.slow,
    // velosity: 3000,
    delay: 2000
  });


  const animateUp = useSpring({
    from: {
      transform: "translateY(300px)",
      opacity: 0
    },
    to: {
      transform: "translateY(270px)",
      opacity: 1
      },
    config: config.slow,
    delay: 3000
  });

  return (
    <section
      className="main-banner9"
      style={{
        backgroundImage:
      `linear-gradient(to right, rgba(45,45,45, 0.3), rgba(45,45,45, 0.3)),
      url("./img/stock-photo-solar-panel-system-on-house-roof-sunny-blue-sky-background-115409395.jpg")`,
      }}
    >
      <div className="container">
        <div className="main-banner9__info">
          <animated.span className="main-banner9__info-start" style={animateRight}>Сонячна електростанція</animated.span>
          <br/>
          <animated.span className="main-banner9__info-end" style={animateLeft}>для вашого будинку</animated.span>
        </div>
        <animated.div style={animateUp}  className="main-banner9__details">Проектування. Продаж. Установка. Працюємо по всій Україні</animated.div>
        <animated.button  style={animateOpacity} className="main-banner9__action">Безкоштовна Консультація</animated.button>
      </div>
    </section>
  );
}

export default Banner9;
