import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faClock} from '@fortawesome/fontawesome-free-regular';
import {faPhoneVolume, faMapMarkerAlt} from '@fortawesome/fontawesome-free-solid';

function Footer() {
  let [isOpen, setOpen] = useState(null);

  useEffect(() => {
    let today = new Date();
    let hours = today.getHours();
    let weekDay = today.getDay();
    if(weekDay === 6 || weekDay === 0) {
      setOpen(false);
    } else {
      (hours >= 9 && hours<= 18) ? setOpen(true) : setOpen(false);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__company">
            <div className="footer__company-about">
            <img className="footer__company-logo" src="./img/go_logo.png" alt="logo"/>
            <p>iRecco’s extensive range of robust and reliable products backed by its cutting-edge R&D and more than two decades of expertise are designed to performance.</p>
            </div>
            <a className="footer__company-fb" href="https://www.facebook.com/grandoveron/?eid=ARC_NEv5QFX12hqKIuhUU49tXCQjU8IzHDzePJNHkj82_FBaeEBOjzRKZtBapoYuoMcbkIzpaPdrfmZQ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
            <a className="shop-link" href="https://grand-overon.in.ua" target="_blank" rel="noopener noreferrer">Интернет магазин</a>
          </div>
          <div className="footer__contacts">
            <div className="footer__address"><FontAwesomeIcon icon={faMapMarkerAlt}/>
              <span>Київ, вул. Градинська 7, оф. 182</span>
              <a href="https://www.google.com.ua/maps/place/%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0,+7,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.5183672,30.5964635,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4d10f43e4c183:0x332ddb07fefcbdc4!8m2!3d50.5183638!4d30.5986522?hl=ru" target="_blank" rel="noopener noreferrer">(на картi)</a>
            </div>
            <div className="footer__schedule">
            <FontAwesomeIcon icon={faClock}/>
            <span>Пн-Пт 9:00 - 18:00</span>
            <div className={`schedule-indicator ${isOpen ? "schedule-indicator--open" : "schedule-indicator--close"}`}></div>
            <span> {isOpen === true ?"open" : "closed"}</span>
            </div>
            <div className="footer__email"><FontAwesomeIcon icon={faEnvelope}/><a href = "mailto:grandoveron.shop@gmail.com">grandoveron.shop@gmail.com</a></div>
            <div className="footer__phone">
              <FontAwesomeIcon icon={faPhoneVolume}/>
              <div>
              <a href="tel:0674686836">(067) 468-68-36</a><br/>
              <a href="tel:0934686836">(093) 468-68-36</a>
              </div>
            </div>
          </div>
          <div className="footer__links">
            <a href="https://grand-overon.in.ua/solnechnye-batarei/solnechnye-batarei.html" target="_blank" rel="noopener noreferrer">Сонячні панелі</a>
            <a href="https://grand-overon.in.ua/invertory-i-akkumulyatory/invertory.html?features_hash=9-69" target="_blank" rel="noopener noreferrer">Мережеві інвертори</a> 
          </div>
        </div>       
      </div>
    </footer>
  )}

  export default Footer;