import React from "react";
import Banner1 from '../components/Banner1/Banner1';
import Areas from '../components/Areas/Areas';
import TopBar from '../components/TopBar/TopBar';

function Homepage() {
  return(
    <main>
      <TopBar/>
      <Banner1/>
      <Areas/>
    </main>
  );
}

export default Homepage;