import React from "react";
import {useSpring, animated, config} from "react-spring";
import "./Banner2.scss";

function Banner2() {

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
      className="main-banner2"
      style={{
        backgroundImage:
      `linear-gradient(to right, rgba(45,45,45, 0.4), rgba(45,45,45, 0.4)),
      url("./img/solarpanels004.jpg")`,
      }}
    >
      <div className="container">
        <div className="main-banner2__info">
          <animated.span className="main-banner2__info-start" style={animateRight}>Сонячна електростанція</animated.span>
          <br/>
          <animated.span className="main-banner2__info-end" style={animateLeft}>для вашого будинку</animated.span>
        </div>
        <animated.div style={animateUp}  className="main-banner2__details">Проектування. Продаж. Установка. Працюємо по всій Україні</animated.div>
        <animated.button  style={animateOpacity} className="main-banner2__action">Безкоштовна Консультація</animated.button>
      </div>
    </section>
  );
}

export default Banner2;
