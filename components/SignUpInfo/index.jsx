import React from "react";
import "./SignUpInfo.css";

function SignUpInfo(props) {
  const {
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    inputType4,
    inputPlaceholder4,
  } = props;

  return (
    <div className="sign-up-info">
      <div className="overlap-group-11">
        <img className="icon" src="/img/user@2x.svg" />
        <input
          className="first-name poppins-normal-shuttle-gray-14px"
          name="firstname"
          placeholder={inputPlaceholder1}
          type={inputType1}
        />
      </div>
      <div className="sign-up-info-item">
        <img className="icon" src="/img/user@2x.svg" />
        <input
          className="last-name poppins-normal-shuttle-gray-14px"
          name="lastname"
          placeholder={inputPlaceholder2}
          type={inputType2}
        />
      </div>
      <div className="sign-up-info-item">
        <img className="icon" src="/img/email-24px-1@2x.svg" />
        <input
          className="email-address poppins-normal-shuttle-gray-14px"
          name="emailaddress"
          placeholder={inputPlaceholder3}
          type={inputType3}
        />
      </div>
      <div className="overlap-group3-5">
        <img className="phone-notch-1" src="/img/phone-notch@2x.svg" />
        <input
          className="mobile-number-1 poppins-normal-shuttle-gray-14px"
          name="mobilenumber"
          placeholder={inputPlaceholder4}
          type={inputType4}
        />
      </div>
    </div>
  );
}

export default SignUpInfo;
