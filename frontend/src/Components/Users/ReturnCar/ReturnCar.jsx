import React, { Component } from 'react';
import axios from 'axios'
import Constants from '../../../Utils/Constants'
import './ReturnCar.styles.css'
class ReturnCar extends Component {
    state = {
        locations: []
    }
    componentWillMount() {
        axios.get(`${Constants.BACKEND_SERVER.URL}/locations`).then((response) => {



            if (response.data != null) {
                console.log(response.data)

                this.setState({
                    locations: response.data.locations
                }, () => {
                    console.log(this.state)
                })
            }
        })
    }
    vehicletolocationchangehandler = (e) => {
        this.setState({
            vehicletolocation: e.target.value
        }, () => {
            console.log(this.state.vehicletolocation)
        });
    }
    render() {
        return (
            <div className="returnCar">
                <div className="options">
                    <div>
                        Return Car at location:
                    </div>
                    <div>
                        <select id="addvehicletolocation" onChange={this.vehicletolocationchangehandler} >
                            {this.state.locations.map(location => (
                                <option value={location._id}>
                                    {location.NAME}
                                </option>

                            ))}
                        </select>
                    </div>
                </div>
                <div className="options">
                    Vehicle Picked Up At :
                </div>
            </div >

        );
    }
}

export default ReturnCar;