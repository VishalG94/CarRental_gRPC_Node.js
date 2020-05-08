import React from "react";
import "./BannerCard-styles.css";
import imageURL from '../../../../Assets/Icons/Calendar.svg'
import CustomButton from "../../../Common/CustomButton/CustomButton";
import ReservationModal from '../ReservationModal/ReservationModal'
import axios from 'axios'

const BannerCard = (props) => {

  //let modalShow = false;

  let today = new Date();
  let timeLeft = ((new Date(props.PICKUP_TIME).getTime()) - (today.getTime())) / (1000 * 60 * 60);
  timeLeft = (Math.ceil(timeLeft))

  let promptString
  if (timeLeft <= 1) {
    promptString = `Reservation at ${props.LOCATION.NAME} will be cancelled. 
          Pickup time is less than 1 hour. A minimum charge will be levied`
  }
  else {
    promptString = `Reservation at ${props.LOCATION.NAME} will be cancelled`
  }
  // let setModalShow = (e) => {
  //   modalShow = e;
  // }



  // let show = false;
  //console.log(props)
  let cancelHandler = () => {

    console.log(timeLeft)
    console.log("cancel reservation" + props._id);
  }


  let returnHandler = () => {

    console.log("Retrun car id" + props.VEHICLE._id + " res id " + props._id)

  }
  return (
    <div className="bannerCard">
      <div className="textPart">
        <img alt="cardimage" src={imageURL} style={{ height: "70px" }} className="cardImage"></img>
        <div className="cardText">
          Pickup Location :  <p >{props.LOCATION.NAME}</p>
          <p >{props.LOCATION.ADDRESS.STREET}</p>
          <p >{props.LOCATION.ADDRESS.PIN}</p>
        </div>
        <div className="cardText">
          Pick Up Time :  <p >{props.PICKUP_TIME}</p>
        </div>
        <div className="cardText">

          Return Time : <p >{props.RETURN_TIME}</p>
        </div>
        <div className="cardText">

          Vehicle Details : <p >{props.VEHICLE.MAKE}</p>
          <p >{props.VEHICLE.MODEL}</p>
          <p >{props.VEHICLE.REGISTRATION_TAG}</p>
        </div>
      </div>
      <div className="buttonGroup">
        <div className="cardText">
          <CustomButton variant="primary" onClick={() => props.modalShowHandler(true)}>
            Cancel Reservation
          </CustomButton>
          <ReservationModal
            show={props.modalShow}
            content={{
              heading: "Cancel Reservation?",
              text: promptString,
              timeLeft: timeLeft
            }
            }
            onHide={() => {
              cancelHandler();
              props.modalShowHandler(false)
            }}

          />


        </div>
        {/* <div className="cardText">
          <CustomButton onClick={returnHandler}>Confirm Return Car</CustomButton>
        </div> */}
        <div className="cardText">
          <div className="cardText">
            <CustomButton variant="primary" onClick={() => props.modalShowHandler(true)}>
              Confirm Return
                </CustomButton>
            <ReservationModal
              content={{
                heading: "Cancel Reservation?",
                text: promptString,
                timeLeft: timeLeft
              }}
              show={props.modalShow}
              onHide={() => {
                returnHandler()
                props.modalShowHandler(false)
              }}
            />


          </div>
        </div>
      </div>
    </div >
  );
};

export default BannerCard;
