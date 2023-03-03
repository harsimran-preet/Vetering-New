import React from "react";
import { Link } from "react-router-dom";
import Group2 from "../Group2";
import "./X01Welcome.css";

function X01Welcome(props) {
  const { login1, login2, ourGoalIsToConne, vetering } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x01-welcome screen">
        <div className="overlap-group3-4">
          <div className="screen">
            <div className="home-indicator-7"></div>
          </div>
          <Link to="/02-sign-in">
            <div className="long-button">
              <div className="login-7 poppins-medium-white-14px">{login1}</div>
            </div>
          </Link>
          <Link to="/02-sign-in">
            <div className="overlap-group-7">
              <div className="login-8 poppins-medium-white-14px">{login2}</div>
            </div>
          </Link>
          <div className="overlap-group1-5">
            <img className="vector-7" src="/img/vector@2x.svg" />
            <div className="rectangle-2145-2"></div>
            <p className="our-goal-is-to-conne poppins-normal-shuttle-gray-14px">
              {ourGoalIsToConne}
            </p>
          </div>
          <div className="vetering poppins-medium-daintree-24px">
            {vetering}
          </div>
          <Group2 />
        </div>
      </div>
    </div>
  );
}

export default X01Welcome;
