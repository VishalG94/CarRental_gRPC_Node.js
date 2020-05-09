import React, { Component } from "react";
import Constants from "../../../Utils/Constants";
import axios from "axios";
// import VehicleCard from '../../Common/VehicleCard/VehicleCard';
import "./Reservations.styles.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addDays, setHours, setMinutes } from "date-fns";
import CustomButton from "../../Common/CustomButton/CustomButton";

// import ReactTimeslotCalendar from 'react-timeslot-calendar';

class Reservations extends Component {
  state = {
    vehicleDetails: {},
    locationDetails: {},
    reservationDetails: {},
    reservedDates: [],
    pickupDate: null,
    dropoffDate: null,
  };

  componentWillMount() {
    axios
      .get(`${Constants.BACKEND_SERVER.URL}/vehicle`, {
        params: {
          _id: localStorage.getItem("vehicleId"),
        },
      })
      .then((res) => {
        this.setState({
          vehicleDetails: res.data,
        });
        // console.log(res)
      })
      .then(() => {
        let reservation;
        console.log(this.state)
        for (reservation in this.state.vehicleDetails.RESERVATIONS) {
          let date = new Date(
            this.state.vehicleDetails.RESERVATIONS[reservation].PICKUP_TIME
          );
          this.state.reservedDates.push(date);
          for (let i = 0; i < this.state.vehicleDetails.RESERVATIONS[reservation].RENTAL_DURATION; i++) {
            this.state.reservedDates.push(
              setHours(setMinutes(date, 0), i).toTimeString()
            );
          }
          this.state.reservedDates.push(
            new Date(
              this.state.vehicleDetails.RESERVATIONS[reservation].PICKUP_TIME
            )
          );
          // console.log(typeof (this.state.reservedDates[reservation]))
          // console.log(this.state.vehicleDetails.RESERVATIONS[reservation].PICKUP_TIME)
        }
        let loc
        if (localStorage.getItem("locationId") === null) {
          loc = this.state.vehicleDetails.LOCATION._id
        }
        else {
          loc = localStorage.getItem("locationId")
        }
        axios
          .get(`${Constants.BACKEND_SERVER.URL}/location`, {
            params: {
              _id: loc,
            },
          })
          .then((res) => {
            this.setState({
              locationDetails: res.data,
            });
            // console.log(res)
          });
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    let duration =
      (this.state.dropoffDate.getTime() - this.state.pickupDate.getTime()) /
      3600000;
    duration = Math.ceil(duration);
    console.log(duration);
    let price = duration * this.state.vehicleDetails.CATEGORY.HOURLY_FEE;
    // localStorage.setItem("price", price);
    if (duration > 72) {
      window.alert("Duration cannot be more than 72 hours or 3 days");
    }
    else if (duration < 0) {
      window.alert("Return Date cannot be before Booking date");
    } 
    else {
      let reqObj = {
        USER: localStorage.getItem("userId"),
        VEHICLE: this.state.vehicleDetails._id,
        LOCATION: this.state.locationDetails._id,
        STATUS: "ACTIVE",
        RENTAL_DURATION: duration,
        PICKUP_TIME: this.state.pickupDate,
        RETURN_TIME: this.state.dropoffDate,
        PRICE: price,
      };
      console.log(reqObj);
      axios
        .post(`${Constants.BACKEND_SERVER.URL}/reservation`, reqObj)
        .then((res) => {
          console.log(res);
          this.props.history.push("reservationList");
        });
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  pickupHandler = (date) => {
    this.setState(
      {
        pickupDate: date,
      },
      () => console.log(this.state)
    );
    // console.log(this.state.pickupDate.getTime())
  };

  dropoffHandler = (date) => {
    this.setState(
      {
        dropoffDate: date,
      },
      () => console.log(this.state)
    );
  };

  render() {
    let display
    if (this.state.vehicleDetails.LOCATION) {
      display = <div>
        <form onSubmit={this.submitHandler} className="reservationOptions">
          <div className="options">
            <div>Vehicle Make : </div>
            <div> {this.state.vehicleDetails.MAKE}</div>
          </div>
          <div className="options">
            <div> Vehicle Model : </div>
            <div>{this.state.vehicleDetails.MODEL}</div>
          </div>
          <div className="options">
            <div> Vehicle Type : </div>
            <div>{this.state.vehicleDetails.CATEGORY.CATEGORY_NAME}</div>
          </div>
          <div className="options">
            Location Name : {this.state.vehicleDetails.LOCATION.NAME}
          </div>
          <div className="options">
            Select Pick-up Date and Time :{" "}
            <DatePicker
              name="pickupDate"
              selected={this.state.pickupDate}
              onChange={this.pickupHandler}
              showTimeSelect
              timeIntervals={60}
              //excludeDates={(this.state.reservedDates)}
              placeholderText="Click to select a date"
              minDate={new Date()}
              maxDate={addDays(new Date(), 30)}
            />
          </div>
          <div className="options">
            Select Drop-off Date and Time :{" "}
            <DatePicker
              name="pickupDate"
              selected={this.state.dropoffDate}
              onChange={this.dropoffHandler}
              showTimeSelect
              timeIntervals={60}
              placeholderText="Click to select a date"
              minDate={new Date()}
              maxDate={addDays(new Date(), 30)}
            />
          </div>
          <div>
            {/* <ReactTimeslotCalendar
                        initialDate={moment().format()}
                    /> */}
          </div>
        Note: Maximum duration is 72 hours and can be booked upto 30 days in
        advance
        <CustomButton type="submit">Submit</CustomButton>
        </form>
        {/* <TimePicker {...pickerOptions} /> */}
      </div>
    }
    return (
      <div className="reservations">
        Reservations
        {display}
      </div>
    );
  }
}

export default Reservations;
