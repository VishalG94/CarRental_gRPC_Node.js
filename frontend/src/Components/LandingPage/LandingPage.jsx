import React, { Component } from "react";
import "./LandingPage.styles.css";

import Jumbotron from "../../Components/Common/Jumbotron/Jumbotron";
import Banner from "../Common/Banner/Banner";
import howData from "../Common/BannerDataItems/How";
import whyData from "../Common/BannerDataItems/Why";

class LandingPage extends Component {
  state = {};

  render() {
    const banner2 = [];
    return (
      <div className="homeLayout">
        <Jumbotron />
        <h2>How it works!</h2>
        <Banner bannerDetails={howData} />
        <h2>Why you ask? </h2>
        <Banner bannerDetails={whyData} />
      </div>
    );
  }
}

export default LandingPage;
