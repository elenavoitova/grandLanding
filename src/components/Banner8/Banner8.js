import React from "react";
import {useSpring, animated, config} from "react-spring";
import "./Banner8.scss";

function Banner8() {

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
      className="main-banner8"
      style={{
        backgroundImage:
      `linear-gradient(to right, rgba(45,45,45, 0.2), rgba(45,45,45, 0.2)),
      url("./img/stock-photo-solar-cell-contractor-document-with-orange-engineering-team-helmet-on-solar-cells-panels-renewable-576077317.jpg")`,
      }}
    >
      <div className="container">
        <div className="main-banner8__info" style={{marginTop: "30px",marginBottom: "30px"}}>Сонячна електростанція для вашого будинку</div>
        <animated.div className="main-banner8__details">Проектування. Продаж. Установка. Працюємо по всій Україні</animated.div>
        <animated.button className="main-banner8__action">Безкоштовна Консультація</animated.button>
      </div>
    </section>
  );
}

export default Banner8;
