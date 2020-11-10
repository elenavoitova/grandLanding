import React from "react";
import "../SolarBenefits/SolarBenefits.scss";
import Logo from "../Logo/Logo";

function SolarBenefits({translations}) {
  return(
    <div className="benefits">
      <div className="container">
        <span className="benefits__i">advantage</span>
        <Logo style={{width: "fit-content", margin: "0 auto", top: "60px"}}/>
        <h2 className="benefits__title">{translations.title}</h2>
        <div className="benefits__grid">
              <div className="benefits__grid-item">
           <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">{translations.badge1.title}</h3>
            <p className="benefits__grid-text">{translations.badge1.description}</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">{translations.badge2.title}</h3>
            <p className="benefits__grid-text">{translations.badge2.description}</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">{translations.badge3.title}</h3>
            <p className="benefits__grid-text">{translations.badge2.description}</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">{translations.badge4.title}</h3>
            <p className="benefits__grid-text">{translations.badge4.description}</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">{translations.badge5.title}</h3>
            <p className="benefits__grid-text">{translations.badge5.description}</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">{translations.badge6.title}</h3>
            <p className="benefits__grid-text">{translations.badge6.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarBenefits;