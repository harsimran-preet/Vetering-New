import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import "./X09HomeNew1.css";
import CardComp from "../CardComponent";
import dumprun from "./dumprun.png";

function X09HomeNew(props) {
  const { place, login1, login2, iconHome, iconPlus, iconUser } = props;

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group4">
        <div className="flex-row">
          <h1 className="place poppins-medium-daintree-24px">HOME</h1>
        </div>

        <div className="overlap-group2">
          <h6 className="place">Last 3 requested services</h6>
          <div className="rectangle-2145">
            <Link to="/request-info1">
              <CardComp
                servicename="Dumpster Run"
                date="Date (08/01/2022)"
                photo={dumprun}
                acolor="white"
              />
            </Link>
          </div>
        </div>
        <div className="overlap-group">
          <div className="login poppins-medium-white-14px">{login1}</div>
        </div>
        <div className="group-8945">
          <div className="overlap-group1">
            <Link to="/13-profile">
              <div className="login-1 poppins-medium-white-14px">Profile</div>
            </Link>
          </div>
        </div>
        <div className="group-container">
          {/* <div className="group-8946">
            <img className="house-128-4" src={iconHome} />
          </div> */}
          <Link to="/10-new-post1">
            <div className="group-8947">
              <img className="plus-2-512-4" src={iconPlus} />
            </div>
          </Link>
          {/* <Link to="/13-profile">
            <div className="group-8948">
              <img className="image-14" src={iconUser} />
            </div>
          </Link> */}
        </div>
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default X09HomeNew;
