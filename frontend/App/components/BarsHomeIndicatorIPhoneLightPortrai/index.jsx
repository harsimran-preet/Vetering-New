import React from "react";
import "./BarsHomeIndicatorIPhoneLightPortrai.css";

function BarsHomeIndicatorIPhoneLightPortrai(props) {
  const { className } = props;

  return (
    <div className={`bars-home-indicator ${className || ""}`}>
      <div className="home-indicator"></div>
    </div>
  );
}

export default BarsHomeIndicatorIPhoneLightPortrai;
