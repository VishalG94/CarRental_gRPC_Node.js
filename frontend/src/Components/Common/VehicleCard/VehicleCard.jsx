import React, { Component } from "react";
import "./BannerCard-styles.css";
import { Link, Redirect } from "react-router-dom";

class VehicleCard extends Component {
  state = {};

  clickHandler = (e) => {
    localStorage.setItem("vehicleId");
    const userType = localStorage.getItem("userType");
    if (userType === "admin") {
      this.props.history.push("/admin/vehicleList");
    } else {
      this.props.history.push("/users/reservations");
    }
  };
  render() {
    return (
      <div className="vehicleCard" onClick={this.clickHandler}>
        <img
          alt="cardimage"
          src={this.props.imageURL}
          className="cardImage"
        ></img>
        <p className="cardText">{this.props.text}</p>
      </div>
    );
  }
}

export default VehicleCard;
