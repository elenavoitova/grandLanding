import React from "react";
import Banner5 from '../components/Banner5/Banner5';
import Banner6 from '../components/Banner6/Banner6';
import Banner7 from "../components/Banner7/Banner7";
import Banner8 from "../components/Banner8/Banner8";
import TopBar from "../components/TopBar/TopBar";

function Var6() {
  return(
    <main>
      <TopBar/>
      <Banner5/>
      <div style={{height:"70px"}}></div>
      <Banner6/>
      <div style={{height:"70px"}}></div>
      <Banner7/>
      <div style={{height:"70px"}}></div>
      <Banner8/>
    </main>
  );
}

export default Var6;