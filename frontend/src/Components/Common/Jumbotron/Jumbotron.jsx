import React, { Component } from "react";
import img from "../../../Assets/Images/JumbotronImage.jpg";
import "./Jumbotron.styles.css";

class Jumbotron extends Component {
  state = {};
  render() {
    return (
      <div class="jumbocontainer">
        <div className="jumbotronText">
          <p class="title">Spartan Car Rentals</p>
          <p class="subtext">
            The freedom of cars on demand in hundreds of cities, ready to book
            by the hour or day.
          </p>
        </div>
        <div className="jumbotronImage">
          <img src={img} alt="JumbotronImage"></img>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
