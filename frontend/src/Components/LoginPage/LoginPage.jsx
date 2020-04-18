import SignIn from "../Common/SignIn/SignIn";
import "./LoginPage-styles.css";
import img from "../../Assets/Images/Login.jpg";

// import bgvideo from "../../Assets/BgVids/LoginBackground.mp4";

import React, { Component } from "react";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div className="loginPage">
        {/* <video autoPlay muted loop id="myVideo">
          <source src={bgvideo} type="video/mp4" />
        </video> */}
        <div className="loginImage">
          <img src={img} alt="LoginImage" className="image"></img>
        </div>
        <div className="logincomponents">
          <SignIn {...this.props} />
        </div>
      </div>
    );
  }
}

export default LoginPage;
