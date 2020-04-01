import React, { Component } from "react";
import MapDisplay from "../Gmaps/MapDisplay";
import BannerCard from "../BannerCard/BannerCard";
import Banner from "../Banner/Banner";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>homepage</h1>
        {/* <MapDisplay style={{ height: "50vh", width: "50vh" }} /> */}
        <BannerCard
          imageURL="https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg"
          bottomtext="Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership."
        />
        <Banner />
      </div>
    );
  }
}

export default HomePage;
