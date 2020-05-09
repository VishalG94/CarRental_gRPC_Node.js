import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import "./createvehicle.css";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Container,
  CardImg,
} from "reactstrap";
import logo from "./googlemaps.jpg";

import axios from "axios";
import Constants from "../../Utils/Constants";

class Createvehicleform extends Component {
  constructor() {
    super();
    this.state = {
      allProjCards: [],
      alllocations: [],
      allcategory: [],
      make: "",
      model: "",
      category: "",
      year: "",
      rtag: "",
      mileage: "",
      lastservicedate: "",
      vehiclecondition: "",
      vehicletolocation: "",
      localstoragevehicleid: "",
      localstoragelocationidforvehicle: "",
    };
  }

  makeChangeHandler = (e) => {
    this.setState({
      make: e.target.value,
    });
  };
  modelChangeHandler = (e) => {
    this.setState({
      model: e.target.value,
    });
  };
  categoryChangeHandler = (e) => {
    this.setState({
      category: e.target.value,
    });
  };
  yearChangeHandler = (e) => {
    this.setState({
      year: e.target.value,
    });
  };
  rtagChangeHandler = (e) => {
    this.setState({
      rtag: e.target.value,
    });
  };

  mileageChangehandler = (e) => {
    this.setState({
      mileage: e.target.value,
    });
  };

  servicechangehandler = (e) => {
    this.setState({
      lastservicedate: e.target.value,
    });
  };

