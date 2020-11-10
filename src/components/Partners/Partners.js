import React from "react";
import "./Partners.scss";

function Partners({translations}){
  return(
    <section className="patners__container">
      <div className="patners__content">
  <div className="patners__title">{translations.title}</div>
      <div className="patners__items">
        <img src="./img/partners/1280px-ABB_logo.png" alt="ABB"/>
        <img src="./img/partners/altek_logo.png" alt="Altek"/>
        <img src="./img/partners/atmosfera_logo.png" alt="Atmosfera"/>
        <img src="./img/partners/eti-logo.png" alt="Eti"/>
        <img src="./img/partners/logicFox.jpg" alt="LogicFox"/>
        <img src="./img/partners/logo.png" alt="SEA"/>
        <img src="./img/partners/maxus_logo.png" alt="Maxus"/>
      </div>
      </div>
    </section>
  )}

  export default Partners;