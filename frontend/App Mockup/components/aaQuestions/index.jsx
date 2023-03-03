import React from "react";
import "./aaques.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import questionmark from "./question.png";
import homelogo from "./home_ek1.png";
import newreqlogo from "./add_task.png";
import Alertdialog from "../alertdialog";

export default function AAHelp(props) {
  return (
    <div className="thegrey">
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

            {/* <div className="rectangle-62">
            <div className="insidetext">
              1. What kind of jobs can I request help for?
            </div>
            <Alertdialog
              btitle="1. What kind of jobs can I request help for?"
              title="What kind of jobs can I request help for?"
              desc="Our users request a variety of jobs. Some popular requests are: moving help, yard work, hauling waste to the dump, driving services, dog walking, and food delivery. If you jobs doesn’t fit one of these categories, select “other” when creating a new request i.If it’s an odd job, feel free to post it and see if a volunteer picks it up!"
            />
          </div> */}
            <div className="thepositions ">
              <p>
                <Alertdialog
                  btitle="1. What kind of jobs can I request help for?"
                  title="What kind of jobs can I request help for?"
                  desc="Our users request a variety of jobs. Some popular requests are: moving help, yard work, hauling waste to the dump, driving services, dog walking, and food delivery. If you jobs doesn’t fit one of these categories, select “other” when creating a new request i.If it’s an odd job, feel free to post it and see if a volunteer picks it up!"
                />
              </p>
              <p>
                <Alertdialog
                  btitle="2. Who are the volunteers?"
                  title="Who are the volunteers?"
                  desc="The volunteers are students from Cal Poly. Many students come from a variety of different groups on campus: Center for Military-Connected Students, Honors Societies, Clubs, Greek Life, and more."
                />
              </p>
              <p>
                <Alertdialog
                  btitle="3. How many requests can I make?"
                  title="How many requests can I make?"
                  desc="There is no limit on the number of requests you make. With that in mind, try not to spam requests as this will make it harder for others to find volunteers."
                />
              </p>
              <p>
                <Alertdialog
                  btitle="4. Does this cost me any money?"
                  title="Does this cost me any money?"
                  desc="No! Vetering is a completely free platform and requires no payment for signup, posts, or jobs. If you wanted to give volunteers a tip or hire them on the side in the future, that’s fine too!"
                />
              </p>
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
              <Link to="/aarequest">
                <div className="thebox3">
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
    </div>
  );
}