  conditionchangehandler = (e) => {
    this.setState(
      {
        vehiclecondition: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addvehicletolocationchangehandler = (e) => {
    this.setState(
      {
        vehicletolocation: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  componentDidMount() {
    axios
      .get(`${Constants.BACKEND_SERVER.URL}/locations`)
      .then((response) => {
        if (response.data != null) {
          console.log(response.data);
          var obj = response.data;
          console.log(obj.locations);
          var projectCards = [],
            item;
          //for (var index in obj.vehicles) {
          Object.keys(obj.locations).map((index) => {
            item = obj.locations[index];

            console.log(item["ADDRESS"].STREET);
            projectCards.push(
              <Card className="card">
                <CardHeader>
                  <b> Name: </b>
                  {item["NAME"]}
                </CardHeader>
              </Card>
            );
          });

          this.setState({
            allProjCards: projectCards,
          });

          this.setState({
            alllocations: response.data.locations,
          });
        }
      })

      .catch((error) => {
        console.log(error);
        this.setState({
          errMsg: "Error occured",
          successMsg: "",
        });
      });

    axios
      .get(`${Constants.BACKEND_SERVER.URL}/categories`)
      .then((response) => {
        if (response.data != null) {
          var obj = response.data;
          console.log(obj.categories);

          this.setState({
            allcategory: response.data.categories,
          });
        }
      })

      .catch((error) => {
        console.log(error);
        this.setState({
          errMsg: "Error occured",
          successMsg: "",
        });
      });
  }

  addVehicleHandler = () => {
    if (
      this.state.make === "" ||
      this.state.model === "" ||
      this.state.category === "" ||
      this.state.year === "" ||
      this.state.rtag === "" ||
      this.state.mileage === "" ||
      this.state.lastservicedate === "" ||
      this.state.vehiclecondition === "" ||
      this.state.vehicletolocation === ""
    ) {
      this.setState({
        errMsg: "Required fields are empty",
        successMsg: "",
      });
    } else {
      const data = {
        MAKE: this.state.make,
        MODEL: this.state.model,
        CATEGORY: this.state.category,
        YEAR: this.state.year,
        REGISTRATION_TAG: this.state.rtag,
        MILEAGE: this.state.mileage,
        LAST_SERVICE_DATE: this.state.lastservicedate,
        VEHICLE_CONDITION: this.state.vehiclecondition,
        LOCATION: this.state.vehicletolocation
      };

      axios
        .post(`${Constants.BACKEND_SERVER.URL}/vehicle`, data)
        .then((response) => {
          console.log("id for vehicle" + response.data._id);

          this.setState({
            errMsg: "",
            vehilceid: response.data._id,
            successMsg: "Successfully Added",
            localstoragevehicleid: response.data._id,
          });

          console.log(this.state);
          const data = {
            _id: this.state.vehicletolocation,
            VEHICLE: this.state.vehilceid,
          };
          axios
            .post(`${Constants.BACKEND_SERVER.URL}/vehiclelocation`, data)
            .then((response) => {
              console.log(response.data);
              console.log(
                "id for location of this vehicle" + response.data._id
              );
              this.setState({
                errMsg: "",
                vehilceid: response.data._id,
                successMsg: "Successfully Added",
                localstoragelocationidforvehicle: response.data._id,
                localstoragelocationnameforvehicle: response.data,
              });
              localStorage.setItem(
                this.state.localstoragevehicleid,
                this.state.localstoragelocationidforvehicle
              );

              console.log("Successfully added vehicle to loaction");
            });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            errMsg: "Error occured",
            successMsg: "",
          });
        });
    }
  };
  render() {
    return (
      <div>

        <div className='createOptions'>
          <h3> Add a vehicle </h3>
          <br />
          <FormGroup className='option'>
            <Label for="carname">Enter Car Make</Label>
            <Input
              type="text"
              // font-size="50px"
              name="carname"
              onChange={this.makeChangeHandler}
              id="carname"
              placeholder="Ex: Tesla"
              value={this.state.make}
              style={{ width: "350px" }}
            />
          </FormGroup>

          <div className='option'>
            <FormGroup className='option'>
              <Label for="carname">Enter Car Model</Label>
              <Input
                type="text"
                // font-size="50px"
                name="carname"
                onChange={this.modelChangeHandler}
                id="carname"
                placeholder="Ex: Model S"
                value={this.state.model}
                style={{ width: "350px" }}
              />
            </FormGroup>

          </div>

          <FormGroup className='option'>
            <Label for="carname">Enter manufacturing year</Label>
            <Input
              type="text"
              // font-size="50px"
              name="carname"
              onChange={this.yearChangeHandler}
              id="carname"
              placeholder="Ex:2019"
              value={this.state.year}
              style={{ width: "350px" }}
            />
          </FormGroup>



          <FormGroup className='option'>
            <Label for="carname">Enter vehicle Registration Tag </Label>
            <Input
              type="text"
              // font-size="50px"
              name="carname"
              onChange={this.rtagChangeHandler}
              id="carname"
              placeholder="Enter Registartion Tag"
              value={this.state.rtag}
              style={{ width: "350px" }}
            />
          </FormGroup>



          <FormGroup className='option'>
            <Label for="carname">Enter vehicle Mileage</Label>
            <Input
              type="text"
              // font-size="50px"
              name="carname"
              onChange={this.mileageChangehandler}
              id="carname"
              placeholder="Ex: 25"
              value={this.state.mileage}
              style={{ width: "350px" }}
            />
          </FormGroup>


          <FormGroup className='option'>
            <Label for="carname">
              Days since Last Service date
              </Label>
            <Input
              type="text"
              font-size="50px"
              name="carname"
              onChange={this.servicechangehandler}
              id="carname"
              placeholder="Ex:30"
              value={this.state.lastservicedate}
              style={{ width: "350px" }}
            />
          </FormGroup>
          <br></br>

          <FormGroup className='option'>
            <label for="addcategory">Select Category:</label>
            <select
              id="addvehicletolocation"
              onChange={this.categoryChangeHandler}
              style={{ width: "350px" }}
            >
              <option value={""}>--</option>
              {this.state.allcategory.map((option) => (
                <option value={option._id}>{option.CATEGORY_NAME}</option>
              ))}
            </select>
          </FormGroup>
          <br></br>

          <FormGroup className='option'>
            <label for="condition">Select Vehicle Condition:</label>
            <select
              id="condition"
              onChange={this.conditionchangehandler}
              style={{ width: "350px" }}
            >
              <option>--</option>
              <option value="good">Good</option>
              <option value="needs_Cleaning">Needs Cleaning</option>
              <option value="needs_Maintainance">Needs Maintainance</option>
            </select>
          </FormGroup>

          <br></br>
          <FormGroup className='option'>
            <label for="addvehicletolocation">
              Add Vehicle to this location:
            </label>
            <select
              id="addvehicletolocation"
              onChange={this.addvehicletolocationchangehandler}
              style={{ width: "350px" }}
            >
              <option value={""}>--</option>
              {this.state.alllocations.map((location) => (
                <option value={location._id}>{location.NAME}</option>
              ))}
            </select>
          </FormGroup>
          <br></br>

          <Button
            color="success"
            onClick={this.addVehicleHandler}
            style={{ width: "120px" }}
          // className="w-20 option"

          >
            {" "}
            Add Car{" "}
          </Button>
          <p className="text-danger text-center">{this.state.errMsg}</p>
          <p className="text-success text-center">{this.state.successMsg}</p>
          {/* <h4>Available Locations</h4> */}
          {/* <Container>{this.state.allProjCards}</Container> */}
          {/* <Container>
								{ this.state.allcategory }
							</Container> */}
        </div>
      </div >
    );
  }
}

class CreateVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = () => { };

  render() {
    return (
      <div >
        <Createvehicleform />

      </div>
    );
  }
}

export default CreateVehicle;
