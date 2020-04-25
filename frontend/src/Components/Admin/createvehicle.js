import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './createvehicle.css';

import axios from 'axios';
import Constants from '../../Utils/Constants'

class Createvehicleform extends Component {

    constructor() {
        super();
        this.state = {
            make:"",
            model:"",
            category:"",
            year:"",
            rtag:"",
            mileage:"",
            lastservicedate:"",
            vehiclecondition:"",
        }
    }

    makeChangeHandler = (e) => {
        this.setState({
            make: e.target.value
        });
    }
    modelChangeHandler = (e) => {
        this.setState({
            model: e.target.value
        });
    }
    categoryChangeHandler = (e) => {
        this.setState({
            category: e.target.value
        });
    }
    yearChangeHandler = (e) => {
        this.setState({
            year: e.target.value
        });
    }
    rtagChangeHandler = (e) => {
        this.setState({
            rtag: e.target.value
        });
    }

    mileageChangehandler= (e) => {
        this.setState({
            mileage: e.target.value
        });
    }

    servicechangehandler= (e) => {
        this.setState({
            lastservicedate: e.target.value
        });
    }
    
    conditionchangehandler= (e) => {
        this.setState({
            vehiclecondition: e.target.value
        });
    }
    addVehicleHandler = () => {
        if (this.state.make === "" || this.state.model === "" || this.state.category === "" 
        || this.state.year === ""|| this.state.rtag === "" || this.state.mileage === "" || 
        this.state.lastservicedate === "" || this.state.vehiclecondition === "") 
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        } else 
        {
          const data={
            MAKE: this.state.make,
            MODEL: this.state.model,
            CATEGORY:this.state.category,
            YEAR: this.state.year,
            REGISTRATION_TAG: this.state.rtag,
            MILEAGE: this.state.mileage,
            LAST_SERVICE_DATE: this.state.lastservicedate,
            VEHICLE_CONDITION: this.state.vehiclecondition,
          }

            
            
            
             axios.post(`${Constants.BACKEND_SERVER.URL}/vehicle`, data)
            
            .then(() => {
                    this.setState({
                        errMsg: "",
                        successMsg: "Successfully Added"
            
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

    }
    render () {

        return (
            <Form>
                <h3> Add a vehicle </h3>
                <Row form >
                <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Car Make</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.makeChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.make } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Car Model</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.modelChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.model } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br> 
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Car Year of manufacturing</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.yearChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.year } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>  
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter vehicle Registration Tag </Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.rtagChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.rtag } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col  >
                        <FormGroup>
                            <Label for="category" >Select Vehicle Category</Label>
                            <select id="category" onChange={this.categoryChangeHandler} style={{ width: "350px" }}> 
                            <option >--</option>
                            <option value="5e9e6adf78c6dc4174e673ff">Luxury</option>
                            <option value="5e9a51113b644d21cc6349a1">Sedan</option>
                            <option value="5e9a50f23b644d21cc6349a0">SUV</option>
                            <option value="5e9a512e3b644d21cc6349a2">Hatchback</option>
                        </select>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter vehicle Mileage</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.mileageChangehandler} id="carname" placeholder="Enter car Name" value={ this.state.mileage } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br> 
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter vehicle Last Service date</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.servicechangehandler} id="carname" placeholder="Enter car Name" value={ this.state.lastservicedate } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>   
                    <Col  >
                        <FormGroup>
                        <label for="condition">Select Vehicle Condition:</label>
                        <select id="condition" onChange={this.conditionchangehandler} style={{ width: "350px" }}> 
                        <option >--</option>
                        <option value="good">Good</option>
                        <option value="needs_Cleaning">Needs Cleaning</option>
                        <option value="needs_Maintainance">Needs Maintainance</option>
                        </select>
                        </FormGroup>
                    </Col>
                    <br></br>   
                    <Button color="danger" onClick={this.addVehicleHandler} className="w-100"> Add Car </Button> 
                    <p className="text-danger text-center">{ this.state.errMsg }</p>
                    <p className="text-success text-center">{ this.state.successMsg }</p> 
                </Row>            
            </Form>

        );
    }
}


class CreateVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = () => {

    }

    render() {
        return (
            <div className="mainDiv">
                
                <div className="listDiv">
                   
                            <Createvehicleform />
                        
                </div>
            </div>
        );
    }
}




export default CreateVehicle;