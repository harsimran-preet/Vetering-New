import React from "react";
import "./aarequests.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function aaRequests(props) {
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
        <div className="rectangle-10">
          <Box sx={{ width: "100%" }}>
            <Stack spacing={6}>
              <div className="insidetext">
                1. How to create a new service request?
              </div>
              {/* <div className="insidetext">
                2. What information to include in a service request?
              </div> */}
              {/* <div className="insidetext">
                3. How to know a volunteer has offered to help my request?
              </div>
              <div className="insidetext">
                4. How to accept a volunteer’s offer?
              </div>
              <div className="insidetext">
                5. How to communicate with a volunteer?
              </div>
              <div className="insidetext">6. How to delete a request?</div>
              <div className="insidetext">
                7. What to do after the job has been completed?
              </div>
              <div className="insidetext">
                8. How to update profile information?
              </div> */}
            </Stack>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
}
