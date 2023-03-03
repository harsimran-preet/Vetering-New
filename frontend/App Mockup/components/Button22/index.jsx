import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Button2.css";

function Button2() {
  return (
    <Link to="/11-reqeuest-posted2">
      <div className="button">
        <MuiMaterial.Button
          endIcon=""
          size="large"
          startIcon=""
          color="success"
          disabled={false}
          variant="contained"
          disableElevation={false}
        >
          Confirm
        </MuiMaterial.Button>
      </div>
    </Link>
  );
}

export default Button2;
