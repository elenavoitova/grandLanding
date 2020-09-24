import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import "./FlipCard.scss";

function FlipCard({ icon, iconClass, title, description }) {
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <svg className={`icon ${iconClass}`}>
            <use href={`sprite.svg#${icon}`}></use>
          </svg>
          <h3 className="flip-card__info">{title}</h3>
          <div className="flip-card__i">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="flip-card__back">{description}</div>
      </div>
    </div>
  );
}

export default FlipCard;
