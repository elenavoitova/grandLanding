import React from "react";
import "./MapBg.scss";

function MapBg() {
  return (
    <section className="call-us-bg">
      <div className="container">
        <div className="call-us-bg__wrap" style={{backgroundImage: "url(./img/bg_green-map.jpg)"}}>
          <div className="call-us-bg__info">
            <h4 className="call-us-bg__info-main">Виникли питання? Ми допоможемо</h4>
            <div className="call-us-bg__info-additional">Ви отримаєте безкоштовну професійну консультацію у сфері сонячної енергетики</div>
          </div>
          <div className="call-us-bg__wk">24 / 7</div>
        </div>
      </div>
    </section>
  )}

  export default MapBg;