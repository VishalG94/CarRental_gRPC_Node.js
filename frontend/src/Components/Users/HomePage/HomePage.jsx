import React, { Component } from "react";
import MapDisplay from "../../Common/Gmaps/MapDisplay";
import Banner from "../../Common/Banner/Banner";
import "./HomePage.styles.css";
import Jumbotron from "../../Common/Jumbotron/Jumbotron";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="homeLayout">
        <Jumbotron />
        <Banner />

        <MapDisplay />

        <Banner />
      </div>
    );
  }
}

export default HomePage;
