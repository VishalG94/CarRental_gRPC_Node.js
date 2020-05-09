import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import { Card, CardBody, CardHeader, CardText, CardTitle, Container, CardImg } from 'reactstrap';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import logo2 from './hatchback.jpg'
import logo from "./googlemaps.jpg"
import axios from 'axios';
import Constants from '../../Utils/Constants'

class Viewindividuallocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProjCards: [],
      allProjCards1: [],
      _id: "",
      car_id: "",
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

  deletevehiclefromloactionhandler = () => {
    var car_id = this.state.car_id;
    console.log(this.state.car_id)

    console.log(this.props.match.params.projectId)

    axios.delete(`${Constants.BACKEND_SERVER.URL}/vehicle/location?_id=${car_id}&location_id=${this.props.match.params.projectId}`).then((response) => {
      console.log(response);

      window.alert("Vehilce Removed From This Location ");
      window.location.reload(false);
      // window.location.href = "home";

    })


  }


  deletelocationhandler = () => {
    axios.delete(`${Constants.BACKEND_SERVER.URL}/location/?_id=${this.props.match.params.projectId}`).then((response) => {


      window.alert("Location Deleted")
      window.location.reload();
      window.location.href = ("/admin/viewalllocations")

    })


  }




  componentDidMount() {

    axios.get(`${Constants.BACKEND_SERVER.URL}/location/?_id=${this.props.match.params.projectId}`).then((response) => {
      if (response.data != null) {
        var item1, cards1 = []
        var car_id
        var item = (response.data)
        var count = 0
        var obj = response.data
        console.log(item)
        console.log(obj.VEHICLES)
        Object.keys(obj.VEHICLES).map((index) => {
          //count=count+1;
          item1 = obj.VEHICLES[index]
          car_id = item1['_id']
          cards1.push(







            <Card className="card" style={{ width: '250px', height: '400px' }} >
              <img width="250px" height="200px" src={logo2} alt="Card  cap" />
              <CardTitle><b>RTag: </b>{item1['REGISTRATION_TAG']}</CardTitle>
              <CardBody>
                <CardTitle><b>MAKE:</b> {item1['MAKE']}</CardTitle>
                <CardText><b>Model:</b> {item1['MODEL']}</CardText>
                {/* <CardText><b>Late Fee</b> {item['LATE_FEE']}</CardText>
                          <CardText><b>Hourly Feee</b> {item['HOURLY_FEE']}</CardText> */}
                <CardText><b>Year: </b> {item1['YEAR']}</CardText>
              </CardBody>
              <Button onClick={this.deletevehiclefromloactionhandler} >Delete Vehicle From Location</Button>
            </Card>


          )
        })


        this.setState({
          objectout: item,
          car_id: car_id
        })

        var cards = []




        cards.push(


          <Card className="card">

            <CardHeader style={{ width: '800px' }}><b>Location Name: </b>{item['NAME']}</CardHeader>
            <div className="option" style={{ width: '800px' }}>
              <img width="130px" height="130px" src={logo} alt="Card  cap" />
              <CardBody style={{ padding: '0', width: '150px' }} className="option">
                <div>
                  <CardTitle><b>State:</b> {item['ADDRESS'].STATE}</CardTitle>
                  <CardTitle><b>Street:</b> {item['ADDRESS'].STREET}</CardTitle>
                  <CardText><b>Country:</b> {item['ADDRESS'].COUNTRY}</CardText>
                  <CardText><b>Pin:</b> {item['ADDRESS'].PIN}</CardText>
                </div>
                <div>
                  <CardText><b>Latitude:</b> {item['ADDRESS'].LATITUDE}</CardText>
                  <CardText><b>Longitude:</b> {item['ADDRESS'].LONGITUDE}</CardText>

                  <CardText><b>Vehicles Available Now:</b> {item['CURRENT_CAPACITY']}</CardText>
                  <CardText><b>Total Vehicle limit:</b> {item['VEHICLE_CAPACITY']}</CardText>
                  <Button color="danger" onClick={this.deletelocationhandler} className="w-100">Delete</Button>

                </div>
              </CardBody>

            </div>

          </Card>



        )




        this.setState({
          allProjCards: cards,
          allProjCards1: cards1
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


  render() {
    return (
      <div>
        <div className="mainDiv">
          <div className="navDiv">
          </div>
          <div style={{ marginTop: "1%", marginLeft: "-3%" }}>
            <div>
              <div class="card-arrange" >
                <Container style={{ marginLeft: "15%" }}>
                  {this.state.allProjCards}
                </Container>
                <Container style={{ marginLeft: "5%" }}>
                  <h4>Vehicles in this Location</h4>
                  {this.state.allProjCards1}
                </Container>

              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Viewindividuallocation;






