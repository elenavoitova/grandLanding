import React from "react";
import Logo from "../Logo/Logo";
import SystemsCard from "../SystemsCard/SystemsCard";

import "./ComplexSystems.scss";

function ComplexSystems() {
  return (
    <section className="complex-systems">
      <div className="container">
        <div className="complex-systems__header">
          <span className="complex-systems__i">Systems</span>
          <Logo />
          <h2 className="complex-systems__title">
            Индивидуальный подход к каждому клиенту
          </h2>
        </div>
        <div className="complex-systems__cards">
          <SystemsCard
            price="4 371"
            power="10"
            generation="11 000"
            profit="1700"
            payback="3,5 років"
          />
          <SystemsCard
            price="7 690"
            power="20"
            generation="22 000"
            profit="3400"
            payback="3 роки"
          />
          <SystemsCard
            price="11 224"
            power="30"
            generation="33 000"
            profit="5100"
            payback="2,5 роки"
          />
        </div>
        <div className="complex-systems__subinfo">
          * Точна вартість станції з установкою і підключенням залежить від
          регіону і параметрів об'єкта. Щоб отримати повний розрахунок і
          пропозиція "під ключ" - заповніть форму нижче
        </div>
      </div>
    </section>
  );
}

export default ComplexSystems;
