import React from "react";
import "./tutcomp.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import questionmark from "./question.png";
import homelogo from "./home_ek1.png";
import newreqlogo from "./add_task.png";
export default function TutComp(props) {
  return (
    <div className="background">
      <div className="rectangle-1">
        <div className="home">TUTORIALS</div>
        <div className="profile">
          <Avatar
            alt="Remy Sharp"
            src="https://ogden_images.s3.amazonaws.com/www.heraldstaronline.com/images/2018/11/11011123/HARRY-BUFFONE-WWII-WEB-557x840.jpg"
            sx={{ width: 54, height: 54 }}
          />
        </div>
        <div className="backbut">
          <a href="javascript:history.back()">
            <Button variant="contained" startIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </a>
        </div>
        <div className="rectangle-11">
          <div className="insidetext3">
            1. How to create a new service request?
          </div>
        </div>
        <div className="rectangle-12">
          <div className="insidetext4">
            Click the new request button in the bottom right hand corner
          </div>
          <div className="insidetext2">Go to Next Tutorial -</div>
        </div>

        <div>
          <div className="thebox1">
            <div className="logos">
              <img src={questionmark} />
            </div>
            <div className="text-4">HELP</div>
          </div>
          <Link to="/aahome">
            <div className="thebox2">
              <div className="logos1">
                <img src={homelogo} />
              </div>
              <div className="text-4">HOME</div>
            </div>
          </Link>
          <div className="thebox3">
            <div className="logos2">
              <img src={newreqlogo} />
            </div>
            <div className="text-4">NEW REQUEST</div>
          </div>
        </div>
      </div>
    </div>
  );
}
