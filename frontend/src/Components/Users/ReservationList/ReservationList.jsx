import React, { Component } from 'react';
import axios from 'axios';
import Constants from '../../../Utils/Constants';
import BannerCard from './BannerCard/BannerCard'
import ReservationModal from './ReservationModal/ReservationModal'
import CustomButton from '../../Common/CustomButton/CustomButton';


// import 'bootstrap/dist/css/bootstrap.min.css';



import { Modal, Button } from 'react-bootstrap';

class ReservationList extends Component {
    state = {
        RESERVATIONS: [],
        modalShow: false,
        setModalShow: false
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


    // cancelHandler = () => {

    // }
    render() {
        let modalDetails = {
            modalHeader: "Confirm Action",

        }
        //const [modalShow, setModalShow] = React.useState(false);
        return (
            <div className="ResList">

                {this.state.RESERVATIONS.map((details) => (
                    <BannerCard {...details} modalShow={this.state.modalShow} modalShowHandler={this.setModalShow} modalDetails={modalDetails} />
                ))}




            </div>
        );
    }
}

export default ReservationList;