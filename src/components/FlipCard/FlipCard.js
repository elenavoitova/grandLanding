import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import "./FlipCard.scss";

function FlipCard({ icon, iconClass, title, description}) {
  const flipCard = useRef();
  
  const handleClick = function() {
    flipCard.current.classList.toggle("active");
  }
  const handleMove = function() {
    if(flipCard.current.classList.contains("active")){
      flipCard.current.classList.toggle("active");
    }
  }
  return (
    <div className="flip-card" ref={flipCard} onMouseLeave={handleMove}>
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <svg className={`icon ${iconClass}`}>
            <use href={`sprite.svg#${icon}`}></use>
          </svg>
          <h3 className="flip-card__info">{title}</h3>
          <div className="flip-card__i" onClick={handleClick}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="flip-card__back">{description}</div>
      </div>
    </div>
  );
}

export default FlipCard;
