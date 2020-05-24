import React from 'react';
import './Areas.scss';

function Areas() {
  return (
    <section className="company-basics">
      <div className="container">
        <div className="company-basics__list">
          {/* <div 
            className="company-basics__item"
            style={{backgroundImage: 'url("./img/Снимок экрана 2020-05-22 в 20.59.34.png")'}}>
              <h3 className="company-basics__item-info">Гарантія на обладнання</h3>
          </div> */}
          <div 
            className="company-basics__item">
            <h3 className="company-basics__item-info">Установка і налагодження</h3>
            <a className="company-basics__item-cycle" href="/">+</a>
          </div>
          <div
            className="company-basics__item">
            <h3 className="company-basics__item-info">Гарантійне і післягарантійне обслуговування</h3>
            <a className="company-basics__item-cycle" href="/">+</a>
          </div>
          <div
            className="company-basics__item">
            <h3 className="company-basics__item-info">Допомога в оформленні «Зеленого тарифу»</h3>
            <a className="company-basics__item-cycle" href="/">+</a>
          </div>
          <div
            className="company-basics__item">
            <h3 className="company-basics__item-info">Професійна команда.<br/>12 років на ринку</h3>
            <a className="company-basics__item-cycle" href="/">+</a>
          </div>
          </div>
      </div>
    </section>
  );
}

export default Areas;