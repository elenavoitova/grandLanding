import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from '@fortawesome/fontawesome-free-solid';
import "./CallUs.scss";

function CallUs({translations}) {
  return (
    <section className="call-us">
      <div className="container">
        <div className="call-us__wrap">
          <div className="call-us__img" style={{backgroundImage: "url(./img/shutterstock_576077317.jpg)"}}></div>
          <div className="call-us__icon">
          <span className="outer">
          <div className="inner">
          <a href="tel:0674686836"><FontAwesomeIcon icon={faPhoneVolume}/></a>
          </div>
        </span>
          </div>
          <div className="call-us__info">
            <h4 className="call-us__info-main">{translations.main}
            <div className="call-us__separator"></div>
            <a href="tel:0674686836">+38 (067) 468-68-36</a>
            </h4>
            <div className="call-us__info-additional">{translations.sub}</div>
          </div>
        </div>
      </div>
    </section>
  )}

  export default CallUs;