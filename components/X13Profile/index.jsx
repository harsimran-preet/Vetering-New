import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import Group8821 from "../Group8821";
import "./X13Profile.css";
import { Avatar, Grid } from "@nextui-org/react";

function X13Profile(props) {
  const {
    profile,
    jensonCarr,
    place,
    login1,
    login2,
    iconHome,
    iconPlus,
    iconUser,
    groupProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x13-profile screen">
        <div className="overlap-group5-1">
          <div className="flex-row-1">
            <div className="profile poppins-medium-daintree-24px">
              {profile}
            </div>
          </div>
          <div>
            <Avatar
              size="xl"
              src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
              color="gradient"
              bordered
            />
          </div>

          <div className="overlap-group2-2">
            <img className="vector-6" src="/img/vector-5@2x.svg" />
            <div className="rectangle-2145-1"></div>
            <div className="jenson-carr poppins-medium-black-20px">
              {jensonCarr}
            </div>
          </div>
          <div className="overlap-group4-1">
            <img className="vector-6" src="/img/vector-5@2x.svg" />
            <div className="rectangle-2145-1"></div>
            <div className="place-1 poppins-medium-black-20px">{place}</div>
          </div>
          <div className="overlap-group1-3">
            <div className="login-4 poppins-medium-white-14px">{login1}</div>
          </div>
          <div className="overlap-group-3">
            <div className="login-5 poppins-medium-white-14px">{login2}</div>
          </div>
          <div className="group-container-1">
            <Link to="/09-home">
              <div className="group-8946-1">
                <img className="icon-home-1" src={iconHome} />
              </div>
            </Link>
            <Link to="/10-new-post">
              <div className="group-8947-1">
                <img className="icon-plus-1" src={iconPlus} />
              </div>
            </Link>
            <div className="group-8948-1">
              <img className="icon-user-1" src={iconUser} />
            </div>
          </div>
          <div className="home-indicator-5"></div>
        </div>
      </div>
    </div>
  );
}

export default X13Profile;
