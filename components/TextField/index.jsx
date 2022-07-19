import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./TextField.css";

function TextField() {
  return (
    <div className="text-field">
      <MuiMaterial.TextField
        size="medium"
        disabled={false}
        label="ex. 1234"
        color="secondary"
        variant="outlined"
        sx={{ width: "300px" }}
      />
    </div>
  );
}

export default TextField;
