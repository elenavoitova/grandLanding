import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import Slide from "../Slide/Slide";

import "./Slider.scss";

function Slider(){

  const params = {
    slidesPerView: 3,
    speed: 800,
    initialSlide: 1,
    spaceBetween: 20,
    centeredSlides: true,
  };

  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  
  return(
    <div className="slider">
      <Swiper {...params} getSwiper={setSwiper}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <Slide/>
      </Swiper>
      <button className="slider-button slider-button-prev" onClick={goPrev}></button>
      <button className="slider-button slider-button-next" onClick={goNext}></button>
    </div>          
  )}

export default Slider;