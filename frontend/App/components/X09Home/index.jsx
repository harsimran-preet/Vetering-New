import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import "./X09HomeNew.css";
import CardComp from "../CardComponent";

function X09HomeNew(props) {
  const { place, login1, login2, iconHome, iconPlus, iconUser } = props;

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group4">
        <div className="flex-row">
          <h1 className="place poppins-medium-daintree-24px">HOME</h1>
        </div>
        <div className="overlap-group2">
          <img
            className="vector"
            src="https://anima-uploads.s3.amazonaws.com/projects/62cd646071a28706a8329171/releases/62dfa44597ebd2806a39c94c/img/vector-4@2x.svg"
          />
          <div className="rectangle-2145">
            <CardComp />
          </div>
        </div>
        <div className="overlap-group">
          <div className="login poppins-medium-white-14px">{login1}</div>
        </div>
        <div className="group-8945">
          <div className="overlap-group1">
            <Link to="/10-new-post">
              <div className="login-1 poppins-medium-white-14px">{login2}</div>
            </Link>
          </div>
        </div>
        <div className="group-container">
          <div className="group-8946">
            <img className="house-128-4" src={iconHome} />
          </div>
          <Link to="/10-new-post">
            <div className="group-8947">
              <img className="plus-2-512-4" src={iconPlus} />
            </div>
          </Link>
          <Link to="/13-profile">
            <div className="group-8948">
              <img className="image-14" src={iconUser} />
            </div>
          </Link>
        </div>
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default X09HomeNew;
