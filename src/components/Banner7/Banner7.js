import React from "react";
import {useSpring, animated, config} from "react-spring";
import "./Banner7.scss";

function Banner7() {

  const animateOpacity = useSpring({
    from: { opacity: "0"},
    to: { opacity: "1" },
    config: config.slow,
    delay: 3000
  });

  // const animateRight = useSpring({
  //   from: { left: "-15%", opacity: "0"},
  //   to: { left: "0%", opacity: "1" },
  //   config: config.stiff,
  //   delay: 3000
  // });

  // const animateLeft = useSpring({
  //   from: { right: "-15%", opacity: "0"},
  //   to: { right: "0%", opacity: "1" },
  //   config: config.stiff,
  //   velosity: 3000,
  //   delay: 3000
  // });

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
      className="main-banner7"
      style={{
        backgroundImage:
      `linear-gradient(to right, rgba(45,45,45, 0.7), rgba(45,45,45, 0.7)),
      url("./img/stock-photo-solar-panels-on-roof-of-home-1120595213.jpg")`,
      }}
    >
      <div className="container">
        {/* <animated.span style={animateRight} className="main-banner__company">GRAND</animated.span> */}
        <animated.div className="main-banner7__info">Сонячна електростанція<br/>для вашого будинку</animated.div>
        <animated.div className="main-banner7__details">Проектування. Продаж. Установка. Працюємо по всій Україні</animated.div>
        {/* <animated.span style={animateLeft} className="main-banner__company">OVERON</animated.span> */}
        <animated.button className="main-banner7__action">Безкоштовна Консультація</animated.button>
      </div>
    </section>
  );
}

export default Banner7;
