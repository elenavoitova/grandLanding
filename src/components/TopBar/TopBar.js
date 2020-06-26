import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/fontawesome-free-regular';
import {faPhoneVolume} from '@fortawesome/fontawesome-free-solid';
import './TopBar.scss';

function TopBar() {
  return(
    <header className="top-bar">
      <div className="top-bar__content">
        <div className="top-bar__wrapper">
          <div className="top-bar__wrap-left">
            <div className="top-bar__logo">
            <img src="./img/logo.png" alt="logo"/>
            </div>
            <address className="top-bar__address">Київ, вул. Градинська 7</address>
            <div className="top-bar__email"><FontAwesomeIcon icon={faEnvelope}/><a href = "mailto:grandoveron.shop@gmail.com">grandoveron.shop@gmail.com</a></div>
            <div className="top-bar__phone">
              <FontAwesomeIcon icon={faPhoneVolume}/>
              <div>
              <a href="tel:0674686836">(067) 468-68-36</a><br/>
              <a href="tel:0934686836">(093) 468-68-36</a>
              </div>
            </div>
          </div>
          <div className="top-bar__wrap-right">
            <div className="top-bar__lang">
              <span className="top-bar__lang-ukr">укр</span>
              /
              <span className="top-bar__lang-ru">рус</span>
            </div>
            <div className="top-bar__socials">
              <a href="https://www.facebook.com/grandoveron/?eid=ARC_NEv5QFX12hqKIuhUU49tXCQjU8IzHDzePJNHkj82_FBaeEBOjzRKZtBapoYuoMcbkIzpaPdrfmZQ" rel="noopener noreferrer" target="_blank">Приєднуйся<FontAwesomeIcon icon={faFacebook}/></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar;