import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import "./X09HomeNew.css";
import CardComp from "../CardComponent";
import vetlogo from "./vetering.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { green, yellow, white } from "@mui/material/colors";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
function X09HomeNew(props) {
  const { place, login1, login2, iconHome, iconPlus, iconUser } = props;

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group4">
        <div className="flex-row">
          <h1 className="place poppins-medium-daintree-24px">HOME</h1>
        </div>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{}}>
              <AccessTimeIcon />
            </Avatar>
            <h7>No Volunteer Offers Yet</h7>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: yellow[500] }}>
              <EmojiPeopleIcon />
            </Avatar>
            <h7>Volunteer has offered to help</h7>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: green[500] }}>
              <HandshakeIcon />
            </Avatar>
            <h7>You have accepted a volunteer</h7>
          </Stack>
        </Stack>
        <div className="overlap-group2">
          <div className="rectangle-2145">
            <img className="vlogo" src="/img/vetering--1--5@2x.png" />
            <div className="vlogotext">
              Please click the 'Request New Service' button to make a request
            </div>
          </div>
        </div>
        <div className="overlap-group5">
          <Link to="/10-new-post">
            <div className="login poppins-medium-white-14px">
              Request New Service
            </div>
          </Link>
        </div>
        <div className="overlap-group6">
          <div className="login poppins-medium-white-14px">
            View all Requests
          </div>
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
