//https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
// https://www.npmjs.com/package/google-maps-react

// API KEY : AIzaSyDEn8HT69AFasbJ2m_uf3G5pfEtdhdkVfg
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

import Locations from "../../../DummyData/Locations";

import "./MapDisplay-styles.css";

class MapDisplay extends Component {
  state = {
    currentPosition: {
      latitude: "",
      longitude: "",
    },
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {
      name: "someplacename",
    },
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
      showingInfoWindow: true,
    });
    localStorage.setItem("locationID", props.locationID);
    console.log(props);
  };
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onButtonClicked = (e) => {
    console.log("button clicked handler");
  };
  render() {
    const style = {
      width: "100%",
      height: "100%",
    };
    const getPosition = {
      latitude: 37.330516,
      longitude: -121.885233,
    };
    //  = MapGetLocation();
    // console.log(getPosition);
    return (
      <div className="mapDisplay">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 37.330516,
            lng: -121.885233,
          }}
        >
          {Locations.map((location) => (
            <Marker
              // label={"string"}
              title={location.ADDRESS.STREET}
              locationID={location._id}
              name={location.NAME}
              onClick={this.onMarkerClick}
              position={{
                lat: location.ADDRESS.LATITUDE,
                lng: location.ADDRESS.LONGITUDE,
              }}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <h3>{this.state.selectedPlace.name}</h3>
            <p>{this.state.selectedPlace.title}</p>
            <button>
              <a href="./vehicleCatalog" style={{ textDecoration: "none" }}>
                Go to the Location
              </a>
            </button>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDEn8HT69AFasbJ2m_uf3G5pfEtdhdkVfg",
})(MapDisplay);
