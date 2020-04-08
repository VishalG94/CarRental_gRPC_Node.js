import React, { Component } from "react";
import "./VehicleCatalog.styles.css";
import VehicleCard from "../VehicleCard/VehicleCard";
import Constants from "../../../Utils/Constants";

import axios from "axios";

import Vehicles from "../../../DummyData/Vehicles";

class VehicleCatalog extends Component {
  state = {
    catalog: [],
  };
  componentWillMount() {
    // axios.get(`${Constants.BACKEND_SERVER}/vehicles`).then((response) => {
    //   this.catalog = response.body.catalog;
    // });
  }
  render() {
    const vehicleDetails = Vehicles;

    return (
      <div className="catalogPage">
        <h2>
          Vehicles Available at location {localStorage.getItem("locationID")}
        </h2>
        <div className="vehicleCatalog">
          {vehicleDetails.map((details) => (
            <VehicleCard {...details} />
          ))}
        </div>
      </div>
    );
  }
}

export default VehicleCatalog;
