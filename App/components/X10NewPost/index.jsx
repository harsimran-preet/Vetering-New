import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Group from "../Group";
import Group8821 from "../Group8821";
import Fab from "../Fab";
import Button from "../Button";
import Button2 from "../Button2";
import "./X10NewPost.css";
import { Avatar, Grid } from "@nextui-org/react";
import { deepOrange } from "@mui/material/colors";

function X10NewPost(props) {
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

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group4-3">
        <div className="flex-row-4">
          <div className="try poppins-medium-daintree-24px">NEW POST</div>
        </div>
        <div className="overlap-group5-3">
          <Avatar
            size="xxl"
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            color="gradient"
            bordered
          />
        </div>
        <div>
          <Box
            sx={{
              m: 4,
              width: 360,
              maxWidth: "100%",
            }}
          >
            <TextField
              id="filled-basic"
              fullWidth
              label="Location"
              variant="filled"
            />
          </Box>
          <Box
            sx={{
              m: 4,
              width: 360,
              maxWidth: "100%",
            }}
          >
            <TextField
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={6}
              fullWidth
              defaultValue=""
              variant="filled"
            />
          </Box>
          <FormControl variant="filled" sx={{ m: 4, minWidth: 360 }}>
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
              <MenuItem value={10}>Dumpster Run</MenuItem>
              <MenuItem value={20}>Moving</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="button-container">
          <Button />
          <Button2 />
        </div>
        <div className="home-indicator-8"></div>
      </div>
    </div>
  );
}

export default X10NewPost;
