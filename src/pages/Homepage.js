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

function Homepage() {
  const [locked, setLocked] = useState(true);

  useEffect(() => {
      document.querySelector("#root").classList.add('lock');
      setTimeout(() => {
        document.querySelector("#root").classList.remove('lock');
        setLocked(false);
    }, 2500);
  }, [setLocked]);

  return (
    <>
    {
      locked && <Preloader/>
    }
      <TopBar />
      <Banner />
      <main>
        <CompanyBasics />
        <AboutUs />
        <CallUs />
        <SolarBenefits />
        <ComplexSystems />
      </main>
      <MapBg />
      {/* <Partners/> */}
      <Footer />
      </>
  );
}

export default Homepage;
