import React, { Component } from 'react';
import "./BannerCard-styles.css";
import imageURL from "../../../../Assets/Icons/Calendar.svg";
import CustomButton from "../../../Common/CustomButton/CustomButton";
import ReservationModal from "../ReservationModal/ReservationModal";
import axios from "axios";
import Constants from "../../../../Utils/Constants";
import ReservationModal2 from "../ReservationModal/ReservationModal2";


class BannerCard extends Component {
  state = {
    timeLeft: 0,
    showModal1: false,
    showModal2: false,
  }

  componentWillMount() {
    let today = new Date();
    let timeLeft =
      (new Date(this.props.PICKUP_TIME).getTime() - today.getTime()) /
      (1000 * 60 * 60);
    timeLeft = Math.ceil(timeLeft);
    this.setState({ timeLeft: timeLeft })
  }
  returnHandler = () => {
    let req = {
      STATUS: "COMPLETED",
      USER_COMMENTS: "",
      VEHICLE_ID: this.props.VEHICLE._id,
      USER_ID: this.props.USER._id,
      _id: this.props._id,
    };
    axios
      .put(`${Constants.BACKEND_SERVER.URL}/reservation`, req)
      .then((res) => {
        console.log("Reservation Completed" + res);
        this.props.modalShowHandler(false);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Reservation errored");
        this.props.modalShowHandler(false);
        window.location.reload(false);
      });

    console.log("Return car id" + this.props.VEHICLE._id + " res id " + this.props._id);
  };
  cancelHandler = () => {
   
    let req = {
      STATUS: "CANCELLED",
      USER_COMMENTS: "",
      VEHICLE_ID: this.props.VEHICLE._id,
      USER_ID: this.props.USER._id,
      _id: this.props._id,
    };
    axios
      .put(`${Constants.BACKEND_SERVER.URL}/reservation`, req)
      .then((res) => {
        if (this.state.timeLeft < 1) {
          localStorage.setItem("price");
          this.props.history.push("/payments");
        }
        console.log("Reservation cancelled" + res);
        this.props.CancelmodalShowHandler(false);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Reservation errored");
        this.props.CancelmodalShowHandler(false);
        window.location.reload(false);
      });
    console.log(this.state.timeLeft);

    console.log("cancel reservation" + this.props._id);
  };
  render() {


    let promptString;
    if (this.state.timeLeft <= 1) {
      promptString = `Reservation at ${this.props.LOCATION.NAME} will be cancelled. 
    Pickup time is less than 1 hour. A minimum charge will be levied`;
    } else {
      promptString = `Reservation at ${this.props.LOCATION.NAME} will be cancelled`;
    }
    let display
    if (this.props.VEHICLE !== null) {
      display = <div className="bannerCard">
        <div className="textPart">
          <img
            alt="cardimage"
            src={imageURL}
            style={{ height: "70px" }}
            className="cardImage"
          ></img>
          <div className="cardText">
            Pickup Location : <p>{this.props.LOCATION.NAME}</p>
            <p>{this.props.LOCATION.ADDRESS.STREET}</p>
            <p>{this.props.LOCATION.ADDRESS.PIN}</p>
          </div>
          <div className="cardText">
            Pick Up Time : <p>{this.props.PICKUP_TIME}</p>
          </div>
          <div className="cardText">
            Return Time : <p>{this.props.RETURN_TIME}</p>
          </div>
          <div className="cardText">
            Vehicle Details : <p>{this.props.VEHICLE.MAKE}</p>
            <p>{this.props.VEHICLE.MODEL}</p>
            <p>{this.props.VEHICLE.REGISTRATION_TAG}</p>
          </div>
        </div>
        <div className="cardText">
          Status : <p>{this.props.STATUS}</p>
        </div>
        <div className="buttonGroup">
          <div className="cardText">
            <CustomButton
              variant="primary"
              onClick={() => this.setState({ showModal1: true, showModal2: false })}
            >
              Cancel Reservation
        </CustomButton>
            <ReservationModal
              show={this.state.showModal1}
              content={{
                heading: "Cancel Reservation?",
                text: promptString,
              }}
              // confirmHandler={}
              onHide={() => {
                this.setState({ showModal1: false });
              }}
              as={this.cancelHandler}
            />
          </div>

          <div className="cardText">
            <CustomButton
              variant="primary"
              onClick={() => this.setState({ showModal2: true, showModal1: false })}
            >
              Return
        </CustomButton>
            <ReservationModal2
              show={this.state.showModal2}
              content={{
                heading: "Return Car?",
                text: `Return ${this.props.VEHICLE.MAKE} with Reg ID ${this.props.VEHICLE.REGISTRATION_TAG} at the location ${this.props.LOCATION.NAME}`,
              }}
              // confirmhandler={returnHandler}
              onHide={() => {
                this.setState({ showModal2: false });
              }}
              as={this.returnHandler}
            />
          </div>
        </div>
      </div>
    }
    return (
      <div>
        {display}

      </div>
    );
  }
}

export default BannerCard;
// const BannerCard = (props) => {


//   // let returnString = ;


//   console.log(props);



//   return (

//   );
// };

// export default BannerCard;
