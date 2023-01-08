import React from "react";
import "./aanewrequests.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DatePicker from "../DatePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import close from "./close.png";
import done from "./done.png";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";

export default function aanewrequests(props) {
  const {
    newPost,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    groupProps,
    group8821Props,
    fabProps,
  } = props;
  const [age, setAge] = React.useState("");
  const handleChange = (event, SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const hours = [
    {
      value: 1,
      label: "1 Hours",
    },
    {
      value: 2,
      label: "2 Hours",
    },
    {
      value: 3,
      label: "3 Hours",
    },
    {
      value: 4,
      label: "4 Hours",
    },
    {
      value: 5,
      label: "4+ Hours",
    },
  ];
  return (
    <div className="thegrey">
      <div className="background">
        <div className="rectangle-1">
          <div className="homey">NEW REQUEST</div>
          <div className="profile">
            <Avatar
              alt="Remy Sharp"
              src="https://ogden_images.s3.amazonaws.com/www.heraldstaronline.com/images/2018/11/11011123/HARRY-BUFFONE-WWII-WEB-557x840.jpg"
              sx={{ width: 54, height: 54 }}
            />
          </div>
          <div className="rectangle-5">
            <div className="rectangle-6">
              <Antd.DatePicker
                bordered
                showToday
                allowClear
                style={{
                  width: "100%",
                  backgroundColor: "rgb(237, 237, 237)",
                }}
                picker="date"
                size="large"
                status="default"
                disabled={false}
                format="MM/DD/YYYY"
                placeholder="Date of Job"
              />
              <TextField
                id="filled-basic"
                fullWidth
                label="City"
                variant="filled"
              />

              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">
                  Service Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Landscaping</MenuItem>
                  <MenuItem value={20}>Food</MenuItem>
                  <MenuItem value={30}>Transportation</MenuItem>
                  <MenuItem value={40}>Dumpster Run</MenuItem>
                  <MenuItem value={50}>Moving</MenuItem>
                  <MenuItem value={60}>Other</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="filled-multiline-static"
                label="Description of the job"
                multiline
                rows={9}
                fullWidth
                placeholder="Example: I need help trimming trees around my yard and mowing my front lawn. Then, I need help taking it off to the dump. I have a gas lawnmower and lopping shears for you to use, but you will need to bring a truck to haul off the waste. I'll help out with picking up tree trimmings and pay for the dump fees. I'm available any weekend in the mornings. Thanks!"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                fullWidth
                type="number"
                label="Hours of Service?"
                variant="filled"
              />
            </div>
          </div>

          <div>
            <Link to="/aahelp">
              <div className="thebox111">
                <div className="logos111">
                  <img src={close} />
                </div>

                <div className="text-4">CANCEL</div>
              </div>
            </Link>
            <Link to="/aarequestposted1">
              <div className="thebox211">
                <div className="logos222">
                  <img src={done} />
                </div>
                <div className="text-4">SUBMIT</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
