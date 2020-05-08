import React, { Component } from 'react';
import Constants from '../../../Utils/Constants'
import axios from 'axios'
import VehicleCard from '../../Common/VehicleCard/VehicleCard';
import './Reservations.styles.css'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addDays, setHours, setMinutes, moment } from 'date-fns';

import TimePicker from './TimePicker';


// import ReactTimeslotCalendar from 'react-timeslot-calendar';


class Reservations extends Component {
    state = {
        vehicleDetails: {},
        locationDetails: {},
        reservationDetails: {},
        reservedDates: [],
        pickupDate: new Date(),
        dropoffDate: new Date()
    }

    componentWillMount() {

        axios.get(`${Constants.BACKEND_SERVER.URL}/vehicle`,
            {
                params: {
                    _id: localStorage.getItem("vehicleId")
                }
            }).then((res) => {
                this.setState({
                    vehicleDetails: res.data
                })
                // console.log(res)
            }).then(() => {
                let reservation
                for (reservation in this.state.vehicleDetails.RESERVATIONS) {
                    let date = new Date(this.state.vehicleDetails.RESERVATIONS[reservation].PICKUP_TIME)
                    this.state.reservedDates.push(date)
                    for (let i = 0; i < this.state.vehicleDetails.RESERVATIONS[reservation].RENTAL_DURATION; i++) {
                        this.state.reservedDates.push((setHours(setMinutes(date, 0), i)).toTimeString())

                    }
                    this.state.reservedDates.push(new Date(this.state.vehicleDetails.RESERVATIONS[reservation].PICKUP_TIME))
                    // console.log(typeof (this.state.reservedDates[reservation]))
                    // console.log(this.state.vehicleDetails.RESERVATIONS[reservation].PICKUP_TIME)
                }
                console.log(this.state)
            }
            )
        axios.get(`${Constants.BACKEND_SERVER.URL}/location`,
            {
                params: {
                    _id: localStorage.getItem("locationId")
                }
            }).then((res) => {
                this.setState({
                    locationDetails: res.data
                })
                // console.log(res)
            })




    }


    submitHandler = (e) => {
        e.preventDefault()
        let duration = ((this.state.dropoffDate.getTime() - this.state.pickupDate.getTime()) / 3600000)
        duration = Math.ceil(duration)
        console.log(duration)
        let price = duration * this.state.vehicleDetails.CATEGORY.HOURLY_FEE
        if (duration > 72) {
            window.alert("Duration cannot be more than 72 hours or 3 days")
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
            }
            console.log(reqObj)
            axios.post(`${Constants.BACKEND_SERVER.URL}/reservation`, reqObj).then((res) => {
                console.log(res);
            })
        }

    }

    handleChange = (e) => {

        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    pickupHandler = date => {
        this.setState({
            pickupDate: date
        }, () => console.log(this.state));
        // console.log(this.state.pickupDate.getTime())

    };


    dropoffHandler = date => {
        this.setState({
            dropoffDate: date
        }, () => console.log(this.state));
    };


    render() {
        let pickerOptions = {
            leadingZero: true,
            interval: 60,
            //disabled: this.state.reservedDates
        }
        return (<div className='reservations'>
            Reservations
            <div className="vehicleDetails">
                {this.state.vehicleDetails.MAKE}
                {this.state.vehicleDetails.MODEL}

            </div>
            <div className="locationDetails">
                {this.state.locationDetails.NAME}
            </div>
            <div >
                <form onSubmit={this.submitHandler} className="reservationOptions">

                    <div>
                        Select Pick-up Date and Time:
                          <DatePicker
                            name="pickupDate"
                            selected={this.state.startDate}
                            onChange={this.pickupHandler}
                            showTimeSelect
                            timeIntervals={60}
                            excludeDates={(this.state.reservedDates)}
                            placeholderText="Click to select a date"
                            minDate={new Date()}
                            maxDate={addDays(new Date(), 30)}
                        />
                    </div>
                    <div>
                        Select Drop-off Date and Time:
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
                            Note: Maximum duration is 72 hours and can be booked upto 30 days in advance
                            <button type="submit"  >Submit</button>
                </form>
                <TimePicker {...pickerOptions} />
            </div>


        </div>);
    }
}

export default Reservations;