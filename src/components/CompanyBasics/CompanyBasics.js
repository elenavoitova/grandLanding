import React from "react";
import FlipCard from "../FlipCard/FlipCard";

import "./CompanyBasics.scss";

function CompanyBasics({translations}) {

  const today = new Date();
  const currentYear = today.getFullYear();
  const initYear = 2008;
  return (
    <section className="company-basics">
        <div className="company-basics__list">
          <FlipCard
            icon="guarantee"
            iconClass="icon-1"
            title={translations.card1.title}
            description={translations.card1.description}
          />
          <FlipCard
            icon="technical"
            iconClass="icon-2"
            title={translations.card2.title}
            description={translations.card2.description}
          />
          <FlipCard
            icon="team-management"
            iconClass="icon-3"
            title={translations.card3.title}
            description={translations.card3.description}
          />
          <FlipCard
            icon="team-1"
            iconClass="icon-4"
            title={`${currentYear - initYear} ${translations.card4.title}`}
            description={translations.card4.description}
          />
          </div>
          <div className="company-basics__square"></div>
    </section>
  );
}

export default CompanyBasics;
