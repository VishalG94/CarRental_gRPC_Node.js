import React, { Component } from "react";
import MapDisplay from "../Gmaps/MapDisplay";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>homepage</h1>
        <MapDisplay style={{ height: "50vh", width: "50vh" }} />
      </div>
    );
  }
}

export default HomePage;
