import React from "react";
import "./aahome1.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import add_task_ek2 from "./add_task_ek2.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { green, yellow, white } from "@mui/material/colors";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import questionmark from "./question.png";
import homelogo from "./home_ek1.png";
import CardComp from "../CardComponent";
import newreqlogo from "./add_task.png";
import grey from "./grey.png";
import green from "./green.png";
import yellow from "./yellow.png";

export default function AAHome1(props) {
  return (
    <div className="thegrey">
      <div className="background">
        <div className="rectangle-1">
          <div className="home">HOME</div>
          <div className="profile">
            <Avatar
              alt="Remy Sharp"
              src="https://ogden_images.s3.amazonaws.com/www.heraldstaronline.com/images/2018/11/11011123/HARRY-BUFFONE-WWII-WEB-557x840.jpg"
              sx={{ width: 54, height: 54 }}
            />
          </div>
          <div className="rectangle-51">
            <div className="smaller-rec">
              <Link to="/request-info1">
                <CardComp
                  servicename="Dumpster Run"
                  date="No Volunteer Offers Yet"
                  photo={grey}
                  acolor="white"
                />
              </Link>
            </div>
          </div>
          <div className="text-33">View All Request History-&#62;</div>
          <div>
            <Link to="/aahelp">
              <div className="thebox11">
                <div className="logos">
                  <img src={questionmark} />
                </div>

                <div className="text-4">HELP</div>
              </div>
            </Link>
            <div className="thebox21">
              <div className="logos1">
                <img src={homelogo} />
              </div>
              <div className="text-4">HOME</div>
            </div>
            <Link to="/aarequest">
              <div className="thebox31">
                <div className="logos2">
                  <img src={newreqlogo} />
                </div>
                <div className="text-4">NEW REQUEST</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
