import React, { Component } from "react";
import MapDisplay from "../../Common/Gmaps/MapDisplay";
import Banner from "../../Common/Banner/Banner";
import "./HomePage.styles.css";
import Jumbotron from "../../Common/Jumbotron/Jumbotron";

import howData from "../../Common/BannerDataItems/How";
import whyData from "../../Common/BannerDataItems/Why";

import CustomButton from "../../Common/CustomButton/CustomButton";

import { Redirect } from "react-router";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="homeLayout">
        <Jumbotron />
        <br />
        <br />
        <h2>How it works!</h2>
        <Banner bannerDetails={howData} />
        <br />
        <br />
        <a href="vehicleList">
          <CustomButton>View all Vehicles</CustomButton>
        </a>

        <br />
        <br />
        <a href="reservationList">
          <CustomButton>View all Reservations</CustomButton>
        </a>
        <br />
        <br />
        <h2>Choose a location near you!</h2>
        <MapDisplay />
        <br />
        <br />
        <h2>Why you ask? </h2>
        <Banner bannerDetails={whyData} />
      </div>
    );
  }
}

export default HomePage;
