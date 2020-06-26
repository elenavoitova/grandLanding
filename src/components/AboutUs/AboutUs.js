import React from "react";
import "./AboutUs.scss";
import { Tabs, TabsItem } from "../Tabs/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille } from "@fortawesome/fontawesome-free-solid";

function AboutUs() {
  return (
    // <div className="about-us-wrap" style={{backgroundImage: "url(./img/3416667.jpg)", backgroundAttachment: "fixed", width: "100%", padding: "50px 0"}}>
    <section className="about-us">
      <div className="container">
        <div className="about-us__content">
          <div className="about-us__col">
            <div className="about-us__header">
              <span className="about-us__i">About</span>
              <div className="about-us__company"><FontAwesomeIcon icon={faBraille}/><span>Grand Overon</span></div>
              <h2 className="about-us__title">
                Ми націлені на результат і тривалу співпрацю
              </h2>
            </div>
            <Tabs>
              <TabsItem label="Our Mission">
                <div className="tabs-item-description">
                  Компания Гранд Оверон – это команда инженеров и
                  профессиональных монтажников, которые более 10 лет работают в
                  сфере возобновляемой энергетики и энергосберегающих
                  технологий. За это время нами реализовано более сотни проектов
                  по проектированию, строительству и подключению солнечных
                  электростанций различной мощности для работы по зеленому
                  тарифу.
                </div>
              </TabsItem>
              <TabsItem label="Our Vision">
                <div className="tabs-item-description">
                  В своей работе компания Гранд Оверон использует передовые
                  технологии и инновационное оборудование, что позволяет нам
                  предложить нашим заказчикам решения, имеющие оптимальное
                  соотношение инвестиции/эффективность. Мы предлагаем не просто
                  установить солнечную электростанцию, мы готовы комплексно
                  подойти к решению проблемы повышения энергоэффективности
                  Вашего дома!
                </div>
              </TabsItem>
              <TabsItem label="Philosophy">
                <div className="tabs-item-description">
                  Солнечная энергия – это неиссякаемый источник энергии, который
                  с помощью наших специалистов будет работать на вас. Инвестируя
                  в альтернативную энергетику, вы повышаете комфорт вашей жизни,
                  минимизируете затраты на оплату энергоснабжения, внос при этом
                  свой вклад в улучшение экологической обстановки.
                </div>
              </TabsItem>
            </Tabs>
          </div>
          <div className="about-us__col">
            <div className="about-us__presentation">
              <div className="about-us__img-container">
                <img
                  src={
                    "./img/stock-photo-electrician-working-on-maintenance-equipment-at-solar-power-plant-electrician-swapping-solar-688413082.jpg"
                  }
                  alt="about us"
                />
              </div>
              <div className="about-us__circle">
                <img src={"./img/orangeCircle.png"} alt="about us" />
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
    // </div>
  );
}

export default AboutUs;
