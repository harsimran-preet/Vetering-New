import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./DatePicker.css";

function DatePicker() {
  return (
    <div className="date-picker">
      <Antd.DatePicker
        bordered
        showToday
        allowClear
        picker="date"
        size="middle"
        status="default"
        disabled={false}
        format="MM/DD/YYYY"
        placeholder="Date"
      />
    </div>
  );
}

export default DatePicker;
