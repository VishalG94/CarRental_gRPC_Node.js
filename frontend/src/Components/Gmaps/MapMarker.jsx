import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";

class MapMarker extends Component {
  state = {};
  render() {
    return <Marker position={{ lat: 48.0, lng: -122.0 }} />;
  }
}

export default MapMarker;
