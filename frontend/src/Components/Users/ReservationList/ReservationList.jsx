import React, { Component } from 'react';
import axios from 'axios';
import Constants from '../../../Utils/Constants';
import BannerCard from './BannerCard/BannerCard'

class ReservationList extends Component {
    state = {
        RESERVATIONS: []
    }
    componentWillMount() {

        axios.get(`${Constants.BACKEND_SERVER.URL}/userRes`, {
            params: {
                _id: localStorage.getItem("userId")
            }
        }).then((res) => {
            console.log(res.data.RESERVATIONS);
            this.setState({ RESERVATIONS: res.data.RESERVATIONS })
        })
    }

    render() {
        return (
            <div className="ResList">
                {this.state.RESERVATIONS.map((details) => (
                    <BannerCard {...details} />
                ))}
            </div>
        );
    }
}

export default ReservationList;