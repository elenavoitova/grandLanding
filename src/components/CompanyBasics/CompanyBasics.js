import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import "./CompanyBasics.scss";

function CompanyBasics() {
  return (
    <section className="company-basics">
        <div className="company-basics__list">
          <div className="company-basics__item">
            <svg className="icon" style={{ top: "-40px", right: "-100px" }}>
              <use href="sprite.svg#guarantee"></use>
            </svg>
            <h3 className="company-basics__item-info">
              Офіційне обладнання світових брендів
            </h3>
            <div
              className="company-basics__item-i"
              data-tip="Компания Гранд Оверон– официальный партнер ведущих производителей оборудования и комплектующих для альтернативной энергетики. Все поставляемое нами оборудование завозится исключительно по официальным (белым) каналам, что обеспечивает полное соблюдение гарантийных обязательств со стороны компаний-производителей"
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="company-basics__item">
            <svg className="icon" style={{ top: "-30px", right: "-100px" }}>
              <use href="sprite.svg#technical"></use>
            </svg>
            <h3 className="company-basics__item-info">
              Гарантійне і післягарантійне обслуговування
            </h3>
            <div
              className="company-basics__item-i"
              data-tip="Проведение регулярного обслуживания, проверка и корректировка настроек, своевременное определение неисправностей – залог длительной и максимально эффективной работы. С нашей помощью, ваша станция спустя много лет будет такой же эффективной в работе, как и при запуске"
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="company-basics__item">
            <svg className="icon" style={{ top: "-24px", right: "-80px" }}>
              <use href="sprite.svg#team-management"></use>
            </svg>
            <h3 className="company-basics__item-info">Професійна команда</h3>
            <div
              className="company-basics__item-i"
              data-tip="Наши инженеры и монтажники прошли обучение у ведущих производителей оборудования для альтернативной энергетики, имеют сертификаты на выполнение работ, постоянно работают над повышением собственного профессионального уровня. Команда Гранд Оверон – постоянный участник специализированных выставок и конференций, посвященных «зеленой энергетике»"
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="company-basics__item">
            <svg className="icon" style={{ top: "-8px", right: "-75px" }}>
              <use href="sprite.svg#team-1"></use>
            </svg>
            <h3 className="company-basics__item-info">
              12 років на енергетичному ринку
            </h3>
            <div
              className="company-basics__item-i"
              data-tip="ТОВ Гранд Оверон здійснює свою діяльність на території України з 2008 року. За цей час компанія зарекомендувала себе, як надійний партнер на ринку відновлюваної енергетики"
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      <ReactTooltip
        multiline={true}
        place="bottom"
        className="tooltip"
        // arrowColor="#57b33e"
        arrowColor="transparent"
      />
    </section>
  );
}

export default CompanyBasics;
