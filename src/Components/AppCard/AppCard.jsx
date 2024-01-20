import React from "react";
import "./AppCard.css";

const AppCard = ({ img, name, percentage }) => {
  return (
    <div className="AppCard">
      <img src={img} alt="" />
      <div className="right">
        <div className="texts">
          <p className="appName">{name}</p>
          <p className="usage">{percentage}%</p>
        </div>
        <div className="usagee">
          <div className="child" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
