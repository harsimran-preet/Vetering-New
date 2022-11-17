import React from "react";
import "./aaques.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import questionmark from "./question.png";
import homelogo from "./home_ek1.png";
import newreqlogo from "./add_task.png";
import Alertdialog from "../alertdialog";

export default function AAHelp(props) {
  return (
    <div className="aa">
      <div className="background">
        <div className="rectangle-1">
          <div className="home">QUESTIONS</div>
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

          <div className="rectangle-62">
            <div className="insidetext">
              1. What kind of jobs can I request help for?
            </div>
            <Alertdialog
              btitle="click me!"
              title="What kind of jobs can I request help for?"
              desc="Our users request a variety of jobs. Some popular requests are: moving help, yard work, hauling waste to the dump, driving services, dog walking, and food delivery. If you jobs doesn’t fit one of these categories, select “other” when creating a new request i.If it’s an odd job, feel free to post it and see if a volunteer picks it up!"
            />
          </div>

          <div className="rectangle-72">
            <div className="insidetext">2. Who are the volunteers?</div>
          </div>
          <div className="rectangle-82">
            <div className="insidetext">3. How many requests can I make?</div>
          </div>
          <div className="rectangle-92">
            <div className="insidetext">4. Does this cost me any money?</div>
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
    </div>
  );
}
