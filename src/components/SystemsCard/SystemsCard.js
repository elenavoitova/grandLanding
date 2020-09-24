import React from "react";
import "./SystemsCard.scss";

function SystemsCard({price, power, generation, profit, payback}){
  return(
    <div className="complex-systems-card__content">
      <div className="complex-systems-card__header">
        <div className="complex-systems-card__power-badge">{power} кВт</div>
        <div className="complex-systems-card__price-badge">від {price} *у.о.</div>
        <img src="./img/stock-photo-solar-energy-system-with-photovoltaic-solar-cell-panels-on-house-roof-d-rendering-616155593.jpg" alt="systems"/>
      </div>
      <div className="complex-systems-card__body">
        <h4>Домашня мережева сонячна електростанція потужністю {power} кВт</h4>
        <p style={{padding: "10px 0"}}></p>
        <p>Термін експлуатації - <b>25-30 років</b></p>
  <p>Середньорічна генерація - <b>{generation} кВт</b></p>
        <p>Середньорічний дохід - <b>до {profit} у.о</b></p>
        <p>Термін окупності - <b>від {payback}</b></p>
      </div>
      <div className="complex-systems-card__footer"></div>
    </div>
  )}

  export default SystemsCard;