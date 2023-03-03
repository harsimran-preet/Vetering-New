import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import * as Bootstrap from "bootstrap";
import "./Check.css";

function Check() {
  return (
    <div className="check">
      <ReactBootstrap.Form.Check defaultChecked type="checkbox" disabled={false} label="Keep me signed in" />
    </div>
  );
}

export default Check;
