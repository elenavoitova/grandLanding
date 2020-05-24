import React from "react";
import {useSpring, animated, config} from "react-spring";
import "./Banner3.scss";

function Banner3() {

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

  const [perspect, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const { x } = useSpring({ from: { x: 0 }, to: {x: 1}, config: config.slow})

  const animateOpacity = useSpring({
    from: { opacity: "0"},
    to: { opacity: "1" },
    config: config.slow,
    delay: 4000
  });

  const animateRight = {
    transform: perspect.xy.interpolate(trans),
    opacity: x.interpolate({ 
      range: [0, 0.75, 1],
      output: [0, 0.3, 1]
    }),
    left: x.interpolate({ 
      range: [0, 1],
      output: [-500, 10]
    })
  };

  const animateLeft = {
    transform: perspect.xy.interpolate(trans),
    opacity: x.interpolate({ 
      range: [0, 0.75, 1],
      output: [0, 0.3, 1]
    }),
    right: x.interpolate({ 
      range: [0, 1],
      output: [-500, 10]
    })
  };

  const animateDown = useSpring({
    from: {
      transform: "translateY(0px)",
      opacity: 0
    },
    to: {
      transform: "translateY(200px)",
      opacity: 1
      },
    config: config.wobbly,
    delay: 2000
  });

  const animateUp = useSpring({
    from: {
      transform: "translateY(300px)",
      opacity: 0
    },
    to: {
      transform: "translateY(250px)",
      opacity: 1
      },
    config: config.default,
    delay: 3000
  });

  return (
    <section
      className="main-banner3"
      style={{
        backgroundImage:
      `linear-gradient(to right, rgba(45,45,45, 0.4), rgba(45,45,45, 0.4)),
      url("./img/stock-photo-solar-panel-on-a-red-roof-278061716.jpg")`,
      }}
    >
      <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.span className="main-banner3__company" style={animateRight}>GRAND</animated.span>
        <animated.div className="main-banner3__info" style={animateDown}>Сонячна електростанція<br/>для вашого будинку</animated.div>
        <animated.div className="main-banner3__details" style={animateUp}>
          <span style={{fontSize: "26px"}}>Працюємо по всій Україні</span>
          <br/>Проектування. Продаж. Установка.</animated.div>
        <animated.span className="main-banner3__company" style={animateLeft}>OVERON</animated.span>
        <animated.button  style={animateOpacity} className="main-banner3__action">Безкоштовна Консультація</animated.button>
      </div>
    </section>
  );
}

export default Banner3;
