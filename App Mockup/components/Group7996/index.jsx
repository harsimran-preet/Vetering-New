import React from "react";
import "./Group7996.css";

function Group7996(props) {
  const { inputType, inputPlaceholder, className } = props;

  return (
    <div className={`group-7-1 ${className || ""}`}>
      <div className="overlap-group-12">
        <img className="group-7976-1" src="/img/group-7976@2x.svg" />
        <input
          className="password-1 poppins-normal-shuttle-gray-14px"
          name="password"
          placeholder={inputPlaceholder}
          type={inputType}
        />
      </div>
    </div>
  );
}

export default Group7996;
