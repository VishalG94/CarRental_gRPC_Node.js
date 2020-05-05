import React from "react";
import "./BannerCard-styles.css";
import imageURL from '../../../../Assets/Icons/Calendar.svg'
import CustomButton from "../../../Common/CustomButton/CustomButton";


const BannerCard = (props) => {
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
          <CustomButton>Cancel Reservation</CustomButton>
        </div>

        <div className="cardText">
          <CustomButton>Confirm Return Car</CustomButton>
        </div>
      </div>
    </div >
  );
};

export default BannerCard;
