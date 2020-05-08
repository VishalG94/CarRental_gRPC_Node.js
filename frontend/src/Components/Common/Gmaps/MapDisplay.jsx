//https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
// https://www.npmjs.com/package/google-maps-react

// API KEY : AIzaSyDEn8HT69AFasbJ2m_uf3G5pfEtdhdkVfg
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

// import Locations from "../../../DummyData/Locations";

import "./MapDisplay-styles.css";
import axios from "axios";
import Constants from "../../../Utils/Constants";
import CustomButton from "../CustomButton/CustomButton";

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
    locations: [],
  };

  async componentWillMount() {
    // const getPosition = MapGetLocation();
    // this.setState({ currentPosition: { latitude: getPosition.latitude } });
    // console.log(getPosition);
    // console.log(this.state.currentPosition);
    // let d = new Date();
    // console.log(" before axios call " + d.getMilliseconds());
    let locationdata;
    // console.log("getting locations");
    await axios.get(`${Constants.BACKEND_SERVER.URL}/locations`).then((res) => {
      console.log(res);

      if (res.status === 200) {
        // console.log(res.data)
        locationdata = res.data.locations;
        // console.log(locationdata)
      }
    });

    await this.setState({ locations: locationdata }, () => {
      //  console.log(this.state.locations);
      // this.state.locations.map((location) => {
      //   console.log(location.ADDRESS.STREET);
      // })
      // console.log("after set state" + d.getMilliseconds());
    });
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    localStorage.setItem("locationId", props.locationID);
    localStorage.setItem("locationName", props.name);
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
    // let d = new Date();
    // console.log("In render" + d.getMilliseconds());

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
          {this.state.locations.map((location) => (
            <Marker
              // label={"string"}
              key={location._id}
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
            <a href="./vehicleCatalog" style={{ textDecoration: "none" }}>
              <CustomButton
              // style={{ height: "40px", textAlign: "center", textTop: "0px" }}
              >
                Go to the Location
              </CustomButton>
            </a>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDEn8HT69AFasbJ2m_uf3G5pfEtdhdkVfg",
})(MapDisplay);
