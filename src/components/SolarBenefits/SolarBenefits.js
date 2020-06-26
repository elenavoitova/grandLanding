import React from "react";
import "../SolarBenefits/SolarBenefits.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille } from "@fortawesome/fontawesome-free-solid";

function SolarBenefits() {
  

  return(
    <div className="benefits" 
    // style={{backgroundImage: "url(./img/abstract-green-wavy-lines-colorful-600w-391536226.jpg"}}
    >
      <div className="container">
        <span className="benefits__i">advantage</span>
        <div className="benefits__company"><FontAwesomeIcon icon={faBraille}/><span>Grand Overon</span></div>
        <h2 className="benefits__title">Переваги сонячної електростанції</h2>
        <div className="benefits__grid">
              <div 
            className="benefits__grid-item">
           <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">Независимость</h3>
            <p className="benefits__grid-text">Солнце – это бесконечный источник бесплатной энергии</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">Экономичность</h3>
            <p className="benefits__grid-text">Отсутствие затрат на транспортировку и хранение источника энергии</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">Экологичность</h3>
            <p className="benefits__grid-text">Полностью экологически нейтральная генерация электричества</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">Безотходность</h3>
            <p className="benefits__grid-text">Нет необходимости в переработке или утилизации отходов электрогенерации – они отсутствуют</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">Простота эксплуатации</h3>
            <p className="benefits__grid-text">Минимально необходимый уровень обслуживания оборудования</p>
          </div>
          <div
            className="benefits__grid-item">
            <img className="benefits__grid-icon" src="./img/solar-energy.png" alt="solar-energy"/>
            <h3 className="benefits__grid-title">Автоматизация</h3>
            <p className="benefits__grid-text">Полная автоматизация всех процессов электрогенерации</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarBenefits;