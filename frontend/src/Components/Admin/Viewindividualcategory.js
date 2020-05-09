import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import VehicleCard from "../Common/VehicleCard/VehicleCard"
import { Card, CardBody, CardHeader, CardText, CardTitle, Container, CardImg } from 'reactstrap';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import logo1 from './cartoy.jpg'

import axios from 'axios';
import Constants from '../../Utils/Constants'
import { Grid } from '@material-ui/core';

class Viewindividualcategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProjCards: [],
      _id: "",
      objectout: [],
      hourlyfee: "",
      latefee: "",
      categoryname: "",
      categoryname1: "",

    }
  }

  namechangehandler = (e) => {
    this.setState({
      categoryname1: e.target.value
    });
  }
  hourlyfeechangehandler = (e) => {
    this.setState({
      hourlyfee: e.target.value
    });
  }
  latefeechangehandler = (e) => {
    this.setState({
      latefee: e.target.value
    });
  }


  editcategoryhandler = () => {



    console.log(this.state.objectout)
    if (this.state.hourlyfee === "" || this.state.latefee === "" || this.state.categoryname1 === "") {
      this.setState({
        errMsg: "Required fields are empty",
        successMsg: ""
      })
    } else {

      const data = {
        _id: this.props.match.params.projectId,
        CATEGORY_NAME: this.state.categoryname1,
        HOURLY_FEE: this.state.hourlyfee,
        LATE_FEE: this.state.latefee,

      }

      axios.put(`${Constants.BACKEND_SERVER.URL}/category`, data)
        .then((response) => {
          window.location.reload()
          console.log("Successfully changed", response)
          this.setState({
            name: "",
            successMsg: "Successfully changed"

          }, () => {
            window.location.reload(false);
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
    axios.delete(`${Constants.BACKEND_SERVER.URL}/category/?_id=${this.props.match.params.projectId}`).then((response) => {
      console.log(response)

      window.alert("Category Deleted")
      window.location.reload(false);
      window.location.href = "/admin/vehiclepricemanagement";

    })

  }



  componentDidMount() {

    axios.get(`${Constants.BACKEND_SERVER.URL}/category/?_id=${this.props.match.params.projectId}`).then((response) => {
      if (response.data != null) {
        var item = (response.data)
        console.log(item)
        this.setState({
          objectout: item
        })

        var cards = [], logo



        cards.push(


          <Card className="card">
            <CardImg top width="100%" src={logo1} alt="Card image cap" />
            <CardBody >

              <CardTitle><b>Category Name:</b> {item['CATEGORY_NAME']}</CardTitle>
              <CardText><b>Late Fee:</b> {item['LATE_FEE']}</CardText>
              <CardText><b>Hourly Feee</b> {item['HOURLY_FEE']}</CardText>

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


  render() {
    return (
      <div>
        <div className="mainDiv">
          <div className="navDiv">
          </div>
          <div style={{ marginTop: "1%", marginLeft: "17%" }}>
            <div>
              <div class="card-arrange" >
                <Container style={{ marginLeft: "13%" }}>
                  {this.state.allProjCards}
                </Container>
                <br></br>
                <Container>
                  <br></br>
                  <br></br>

                  <FormGroup className='option'>
                    <Label for="carname" >Change Category Name </Label>
                    <Input type="text" font-size="50px" name="carname" onChange={this.namechangehandler} id="carname" placeholder="Ex: SUV" value={this.state.categoryname1} style={{ width: "350px" }} />
                  </FormGroup>
                  <br></br>
                  <FormGroup className='option'>
                    <Label for="carname" >Change Hourly Price</Label>
                    <Input type="text" font-size="50px" name="carname" onChange={this.hourlyfeechangehandler} id="carname" placeholder="Ex: 32" value={this.state.hourlyfee} style={{ width: "350px" }} />
                  </FormGroup>
                  <br></br>
                  <FormGroup className='option'>
                    <Label for="carname" >Change Late Fees </Label>
                    <Input type="text" font-size="50px" name="carname" onChange={this.latefeechangehandler} id="carname" placeholder="Ex: 23" value={this.state.latefee} style={{ width: "350px" }} />
                  </FormGroup>
                  <br></br>

                  <FormGroup className='option' style={{ marginLeft: '-18%' }}>

                    <Button onClick={this.editcategoryhandler}>Edit </Button>
                    <Button onClick={this.deletecarhandler}>Delete </Button>
                  </FormGroup>

                  <p>{this.state.successMsg}</p>
                </Container>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Viewindividualcategory;






