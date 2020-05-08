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
        //const locationID = localStorage.getItem("locationId")
        // console.log()
        axios.get(`${Constants.BACKEND_SERVER.URL}/vehicles`


        ).then((response) => {
            console.log(response.data);
            this.setState({ catalog: response.data.vehicles })
        }).catch((error) => {
            console.log(error)
        });
    }
    render() {
        //const vehicleDetails = Vehicles;

        return (
            <div className="catalogPage">
                <h2>
                    Vehicles Catalog
                </h2>
                <div className="vehicleCatalog">
                    {this.state.catalog.map((details) => (
                        <VehicleCard {...details} />
                    ))}
                </div>
            </div>
        );
    }
}

export default VehicleCatalog;
