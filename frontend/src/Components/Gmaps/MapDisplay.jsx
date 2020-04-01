//https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
// https://www.npmjs.com/package/google-maps-react

// API KEY : AIzaSyDEn8HT69AFasbJ2m_uf3G5pfEtdhdkVfg
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import MapMarker from "./MapMarker";
import MapGetLocation from "./MapGetLocation";

import "./MapDisplay-styles.css";

class MapDisplay extends Component {
  state = {
    currentPosition: {
      latitude: "",
      longitude: ""
    },
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {
      name: "someplacename"
    }
  };

  //   componentDidMount() {
  //     const getPosition = MapGetLocation();
  //     this.setState({ currentPosition: { latitude: getPosition.latitude } });
  //     console.log(getPosition);
  //     console.log(this.state.currentPosition);
  //   }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(MapGetLocation());
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const style = {
      width: "100%",
      height: "100%"
    };
    const getPosition = MapGetLocation();
    console.log(getPosition);
    return (
      <div className="mapDisplay">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: getPosition.latitude,
            lng: getPosition.longitude
          }}
          zoom={10}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDEn8HT69AFasbJ2m_uf3G5pfEtdhdkVfg"
})(MapDisplay);
