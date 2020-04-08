import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";

class MapMarker extends Component {
  state = {};
  render() {
    return <Marker position={{ lat: 37.330516, lng: -121.885233 }} />;
  }
}

export default MapMarker;
