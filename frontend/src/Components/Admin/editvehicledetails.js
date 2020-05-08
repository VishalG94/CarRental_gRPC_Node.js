import React, { Component } from "react";
import { Col, Row, Button, FormGroup, Label, Input} from 'reactstrap';
import './manageusers.css';

import Grid from '@material-ui/core/Grid';

import logo1 from './carrepair.jpg'
import './editvehicledetails.css'




class Editvehicledetails extends Component {

    constructor() {
        super();
        this.state = {
            _id:"",
        MAKE:"",
        MODEL:"",
        CATEGORY:"",
        YEAR:"",
        rtag: "",
        condition: "",
        lastservicedate:"",
        mileage: "",

        }
    }
    carnameChangeHandler = (e) => {
        this.setState({
            carname: e.target.value
        });
    }

    changecarnameChangeHandler = (e) => {
        this.setState({
            changecarname: e.target.value
        });
    }
    cartypeChangeHandler = (e) => {
        this.setState({
            cartype: e.target.value
        });
    }
    hourlypriceChangeHandler = (e) => {
        this.setState({
            hourlyprice: e.target.value
        });
    }

    getvehiclehandler = () =>{
        if (this.state.carname === "")
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        }
        else 
        {
            let fd = new FormData();
            fd.append('name', this.state.carname)
            //axios.get(`${Constants.BACKEND_SERVER.URL}/admin/editcar`, fd)
            // .then(() => {
            //             this.setState({
            //                 name: "",
            //                 type: "",
            //                 price: "",
            //             })
            //         })
            //         .catch((error) => { 
            //             console.log(error)
            //             this.setState({
            //                 errMsg: "Error occured",
            //                 successMsg: ""
            //             })
            //         })
            }
        
    }

    editvehicledetailshandler =() => {
        if (this.state.carname === "" || this.state.cartype === "" || this.state.hourlyprice === "")
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        } else 
        {
            let fd = new FormData();
            fd.append('name', this.state.changecarname)
            fd.append('cartype', this.state.cartype)
            fd.append('hourlyprice', this.state.hourlyprice)

            //axios.post(`${Constants.BACKEND_SERVER.URL}/admin/editcar`, fd)
            
            // .then(() => {
            //         this.setState({
            //             name: "",
            
            //         })
            //     })
            //     .catch((error) => { 
            //         console.log(error)
            //         this.setState({
            //             errMsg: "Error occured",
            //             successMsg: ""
            //         })
            //     })
        }   

    }
  render() {
    return (
      
      
      <div className="manageusers">
      <h1>Edit Page</h1>
      <Col  >
                      <FormGroup>
                          <Label for="carname" >Enter Car Name to get Details</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.carnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.carname } style={{ width: "350px" }}/>
                      </FormGroup>
                      <Button onClick={this.getvehiclehandler}>Get Details</Button>
                      <img src={logo1} flex="1"/>
                  </Col>
                   <h3> Details of the Car
                    After pressing get details, these will be shown here
                    </h3>
                   
                      
      <Grid>
      <Row form >
                  <Col  >
                      <FormGroup>
                          <Label for="carname" >Change Car Name</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.changecarnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.changecarname } style={{ width: "350px" }}/>
                      </FormGroup>
                      
                      
                  </Col>
                  <Col  >
                      <FormGroup>
                          <Label for="carname" >Change Car Type</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.cartypeChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.cartype } style={{ width: "350px" }}/>
                      </FormGroup>
                      
                      
                  </Col>
                  <Col  >
                      <FormGroup>
                          <Label for="carname" >Change Car Price</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.hourlypriceChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.hourlyprice} style={{ width: "350px" }}/>
                      </FormGroup>
                      <Button onClick={this.editvehicledetailshandler}>Apply changes</Button>
                      
                  </Col>
                  
                 
                  <Grid item key={1} grid-gap= "5px"s={100} sm={25} md={2} >
              
            </Grid>
                  
              </Row>
              </Grid>
    </div>
    
    );
  }
}

export default Editvehicledetails;
