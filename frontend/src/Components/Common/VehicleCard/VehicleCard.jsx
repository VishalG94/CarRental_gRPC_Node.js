import React from "react";
import "./VehicleCard.styles.css";
import { useHistory } from "react-router-dom";
import Hatchback from "../../../Assets/Icons/Hatchback.svg";
import MidSize from "../../../Assets/Icons/Hatchback.svg";
import BigCar from "../../../Assets/Icons/Hatchback.svg";
import MiniVan from "../../../Assets/Icons/MiniVan.svg";


function VehicleCard(props) {
  let history = useHistory();
  console.log(props)
  const clickHandler = (e) => {
    console.log(props._id);
    localStorage.setItem("vehicleId", props._id);
    history.push("/users/reservations");
  };
  let IMAGE_URL

  if (props.CATEGORY.CATEGORY_NAME === "SUV") {
    IMAGE_URL = MiniVan;
  }
  else if (props.CATEGORY.CATEGORY_NAME === "Luxury") {

    IMAGE_URL = BigCar;
  }
  else if (props.CATEGORY.CATEGORY_NAME === "Hatchback") {

    IMAGE_URL = Hatchback;
  }
  else if (props.CATEGORY.CATEGORY_NAME === "Sedan") {
    IMAGE_URL = MidSize;
  }
  else {
    IMAGE_URL = MidSize;
  }



  return (
    <div className="vehicleCard" onClick={clickHandler}>
      <img alt="cardimage" src={IMAGE_URL} className="cardImage"></img>
      <div className="cardText">
        <h4>
          {props.MAKE} {props.MODEL}
        </h4>
        <p>{props.MILEAGE}</p>
      </div>
    </div>
  );
}

export default VehicleCard;
