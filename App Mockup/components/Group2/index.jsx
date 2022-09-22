import React from "react";
import "./Group2.css";

function Group2(props) {
  const { className } = props;

  return (
    <div className={`group-5 ${className || ""}`}>
      <div className="overlap-group2-4">
        <img className="vetering-1-6-5" src="/img/vetering--1--6@2x.png" />
      </div>
      <img className="vector-8" src="/img/vector-1@2x.svg" />
    </div>
  );
}

export default Group2;
