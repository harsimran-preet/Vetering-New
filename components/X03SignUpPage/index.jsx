import React from "react";
import { Link } from "react-router-dom";
import Fab from "../Fab";
import SignUpInfo from "../SignUpInfo";
import Select from "../Select";
import DatePicker from "../DatePicker";
import Group7996 from "../Group7996";
import BarsHomeIndicatorIPhoneLightPortrai from "../BarsHomeIndicatorIPhoneLightPortrai";
import "./X03SignUpPage.css";
import { Avatar, Grid } from "@nextui-org/react";
import { deepOrange, deepPurple } from "@mui/material/colors";

function X03SignUpPage(props) {
  const {
    size,
    signUp,
    gender,
    inputType,
    inputPlaceholder,
    login,
    spanText1,
    spanText2,
    spanText3,
    signIn,
    signUpInfoProps,
    group79961Props,
    group79962Props,
    barsHomeIndicatorIPhoneLightPortraiProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x03-sign-up-page screen">
        <div className="group-8815-1">
          <div className="overlap-group-10">
            <img className="shape-1" src="/img/shape@2x.svg" />
            <a href="javascript:history.back()">
              <img className="size-1" src={size} />
            </a>
          </div>
          <div className="sign-up poppins-medium-daintree-16px">{signUp}</div>
        </div>
        <div className="overlap-group5-3">
          <Avatar
            size="xxl"
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            color="gradient"
            bordered
          />
          <Fab />
        </div>
        <SignUpInfo {...signUpInfoProps} />
        <div className="flex-row-3">
          <div className="gender poppins-normal-daintree-14px">{gender}</div>
          <Select />
        </div>
        <div className="group-8824">
          <div className="overlap-group4-2">
            <img className="credit-card" src="/img/credit-card@2x.svg" />
            <input
              className="social-security-number-ssn poppins-normal-shuttle-gray-14px"
              name="socialsecuritynumberssn"
              placeholder={inputPlaceholder}
              type={inputType}
            />
          </div>
        </div>
        <DatePicker />
        <Group7996
          inputType={group79961Props.inputType}
          inputPlaceholder={group79961Props.inputPlaceholder}
        />
        <Group7996
          inputType={group79962Props.inputType}
          inputPlaceholder={group79962Props.inputPlaceholder}
          className={group79962Props.className}
        />
        <Link to="/07-otp">
          <div className="group-7992-1">
            <div className="overlap-group5-2">
              <div className="login-11 poppins-medium-white-14px">{login}</div>
            </div>
          </div>
        </Link>
        <div className="overlap-group8">
          <p className="already-an-user">
            <span className="span0">{spanText1}</span>
            <span className="span1">{spanText2}</span>
            <span className="poppins-normal-blue-jeans-14px">{spanText3}</span>
          </p>
          <Link to="/02-sign-in">
            <div className="sign-in-1 poppins-normal-blue-jeans-14px">
              {signIn}
            </div>
          </Link>
        </div>
        <BarsHomeIndicatorIPhoneLightPortrai
          className={barsHomeIndicatorIPhoneLightPortraiProps.className}
        />
      </div>
    </div>
  );
}

export default X03SignUpPage;
