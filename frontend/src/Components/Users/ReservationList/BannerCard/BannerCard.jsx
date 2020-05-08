import React from "react";
import "./BannerCard-styles.css";
import imageURL from "../../../../Assets/Icons/Calendar.svg";
import CustomButton from "../../../Common/CustomButton/CustomButton";
import ReservationModal from "../ReservationModal/ReservationModal";
import axios from "axios";
import Constants from "../../../../Utils/Constants";
import ReservationModal2 from "../ReservationModal/ReservationModal2";

const BannerCard = (props) => {
  let today = new Date();
  let timeLeft =
    (new Date(props.PICKUP_TIME).getTime() - today.getTime()) /
    (1000 * 60 * 60);
  timeLeft = Math.ceil(timeLeft);

  let returnString = `Return ${props.VEHICLE.MAKE} with Reg ID ${props.VEHICLE.REGISTRATION_TAG} at the location ${props.LOCATION.NAME}`;

  let promptString;
  if (timeLeft <= 1) {
    promptString = `Reservation at ${props.LOCATION.NAME} will be cancelled. 
    Pickup time is less than 1 hour. A minimum charge will be levied`;
  } else {
    promptString = `Reservation at ${props.LOCATION.NAME} will be cancelled`;
  }

  console.log(props);
  let cancelHandler = () => {
    let req = {
      STATUS: "CANCELLED",
      USER_COMMENTS: "",
      VEHICLE_ID: props.VEHICLE._id,
      USER_ID: props.USER._id,
      _id: props._id,
    };
    axios
      .put(`${Constants.BACKEND_SERVER.URL}/reservation`, req)
      .then((res) => {
        if (timeLeft < 1) {
          localStorage.setItem("price");
          this.props.history.push("/payments");
        }
        console.log("Reservation cancelled" + res);
        props.CancelmodalShowHandler(false);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Reservation errored");
        props.CancelmodalShowHandler(false);
        window.location.reload(false);
      });
    console.log(timeLeft);

    console.log("cancel reservation" + props._id);
  };

  let returnHandler = () => {
    let req = {
      STATUS: "COMPLETED",
      USER_COMMENTS: "",
      VEHICLE_ID: props.VEHICLE._id,
      USER_ID: props.USER._id,
      _id: props._id,
    };
    axios
      .put(`${Constants.BACKEND_SERVER.URL}/reservation`, req)
      .then((res) => {
        console.log("Reservation Completed" + res);
        props.modalShowHandler(false);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Reservation errored");
        props.modalShowHandler(false);
        window.location.reload(false);
      });

    console.log("Return car id" + props.VEHICLE._id + " res id " + props._id);
  };
  return (
    <div className="bannerCard">
      <div className="textPart">
        <img
          alt="cardimage"
          src={imageURL}
          style={{ height: "70px" }}
          className="cardImage"
        ></img>
        <div className="cardText">
          Pickup Location : <p>{props.LOCATION.NAME}</p>
          <p>{props.LOCATION.ADDRESS.STREET}</p>
          <p>{props.LOCATION.ADDRESS.PIN}</p>
        </div>
        <div className="cardText">
          Pick Up Time : <p>{props.PICKUP_TIME}</p>
        </div>
        <div className="cardText">
          Return Time : <p>{props.RETURN_TIME}</p>
        </div>
        <div className="cardText">
          Vehicle Details : <p>{props.VEHICLE.MAKE}</p>
          <p>{props.VEHICLE.MODEL}</p>
          <p>{props.VEHICLE.REGISTRATION_TAG}</p>
        </div>
      </div>
      <div className="cardText">
        Status : <p>{props.STATUS}</p>
      </div>
      <div className="buttonGroup">
        <div className="cardText">
          <CustomButton
            variant="primary"
            onClick={() => props.CancelmodalShowHandler(true)}
          >
            Cancel Reservation
          </CustomButton>
          <ReservationModal
            show={props.CancelmodalShow}
            content={{
              heading: "Cancel Reservation?",
              text: promptString,
            }}
            // confirmHandler={}
            onHide={() => {
              props.CancelmodalShowHandler(false);
            }}
            as={cancelHandler}
          />
        </div>

        <div className="cardText">
          <CustomButton
            variant="primary"
            onClick={() => props.modalShowHandler(true)}
          >
            Return
          </CustomButton>
          <ReservationModal
            show={props.modalShow}
            content={{
              heading: "Return Car?",
              text: returnString,
            }}
            // confirmhandler={returnHandler}
            onHide={() => {
              props.modalShowHandler(false);
            }}
            as={returnHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
