import React, { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import CompanyBasics from "../components/CompanyBasics/CompanyBasics";
import TopBar from "../components/TopBar/TopBar";
import AboutUs from "../components/AboutUs/AboutUs";
import CallUs from "../components/CallUs/CallUs";
import SolarBenefits from "../components/SolarBenefits/SolarBenefits";
import MapBg from "../components/MapBg/MapBg";
import Footer from "../components/Footer/Footer";
import ComplexSystems from "../components/ComplexSystems/ComplexSystems";
import Preloader from "../components/Preloader/Preloader";
import Partners from "../components/Partners/Partners";

import uaTranslation from '../translations/ukr.json';
import ruTranslation from '../translations/ru.json';

function Homepage() {
  const [locked, setLocked] = useState(true);
  const [lang, setLang] = useState('ukr');
  const [translations, setTranslations] = useState(uaTranslation);

  useEffect(() => {
      document.querySelector("#root").classList.add('lock');
      setTimeout(() => {
        document.querySelector("#root").classList.remove('lock');
        setLocked(false);
    }, 2500);
  }, [setLocked]);

  useEffect(() => {
    lang === 'ukr' ? setTranslations(uaTranslation) : setTranslations(ruTranslation);
  }, [lang, translations]);
  return (
    <>
    {
      locked && <Preloader/>
    }
      <TopBar 
        translations={translations.header}
        lang={lang}
        onSetUkr= {() => {setLang('ukr')}}
        onSetRus= {() => {setLang('ru')}}
      />
      <Banner translations={translations.banner}/>
      <main>
        <CompanyBasics translations={translations.company}/>
        <AboutUs translations={translations.about}/>
        <CallUs translations={translations.contacts}/>
        <SolarBenefits translations={translations.benefits}/>
        <ComplexSystems translations={translations.systems}/>
      </main>
      <MapBg translations={translations.contact}/>
      <Partners translations={translations.partners} />
      <Footer translations={translations.footer}/>
      </>
  );
}

export default Homepage;
