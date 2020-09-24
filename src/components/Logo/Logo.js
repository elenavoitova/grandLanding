import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille } from "@fortawesome/fontawesome-free-solid";
import './Logo.scss';

function Logo(props) {
    return (
        <div className="logo">
           <FontAwesomeIcon icon={faBraille}/>
           <span>
             <strong className="delay1">G</strong>
             <strong className="delay2">r</strong>
             <strong className="delay3">a</strong>
             <strong className="delay4">n</strong>
             <strong className="delay5">d</strong>
             <strong className="delay6" style={{paddingLeft: "5px"}}>O</strong>
             <strong className="delay7">v</strong>
             <strong className="delay8">e</strong>
             <strong className="delay9">r</strong>
             <strong className="delay10">o</strong>
             <strong className="delay11">n</strong>
          </span>
        </div>
    );
}

export default Logo;
