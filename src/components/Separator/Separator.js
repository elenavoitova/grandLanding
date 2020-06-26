import React from 'react';
import './Separator.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlug, faCircle} from '@fortawesome/fontawesome-free-solid';


function Separator(props) {
  return (
    <section className="separator" {...props}>
      <div className="layer">
        <span className="outer">
          <div className="inner">
            <FontAwesomeIcon icon={faCircle} className="dot-1"/>
            <FontAwesomeIcon icon={faCircle} className="dot-2"/>
          </div>
        </span>
        <FontAwesomeIcon icon={faPlug}/>
      </div>
    </section>
  )}

  export default Separator