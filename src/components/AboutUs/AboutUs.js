import React from "react";
import "./AboutUs.scss";
import { Tabs, TabsItem } from "../Tabs/Tabs";
import Logo from "../Logo/Logo";

function AboutUs({ translations }) {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us__header">
          <span className="about-us__i">About</span>
          <Logo />
          <h2 className="about-us__title">{translations.title}</h2>
        </div>
        <div className="about-us__content">
          <div className="about-us__col">
            <Tabs>
              <TabsItem label={translations.missionTitle}>
                <div className="tabs-item-description">
                  {translations.mission}
                </div>
              </TabsItem>
              <TabsItem label={translations.visionTitle}>
                <div className="tabs-item-description">
                  {translations.vision}
                </div>
              </TabsItem>
              <TabsItem label={translations.philosophyTitle}>
                <div className="tabs-item-description">
                  {translations.philosophy}
                </div>
              </TabsItem>
            </Tabs>
          </div>
          <div className="about-us__col">
            <div className="about-us__presentation">
              <div className="about-us__img-container">
                <img
                  src={
                    "./img/688413082.jpg"
                  }
                  alt="about us"
                />
              </div>
              <div className="about-us__circle">
                <img src={"./img/orangeCircle.png"} alt="about us" />
              </div>
            </div>
          </div>
          <a
            className="about-us__shop-link"
            href="https://grand-overon.in.ua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{translations.link}</span>
            <span style={{marginLeft: "3px"}}>&gt;&gt;&gt;</span>
          </a>
        </div>
      </div>
    </section>
    // </div>
  );
}

export default AboutUs;
