import React from 'react';
import Logo from '../Logo/Logo';

import './Preloader.scss';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__content-container">
        <div className="preloader__main">
          {/* <div>G</div>
          <div>R</div>
          <div>A</div>
          <div>N</div>
          <div>D</div>
          <div style={{marginLeft: "5px"}}>O</div>
          <div>V</div>
          <div>E</div>
          <div>R</div>
          <div>O</div>
          <div>N</div> */}
          GRAND OVERON
          </div>
        <div className="preloader__green-layer"></div>
        <div className="preloader__orange-layer"></div>
      </div>
    </div>
  )}

  export default Preloader;