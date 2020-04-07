import React from "react";
import "./CustomButton-style.css";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="CustomButton" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
