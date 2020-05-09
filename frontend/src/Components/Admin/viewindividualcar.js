import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './viewindividualcar.css'
import VehicleCard from "../Common/VehicleCard/VehicleCard"
import { Card, CardBody, CardHeader, CardText, CardTitle, Container, CardImg } from 'reactstrap';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

import logo1 from './Suve.jpg'
import logo2 from './hatchback.jpg'
import logo3 from './luxury.png'
import logo4 from './sedan.jpg'
import logo5 from './cartoy.jpg'

import axios from 'axios';
import Constants from '../../Utils/Constants'
import { Grid } from '@material-ui/core';
import CustomButton from '../Common/CustomButton/CustomButton';

class Viewindividualcar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProjCards: [],
      _id: "",
      MAKE: "",
      MODEL: "",
      CATEGORY: "",
      YEAR: "",
      rtag: "",
      condition: "",
      lastservicedate: "",
      mileage: "",
      alllocations: [],
      vehicletolocation: "",
      vehiclepresentlocationname: "",
      objectout: []
    }
  }
  changertagHandler = (e) => {
    this.setState({
      rtag: e.target.value
    });
  }
  changemileageHandler = (e) => {
    this.setState({
      mileage: e.target.value
    });
  }
  changeconditionHandler = (e) => {
    this.setState({
      condition: e.target.value
    });
  }

  changelastservicedatehandler = (e) => {
    this.setState({
      lastservicedate: e.target.value
    });
  }

  vehicletolocationchangehandler = (e) => {
    this.setState({
      vehicletolocation: e.target.value
    }, () => {
      console.log(this.state.vehicletolocation)
    });
  }


  componentDidMount() {

    axios.get(`${Constants.BACKEND_SERVER.URL}/location/?_id=${localStorage.getItem(this.props.match.params.projectId)}`).then((response) => {
      console.log("Location name of which this is assigned to:", response.data.NAME)
      this.setState({
        vehiclepresentlocationname: response.data.NAME
      });


    })

    axios.get(`${Constants.BACKEND_SERVER.URL}/locations`).then((response) => {



      if (response.data != null) {
        console.log(response.data)
        var obj = (response.data)
        console.log(obj.locations)
        var projectCards = [],

          item
        //for (var index in obj.vehicles) {
        Object.keys(obj.locations).map((index) => {
          item = obj.locations[index]

          console.log(item['ADDRESS'].STREET)
          projectCards.push(
            <Card className="card">
              <CardHeader><b> Name: </b>{item['NAME']}</CardHeader>
            </Card>
          )

        })



        this.setState({
          alllocations: response.data.locations
        })
      }
    })


      .catch((error) => {
        console.log(error)
        this.setState({
          errMsg: "Error occured",
          successMsg: ""
        })
      })

    axios.get(`${Constants.BACKEND_SERVER.URL}/vehicle/?_id=${this.props.match.params.projectId}`).then((response) => {
      if (response.data != null) {
        var item = (response.data)
        console.log(item)
        this.setState({
          objectout: item
        })
        var cards = [], logo
        if (item['CATEGORY']['CATEGORY_NAME'] == "SUV") {
          logo = logo3;
        }
        else if (item['CATEGORY']['CATEGORY_NAME'] == "Luxury") {

          logo = logo1;
        }
        else if (item['CATEGORY']['CATEGORY_NAME'] == "Hatchback") {

          logo = logo2;
        }
        else if (item['CATEGORY']['CATEGORY_NAME'] == "Sedan") {
          logo = logo4;
        }
        else {
          logo = logo5;
        }


        cards.push(


          <Card className="card">
            <CardImg top width="100%" src={logo5} alt="Card image cap" />
            <CardHeader><b>RTag: </b>{item['REGISTRATION_TAG']}</CardHeader>
            <CardBody >

              <CardTitle><b>MAKE:</b> {item['MAKE']}</CardTitle>
              <CardText><b>Model:</b> {item['MODEL']}</CardText>
              <CardText><b>Category</b> {item['CATEGORY']['CATEGORY_NAME']}</CardText>
              <CardText><b>Hourly Feee</b> {item['CATEGORY']['HOURLY_FEE']}</CardText>
              <CardText><b>Year: </b> {item['YEAR']}</CardText>
              <CardText><b>Condition: </b> {item['VEHICLE_CONDITION']}</CardText>
              <CardText><b>Mileage: </b> {item['MILEAGE']}</CardText>

            </CardBody>

          </Card>
        )


        this.setState({
          allProjCards: cards
        })
      }
    })


      .catch((error) => {
        console.log(error)
        this.setState({
          errMsg: "Error occured",
          successMsg: ""
        })
      })
  }



  addvehicletolocationchangehandler = () => {
    console.log("This vehicle id is " + this.props.match.params.projectId)
    console.log("Location Attached to this is :" + localStorage.getItem(this.props.match.params.projectId))
    console.log("New Location to attach is:" + this.state.vehicletolocation)

    const data1 = {
      _id: this.props.match.params.projectId,
      current_location: localStorage.getItem(this.props.match.params.projectId),
      new_location: this.state.vehicletolocation,
    }

    axios.put(`${Constants.BACKEND_SERVER.URL}/reassignvehicle`, data1)
      .then((response) => {
        window.location.reload()
        console.log("Successfully changed", response)
        this.setState({
          name: "",
          successMsg1: "Successfully changed"

        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          errMsg: "Error occured",
          successMsg: ""
        })
      })


  }

  editvehicledetailshandler = () => {



    console.log(this.state.objectout)
    if (this.state.rtag === "" || this.state.mileage === "" || this.state.condition === "") {
      this.setState({
        errMsg: "Required fields are empty",
        successMsg: ""
      })
    } else {

      const data = {
        _id: this.state.objectout._id,
        MAKE: this.state.objectout.MAKE,
        MODEL: this.state.objectout.MODEL,
        CATEGORY: this.state.objectout.CATEGORY._id,
        YEAR: this.state.objectout.YEAR,
        MILEAGE: this.state.mileage,
        REGISTRATION_TAG: this.state.rtag,
        VEHICLE_CONDITION: this.state.condition,
        LAST_SERVICE_DATE: this.state.lastservicedate
      }

      axios.put(`${Constants.BACKEND_SERVER.URL}/vehicle`, data)
        .then((response) => {
          window.location.reload()
          console.log("Successfully changed", response)
          this.setState({
            name: "",
            successMsg: "Successfully changed"

          })
        })
        .catch((error) => {
          console.log(error)
          this.setState({
            errMsg: "Error occured",
            successMsg: ""
          })
        })


      //axios.post(`${Constants.BACKEND_SERVER.URL}/admin/editcar, fd)

      // 
    }

  }
  deletecarhandler = () => {
    axios.delete(`${Constants.BACKEND_SERVER.URL}/vehicle/?_id=${this.props.match.params.projectId}`).then((response) => {
      console.log(response)

      window.alert("Vehicle Deleted")
      window.location.href = ("/admin/viewallcars")

    })

  }









  render() {
    return (
      <div>
        <div className="mainDiv">
          <div className="navDiv">
          </div>
          <div style={{ marginTop: "1%", marginLeft: "15%" }}>
            <div classname='vehicleView'>
              {/* <Container> */}
              {this.state.allProjCards}
              {/* </Container> */}
              <div className="vehicleForm">
                <Container>
                  <h4>Edit Car details</h4>
                  <div></div>
                  <FormGroup className='option'>
                    <Label for="carname" >Change Car Registration tag</Label>
                    <Input type="text" font-size="50px" name="carname" onChange={this.changertagHandler} id="carname" placeholder="Enter car registration tag" value={this.state.rtag} style={{ width: "350px" }} />
                  </FormGroup>
                  <br></br>
                  <FormGroup className='option'>
                    <Label for="carname" >Change Car Mileage </Label>
                    <Input type="text" font-size="50px" name="carname" onChange={this.changemileageHandler} id="carname" placeholder="Enter car mileage" value={this.state.mileage} style={{ width: "350px" }} />
                  </FormGroup>
                  <br></br>
                  <FormGroup className='option'>
                    <label for="condition">Select Vehicle Condition:</label>
                    <select id="condition" onChange={this.changeconditionHandler} style={{ width: "350px" }}>
                      <option >--</option>
                      <option value="good">Good</option>
                      <option value="needs_Cleaning">Needs Cleaning</option>
                      <option value="needs_Maintainance">Needs Maintainance</option>
                    </select>
                  </FormGroup>
                  <br></br>
                  <FormGroup className='option'>
                    <Label for="carname" >Change Car last servicedate </Label>
                    <Input type="text" font-size="50px" name="carname" onChange={this.changelastservicedatehandler} id="carname" placeholder="Enter date" value={this.state.lastservicedate} style={{ width: "350px" }} />
                  </FormGroup>
                  <br></br>
                  <Button onClick={this.editvehicledetailshandler}>Edit </Button>
                  <Button onClick={this.deletecarhandler}>Delete </Button>
                  <p>{this.state.successMsg}</p>
                  <h4>Assign a different location</h4>
                  <br />

                  <FormGroup className='option'>
                    <label for="addvehicletolocation">Add Vehicle to this location:</label>
                    <select id="addvehicletolocation" onChange={this.vehicletolocationchangehandler} style={{ width: "350px" }}>
                      {this.state.alllocations.map(location => (

                        <option value={location._id}>
                          {location.NAME}
                        </option>

                      ))}
                    </select>
                  </FormGroup >

                  <CustomButton onClick={this.addvehicletolocationchangehandler}>Reassign Location </CustomButton>
                  <br />
                  <p>{this.state.successMsg1}</p>


                </Container>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Viewindividualcar;






