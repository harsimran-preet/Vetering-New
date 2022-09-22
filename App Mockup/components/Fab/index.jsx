import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Fab.css";

function Fab(props) {
  const { className } = props;

  return (
    <div className={`fab ${className || ""}`}>
      <MuiMaterial.Fab size="medium" color="primary" disabled={false} variant="circular" disableRipple={false}>
        <MuiIconsMaterial.AddOutlined />
      </MuiMaterial.Fab>
    </div>
  );
}

export default Fab;
