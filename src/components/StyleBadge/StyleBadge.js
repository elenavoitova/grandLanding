import React from "react";
import "./StyleBadge.scss";

function StyleBadge({ size, deg, volume, animate, ...args }) {
  return (
    <div
      className={`style-badge style-badge-${size} style-badge-${deg} ${animate ? 'style-badge--animate' : null}`}
      {...args}
    >
      <div className="style-badge__layer-dark"></div>
      <div className={`style-badge__layer-colored style-badge--${volume} style-badge-${deg}`}></div>
    </div>
  );
}

export default StyleBadge;
