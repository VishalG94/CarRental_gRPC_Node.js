import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import VehicleCard from "../Common/VehicleCard/VehicleCard"
import { Card, CardBody, CardHeader, CardText, CardTitle, Container, CardImg, Col, Row, } from 'reactstrap';
import logo1 from './suvimg.jpg'
import logo2 from './hatchback.jpg'
import logo3 from './luxury.png'
import logo4 from './sedan.jpg'
import axios from 'axios';
import Constants from '../../Utils/Constants'
import { Grid } from '@material-ui/core';

class Viewallcars extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProjCards: []
    }
  }


  componentDidMount() {

    axios.get(`${Constants.BACKEND_SERVER.URL}/vehicles`).then((response) => {

      if (response.data != null) {
        var obj = (response.data)
        console.log(obj.vehicles)
        var projectCards = [],
          item, logo
        //for (var index in obj.vehicles) {
        Object.keys(obj.vehicles).map((index) => {

          item = obj.vehicles[index]
          console.log(item['CATEGORY'])
          if (item['CATEGORY']['CATEGORY_NAME'] === "SUV") {
            logo = logo1;
          }
          else if (item['CATEGORY']['CATEGORY_NAME'] === "Luxury") {

            logo = logo3;
          }
          else if (item['CATEGORY']['CATEGORY_NAME'] === "Hatchback") {

            logo = logo2;
          }
          else if (item['CATEGORY']['CATEGORY_NAME'] === "Sedan") {
            logo = logo4;
          }
          else {
            logo = logo4;
          }
          localStorage.setItem(item['REGISTRATION_TAG'], item['_id']);


          projectCards.push(

            <a href={`/admin/viewallcars/view/${item['_id']}`} className="text-decoration-none text-dark">

              <Card className="card" style={{ width: '250px', height: '400px' }} >
                <img width='250px' height='166px' src={logo} alt="Card  cap" />
                <CardTitle><b>RTag: </b>{item['REGISTRATION_TAG']}</CardTitle>
                <CardBody>
                  <CardTitle><b>MAKE:</b> {item['MAKE']}</CardTitle>
                  <CardText><b>Model:</b> {item['MODEL']}</CardText>
                  <CardText><b>Category</b> {item['CATEGORY']['CATEGORY_NAME']}</CardText>
                  {/* <CardText><b>Late Fee</b> {item['LATE_FEE']}</CardText>
                      <CardText><b>Hourly Feee</b> {item['HOURLY_FEE']}</CardText> */}
                  <CardText><b>Year: </b> {item['YEAR']}</CardText>
                </CardBody>
                <Button href={`/admin/viewallcars/view/${item['_id']}`}>View </Button>
              </Card>

            </a>

          )
        })

        this.setState({
          allProjCards: projectCards
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
        <div class="option" style={{ marginLeft: '30%' }}>
          <Button color="danger" href="/admin/viewallcars" className="w-100"> Get all Vehicles</Button>
          <Button color="danger" href="/admin/viewalllocations" className="w-100"> Get all Locations</Button>
        </div>

        <div style={{ marginTop: "1%", marginLeft: '-10%' }}>
          <div>
            <div class="card-arrange">
              <Container>
                {this.state.allProjCards}
              </Container>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default Viewallcars;






