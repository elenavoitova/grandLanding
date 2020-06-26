import React from "react";
import Banner from "../components/Banner/Banner";
import CompanyBasics from "../components/CompanyBasics/CompanyBasics";
import TopBar from "../components/TopBar/TopBar";
import AboutUs from "../components/AboutUs/AboutUs";
import CallUs from "../components/CallUs/CallUs";
import SolarBenefits from "../components/SolarBenefits/SolarBenefits";
import MapBg from "../components/MapBg/MapBg";
import Footer from "../components/Footer/Footer";

function Homepage() {
  return (
    <>
        <TopBar />
        <Banner />
        <main>
        <CompanyBasics />
        <AboutUs />
        <CallUs />
        <SolarBenefits />
      </main>
      <MapBg />
      <Footer />
    </>
  );
}

export default Homepage;
