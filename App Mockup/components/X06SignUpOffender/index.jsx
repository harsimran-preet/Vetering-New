import React from "react";
import Group2 from "../Group2";
import "./X06SignUpOffender.css";

function X06SignUpOffender(props) {
  const { signUp, ourRecordsShowTha, login, group2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x06-sign-up-offender screen">
        <div className="overlap-group3-6">
          <div className="sign-up-1 poppins-medium-daintree-24px">SIGN UP</div>
          <div className="group-container-2">
            <div className="overlap-group1-8">
              <img className="vector-11" src="/img/vector@2x.svg" />
              <div className="rectangle-2145-5"></div>
              <p className="our-records-show-tha poppins-normal-shuttle-gray-14px">
                {ourRecordsShowTha}
              </p>
            </div>
            <Group2 className={group2Props.className} />
          </div>
          <div className="overlap-group-14">
            <div className="login-12 poppins-medium-white-14px">{login}</div>
          </div>
          <div className="home-indicator-9"></div>
        </div>
      </div>
    </div>
  );
}

export default X06SignUpOffender;
