import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./LoginPage-styles.css";
// import bgvideo from "../../Assets/BgVids/LoginBackground.mp4";

import React, { Component } from "react";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div className="loginpage">
        {/* <video autoPlay muted loop id="myVideo">
          <source src={bgvideo} type="video/mp4" />
        </video> */}
        <div className="logincomponents">
          <SignIn />
          <SignUp />
        </div>
      </div>
    );
  }
}

export default LoginPage;
