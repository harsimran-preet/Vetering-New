import React from "react";
import "./Group.css";

function Group(props) {
  const { className } = props;

  return (
    <div className={`group ${className || ""}`}>
      <div className="overlap-group1">
        <img className="vetering-1-6" src="/img/vetering--1--6@2x.png" />
      </div>
      <img className="vector" src="/img/vector-3@2x.svg" />
    </div>
  );
}

export default Group;
