import React from "react";
import "./aahome.css";
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
import newreqlogo from "./add_task.png";

export default function AAHome(props) {
  return (
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
        <div className="rectangle-5">
          <div className="text-1">You have no requests right now!</div>
          <div className="text-2">
            Select <img src={add_task_ek2} />
            &nbsp;Create Request in the lower right to see requests appear here
          </div>
          <div className="colorkey">
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{}}>
                  <AccessTimeIcon />
                </Avatar>
                <h7>No Volunteer Offers Yet</h7>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: yellow[600] }}>
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
          </div>
        </div>
        <div className="text-3">View All Request History-&#62;</div>
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

          <div className="thebox31">
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
