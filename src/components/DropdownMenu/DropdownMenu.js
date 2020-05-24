import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid';
import "./DropdownMenu.scss";

function DropdownMenu({ list, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dd-wrapper">
      <div className="dd-header" onClick={toggleList}>
        <div className="dd-header-title">{title}</div>
        {isOpen
          ? <FontAwesomeIcon icon={faAngleUp}/>
          : <FontAwesomeIcon icon={faAngleDown}/>
        }
    </div>
      {isOpen && (
        <ul className="dd-list">
          {list.map((item, i) => (
            <li className="dd-list-item" key={i}>
              {item.item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
