import React from "react";
import "./SystemsCard.scss";

function SystemsCard({price, power, generation, profit, payback, translations}){
  return(
    <div className="complex-systems-card__content">
      <div className="complex-systems-card__header">
        <div className="complex-systems-card__power-badge">{power} кВт</div>
        <div className="complex-systems-card__price-badge">{translations.from} {price} *{translations.currency}</div>
        <img src="./img/shutterstock_616155593.jpg" alt="systems"/>
      </div>
      <div className="complex-systems-card__body">
        <h4>{translations.title} {power} кВт</h4>
        <p style={{padding: "10px 0"}}></p>
        <p>{translations.exploitationPeriod} - <b>25-30 {translations.years}</b></p>
        <p>{translations.annualGeneration}  - <b>{generation} кВт</b></p>
        <p>{translations.annualIncome} - <b>{translations.to} {profit} {translations.currency}</b></p>
        <p>{translations.paybackPeriod} - <b>{translations.from} {payback} {translations.years}</b></p>
      </div>
      <div className="complex-systems-card__footer"></div>
    </div>
  )}

  export default SystemsCard;