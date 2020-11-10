import React from "react";
import Logo from "../Logo/Logo";
import SystemsCard from "../SystemsCard/SystemsCard";

import "./ComplexSystems.scss";

function ComplexSystems({translations}) {
  return (
    <section className="complex-systems">
      <div className="container">
        <div className="complex-systems__header">
          <span className="complex-systems__i">Systems</span>
          <Logo />
          <h2 className="complex-systems__title">
            {translations.title}
          </h2>
        </div>
        <div className="complex-systems__cards">
          <SystemsCard
            price="4 371"
            power="10"
            generation="11 000"
            profit="1700"
            payback="3,5"
            translations={translations.card}
          />
          <SystemsCard
            price="7 690"
            power="20"
            generation="22 000"
            profit="3400"
            payback="3"
            translations={translations.card}
          />
          <SystemsCard
            price="11 224"
            power="30"
            generation="33 000"
            profit="5100"
            payback="2,5"
            translations={translations.card}
          />
        </div>
        <div className="complex-systems__subinfo">
          * {translations.remark}
        </div>
      </div>
    </section>
  );
}

export default ComplexSystems;
