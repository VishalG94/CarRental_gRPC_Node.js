import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './createvehicle.css';
import axios from 'axios';
import Constants from '../../Utils/Constants'

class Createrentalform extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            STREET:"",
            STATE:"",
            COUNTRY:"",
            PIN:"",
            LATI:"",
            LONGI:"",
            capacity: "",
            count: "",
        }
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    streettypeChangeHandler = (e) => {
        this.setState({
            STREET: e.target.value
        });
    }
    statetypeChangeHandler = (e) => {
        this.setState({
            STATE: e.target.value
       
        });
    }
    countrytypeChangeHandler = (e) => {
        this.setState({
            COUNTRY: e.target.value
        });
    }
    pintypeChangeHandler = (e) => {
        this.setState({
            PIN: e.target.value
        });
    }
    latitypeChangeHandler = (e) => {
        this.setState({
            LATI: e.target.value
        });
    }
    longitypeChangeHandler = (e) => {
        this.setState({
            LONGI: e.target.value
        });
    }
   capacityChangeHandler = (e) => {
        this.setState({
            capacity: e.target.value
        });
    }
    noofvehiclesperlocationChangeHandler = (e) => {
        this.setState({
            count: e.target.value
        });
    }
    addLocationHandler = () => {
        if (this.state.name === ""  || this.state.capacity === "" 
        || this.state.count === "") 
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        } else {
           const data={
            NAME:this.state.name,
            ADDRESS:{
               STREET:this.state.STREET,
               STATE: this.state.STATE,
               COUNTRY: this.state.COUNTRY,
               PIN:this.state.PIN,
               LATITUDE:this.state.LATI,
               LONGITUDE:this.state.LONGI
             },

             CURRENT_CAPACITY: this.state.capacity,
             VEHICLE_CAPACITY:this.state.count

           }
             console.log("Data is ",data)
            axios.post(`${Constants.BACKEND_SERVER.URL}/location`, data)
                .then(() => {
                    this.setState({
                        
                        successMsg: "Sucesssfully added"
                    })
                    console.log("Successful",Response)
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
                <h3> Add a New Location </h3>
               
    
                <br>
                </br>
                <Row form >
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Set Location Name</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.nameChangeHandler} id="carname" placeholder="Enter Location Name" value={ this.state.name } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter the Street Name </Label>
                            <Input type="text" name="cartype" onChange={this.streettypeChangeHandler} id="cartype" placeholder="Enter address type"  value={ this.state.STREET } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter the State Name </Label>
                            <Input type="text" name="cartype" onChange={this.statetypeChangeHandler} id="cartype" placeholder="Enter address type"  value={ this.state.STATE } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter the Country Name </Label>
                            <Input type="text" name="cartype" onChange={this.countrytypeChangeHandler} id="cartype" placeholder="Enter address type"  value={ this.state.COUNTRY } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter the Pin </Label>
                            <Input type="text" name="cartype" onChange={this.pintypeChangeHandler} id="cartype" placeholder="Enter address type"  value={ this.state.PIN } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter the Latitude </Label>
                            <Input type="text" name="cartype" onChange={this.latitypeChangeHandler} id="cartype" placeholder="Enter address type"  value={ this.state.LATI } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter the Longitude </Label>
                            <Input type="text" name="cartype" onChange={this.longitypeChangeHandler} id="cartype" placeholder="Enter address type"  value={ this.state.LONGI } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                </Row>
                <FormGroup>
                    <Label for="hourlyprice">Enter Vehicle capacity</Label>
                    <Input type="textarea" name="hourlyprice" onChange={this.capacityChangeHandler} id="detaildesc" placeholder="Set Vehicle Capacity"  value={ this.state.capacity } />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="company">Enter number of vehicles per location limit</Label>
                    <Input type="text" name="company" onChange={this.noofvehiclesperlocationChangeHandler} id="company" placeholder="Set vehicle count limit"  value={ this.state.count } />
                </FormGroup>
                
                <br></br><br></br>
                <p className="text-danger text-center">{ this.state.errMsg }</p>
                <p className="text-success text-center">{ this.state.successMsg }</p>
                <Button color="danger" onClick={this.addLocationHandler} className="w-100"> Add Location </Button>
            </Form>

        );
    }
}


class CreateRental extends Component {
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
                <div className="navDiv">
                </div>
                <div className="listDiv">
                    <div>
                        <div>
                            <Createrentalform />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}




export default CreateRental;