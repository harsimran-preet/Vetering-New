import React from "react";
import "./aahelp.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import questionmark from "./question.png";
import homelogo from "./home_ek1.png";
import newreqlogo from "./add_task.png";

export default function AAHelp(props) {
  return (
    <div className="background">
      <div className="rectangle-1">
        <div className="home">HELP</div>
        <div className="profile">
          <Avatar
            alt="Remy Sharp"
            src="https://ogden_images.s3.amazonaws.com/www.heraldstaronline.com/images/2018/11/11011123/HARRY-BUFFONE-WWII-WEB-557x840.jpg"
            sx={{ width: 54, height: 54 }}
          />
        </div>
        <div className="rectangle-6">
          <div className="insidetext">Click here for Call Support</div>
        </div>

        <div className="rectangle-7">
          <Link to="/aatutorials">
            <div className="insidetext">Click here for Tutorial</div>
          </Link>
        </div>

        <a href="/aaquestions">
          <div className="rectangle-8">
            <div className="insidetext">
              Click here for Questions and Answers
            </div>
          </div>
        </a>

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
