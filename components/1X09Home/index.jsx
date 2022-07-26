import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import "./X09Home.css";

function X09Home(props) {
  const {
    place,
    login1,
    login2,
    vetering15,
    iconHome,
    iconPlus,
    iconUser,
    groupProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x09-home screen">
        <div className="overlap-group4">
          <div className="flex-row">
            <div className="place poppins-medium-daintree-24px">{place}</div>
          </div>
          <div className="overlap-group-1">
            <div className="login-1 poppins-medium-white-14px">{login1}</div>
          </div>
          <Link to="/10-new-post">
            <div className="group-8945">
              <div className="overlap-group1-1">
                <div className="login-2 poppins-medium-white-14px">
                  {login2}
                </div>
              </div>
            </div>
          </Link>
          <div className="overlap-group5">
            <div className="overlap-group2-1">
              <img className="vector-5" src="/img/vector@2x.svg" />
              <div className="rectangle-2145"></div>
            </div>
            <img className="vetering-1-5" src={vetering15} />
          </div>
          <div className="group-container">
            <div className="group-8946">
              <img className="icon-home" src={iconHome} />
            </div>
            <Link to="/10-new-post">
              <div className="group-8947">
                <img className="icon-plus" src={iconPlus} />
              </div>
            </Link>
            <Link to="/13-profile">
              <div className="group-8948">
                <img className="icon-user" src={iconUser} />
              </div>
            </Link>
          </div>
          <div className="home-indicator-4"></div>
        </div>
      </div>
    </div>
  );
}

export default X09Home;
