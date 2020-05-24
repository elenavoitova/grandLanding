import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/fontawesome-free-regular';
import './TopBar.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

function TopBar() {
  const phoneList = [
    {
      item: <Link to="/2">Banner var 2</Link>
    },
    {
      item: <Link to="/3">Banner var 3</Link>
    },
    {
      item: <Link to="/4">Banner var 4</Link>
    },
    {
      item: <Link to="/5">Banner var 5</Link>
    },
    {
      item: <Link to="/6">Others...</Link>
    },
  ]
  return(
    <div className="top-bar">
      <div className="container">
        <div className="top-bar__wrapper">
          <div className="top-bar__wrap-left">
            <address className="top-bar__address">Київ, вул. Градинська 7</address>
            <div className="top-bar__email"><FontAwesomeIcon icon={faEnvelope}/><a href = "mailto:iRecco@mail.com">iRecco@mail.com</a></div>
            <DropdownMenu
              title="Варианты баннера"
              list={phoneList}
              />
          </div>
          <div className="top-bar__wrap-right">
            <div className="top-bar__FAQ">FAQ</div>
            <ul className="top-bar__socials">
            Приєднуйся:
              <li><FontAwesomeIcon icon={faFacebook}/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;