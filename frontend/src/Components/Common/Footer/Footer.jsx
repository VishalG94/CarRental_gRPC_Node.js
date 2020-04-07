import React, { Component } from "react";
import "./Footer.styles.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <h1>Spartan Cars - CMPE 202</h1>
        <ul>
          <li>Dhanashree</li>
          <li>Sri Hari</li>
          <li>Vamsi Krishna</li>
          <li>Vishal</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
