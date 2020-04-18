import "./SignUpPage.styles.css";
import img from "../../../Assets/Images/SignUp.jpg";
// import bgvideo from "../../Assets/BgVids/LoginBackground.mp4";

import React, { Component } from "react";
import SignUp from "../../Common/SignUp/SignUp";

class SignupPage extends Component {
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
          <SignUp {...this.props} />
        </div>
      </div>
    );
  }
}

export default SignupPage;
