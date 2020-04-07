import React, { Component } from "react";
import MapDisplay from "../Gmaps/MapDisplay";
import Banner from "../Banner/Banner";
import "./HomePage.styles.css";
import Jumbotron from "../Jumbotron/Jumbotron";

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
