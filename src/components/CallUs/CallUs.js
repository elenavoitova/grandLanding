import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from '@fortawesome/fontawesome-free-solid';
import "./CallUs.scss";

function CallUs() {
  return (
    <section className="call-us">
      <div className="container">
        <div className="call-us__wrap">
          <div className="call-us__img" style={{backgroundImage: "url(./img/stock-photo-solar-cell-contractor-document-with-orange-engineering-team-helmet-on-solar-cells-panels-renewable-576077317.jpg)"}}></div>
          <div className="call-us__icon">
          <span className="outer">
          <div className="inner">
          <a href="tel:0674686836"><FontAwesomeIcon icon={faPhoneVolume}/></a>
          </div>
        </span>
          </div>
          <div className="call-us__info">
            <h4 className="call-us__info-main">У вас є запитання? Зателефонуйте нам <a href="tel:0674686836">+38 (067) 468-68-36</a></h4>
            <div className="call-us__info-additional">Ви отримаєте безкоштовну професійну консультацію у сфері сонячної енергетики</div>
          </div>
        </div>
      </div>
    </section>
  )}

  export default CallUs;