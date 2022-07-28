import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import * as Bootstrap from "bootstrap";
import "./Select.css";

function Select() {
  return (
    <div className="select">
      <ReactBootstrap.Form.Select size="sm" disabled={false}>
        <option>Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </ReactBootstrap.Form.Select>
    </div>
  );
}

export default Select;
