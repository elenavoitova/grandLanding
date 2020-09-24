import React from "react";
import "./Banner.scss";

function Banner() {

  return (
    <section
      className="banner"
      // style={{backgroundImage: 'url("./img/stock-photo-solar-systems-house-with-photovoltaic-panels-as-sustainability-concept-d-rendering-736058800.jpg")'}}>
        style={{backgroundImage: 'url("./img/stock-photo-solar-energy-system-with-photovoltaic-solar-cell-panels-on-house-roof-d-rendering-616155593.jpg")'}}>
        <div className="banner__info banner__info--main"><span style={{textTransform: "uppercase"}}>Сонячна електростанція</span><br/>для вашого будинку</div>
        <div className="banner__info banner__info--details">Проектування. Продаж. Установка. Працюємо по всій Україні</div>
        <div className="banner__dark-layer"
        style={{backgroundImage: 'url("./img/banner_dark_layer.png")'}}>
        </div>
    </section>
  );
}

export default Banner;
