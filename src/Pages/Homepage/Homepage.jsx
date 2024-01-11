import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="contents">
        <p className="heading">Dashboard</p>
        <div className="InfoCards">
          <InfoCard title="Idle Applications" detail="10" cmdButton="Close Apps"/>
          <InfoCard title="Unused Startup Apps" detail="6" cmdButton="Reconfigure"/>
          <InfoCard title="Charger On For" detail="12 Hrs"/>
          <InfoCard title="Accessories On" detail="3 Hrs" />
          <InfoCard title="Laptop Idle Time" detail="10 Hrs"/>
          <InfoCard title="Last Restart" detail="24 Hrs Ago"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
