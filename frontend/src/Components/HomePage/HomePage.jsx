import React, { Component } from "react";
import MapDisplay from "../Gmaps/MapDisplay";
import BannerCard from "../BannerCard/BannerCard";
import Banner from "../Banner/Banner";
import "./HomePage.styles.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="homeLayout">
        <h1>homepage</h1>
        <Banner />

        <MapDisplay />

        <Banner />
      </div>
    );
  }
}

export default HomePage;
