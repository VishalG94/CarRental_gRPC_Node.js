import React, { Component } from "react";
import "./Footer.styles.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div>
          <h1>Spartan Cars - CMPE 202</h1>
          <h3>Under Prof. Gopinath</h3>
        </div>
        <ul>
          <li>Dhanashree</li>
          <li>Sri Hari</li>
          <li>Vamsi Krishna</li>
          <li>Vishal</li>
        </ul>
        <p>Icons from Zipcar website</p>
      </div>
    );
  }
}

export default Footer;
