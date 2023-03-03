import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Button.css";

function Button() {
  return (
    <a href="javascript:history.back()">
      <div className="button">
        <MuiMaterial.Button
          endIcon=""
          size="large"
          startIcon=""
          color="error"
          disabled={false}
          variant="contained"
          disableElevation={false}
        >
          Cancel
        </MuiMaterial.Button>
      </div>
    </a>
  );
}

export default Button;
