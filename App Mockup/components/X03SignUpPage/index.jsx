import React from "react";
import { Link } from "react-router-dom";
import Fab from "../Fab";
import SignUpInfo from "../SignUpInfo";
import Select from "../Select";
import DatePicker from "../DatePicker";
import Alert from "@mui/material/Alert";
import Group7996 from "../Group7996";
import BarsHomeIndicatorIPhoneLightPortrai from "../BarsHomeIndicatorIPhoneLightPortrai";
import "./X03SignUpPage.css";
import { Avatar, Grid } from "@nextui-org/react";
import { deepOrange, deepPurple } from "@mui/material/colors";

import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

class Showhide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  onchange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <div className="ssn">
          <FormControl className="form-group row">
            <FormLabel id="demo-row-radio-buttons-group-label">
              Who are you?
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                control={<Radio value="1" onClick={this.onchange} />}
                label="Veteran"
              />
              <FormControlLabel
                control={<Radio value="0" onClick={this.onchange} />}
                label="Volunteer"
              />
            </RadioGroup>
          </FormControl>
        </div>

        {value === "1" && (
          <div className="form-group column mb-3">
            <Alert className="alertinfo" severity="info">
              Your Social Security Number is not stored on our app and is solely
              processed by the Veterans Affairs (USVA) to protect against stolen
              valor. We want to return service to those who deserve it, and the
              VA requires this information to confirm your Veteran status.
            </Alert>
            <div className="overlap-group4-2">
              <img className="credit-card" src="/img/credit-card@2x.svg" />
              <input
                className="social-security-number-ssn poppins-normal-shuttle-gray-14px"
                name="socialsecuritynumberssn"
                placeholder="Social Security Number (SSN)"
                maxLength={9}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

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
      <div className="x03-sign-up-page">
        <div className="group-8815-1">
          <div className="overlap-group-10">
            <img className="shape-1" src="/img/shape@2x.svg" />
            <a href="javascript:history.back()">
              <img className="size-1" src={size} />
            </a>
            <div className="sign-up poppins-medium-daintree-16px">SIGN UP</div>
          </div>
        </div>
        {/* <div className="overlap-group5-3">
          <Avatar
            size="xxl"
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            color="gradient"
            bordered
          />
          <Fab className="fab" />
        </div> */}
        <SignUpInfo {...signUpInfoProps} />
        <div className="flex-row-3"></div>
        <div className="ssn">
          <div className="gender poppins-normal-daintree-14px">{gender}</div>
          <Select />
          <Showhide />
          <DatePicker />
        </div>

        <Group7996
          inputType="password"
          inputPlaceholder={group79961Props.inputPlaceholder}
        />
        <Group7996
          inputType="password"
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
        {/* Falied login examples */}
        {/* <div className="overlap-group8">
          <Link to="/sign-up-offender">
            <p className="already-an-user">
              <span className="poppins-normal-blue-jeans-14px">
                Failed Login 1
              </span>
            </p>
          </Link>
        </div>
        <div className="overlap-group8">
          <Link to="/sign-up-fakeveteran">
            <p className="already-an-user">
              <span className="poppins-normal-blue-jeans-14px">
                Failed Login 2
              </span>
            </p>
          </Link>
        </div> */}
        <BarsHomeIndicatorIPhoneLightPortrai
          className={barsHomeIndicatorIPhoneLightPortraiProps.className}
        />
      </div>
    </div>
  );
}

export default X03SignUpPage;
