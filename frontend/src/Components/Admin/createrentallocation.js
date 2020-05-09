import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './createrental.css';
import axios from 'axios';
import Constants from '../../Utils/Constants'

class Createrentalform extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            STREET: "",
            STATE: "",
            COUNTRY: "",
            PIN: "",
            LATI: "",
            LONGI: "",

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

    noofvehiclesperlocationChangeHandler = (e) => {
        this.setState({
            count: e.target.value
        });
    }
    addLocationHandler = () => {
        if (this.state.name === "" || this.state.capacity === ""
            || this.state.count === "") {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        } else {
            const data = {
                NAME: this.state.name,
                ADDRESS: {
                    STREET: this.state.STREET,
                    STATE: this.state.STATE,
                    COUNTRY: this.state.COUNTRY,
                    PIN: this.state.PIN,
                    LATITUDE: this.state.LATI,
                    LONGITUDE: this.state.LONGI
                },

                CURRENT_CAPACITY: 0,
                VEHICLE_CAPACITY: this.state.count

            }
            console.log("Data is ", data)
            axios.post(`${Constants.BACKEND_SERVER.URL}/location`, data)
                .then((response) => {
                    console.log("Successful", response.data)
                    this.setState({

                        successMsg: "Sucesssfully added"
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
    render() {

        return (
            <div>
                <div className='createOptions'>
                    <h3> Add a New Location </h3>


                    <br>
                    </br>


                    <FormGroup className='option'>
                        <Label for="carname" >Set Location Name</Label>
                        <Input type="text" font-size="50px" name="carname" onChange={this.nameChangeHandler} id="carname" placeholder="Enter Location Name" value={this.state.name} style={{ width: "350px" }} />
                    </FormGroup>



                    <FormGroup className='option'>
                        <Label for="cartype">Enter the Street Name </Label>
                        <Input type="text" name="cartype" onChange={this.streettypeChangeHandler} id="cartype" placeholder="Enter address type" value={this.state.STREET} style={{ width: "350px" }} />
                    </FormGroup>



                    <FormGroup className='option'>
                        <Label for="cartype">Enter the State Name </Label>
                        <Input type="text" name="cartype" onChange={this.statetypeChangeHandler} id="cartype" placeholder="Enter address type" value={this.state.STATE} style={{ width: "350px" }} />
                    </FormGroup>



                    <FormGroup className='option'>
                        <Label for="cartype">Enter the Country Name </Label>
                        <Input type="text" name="cartype" onChange={this.countrytypeChangeHandler} id="cartype" placeholder="Enter address type" value={this.state.COUNTRY} style={{ width: "350px" }} />
                    </FormGroup>



                    <FormGroup className='option'>
                        <Label for="cartype">Enter the Pin </Label>
                        <Input type="text" name="cartype" onChange={this.pintypeChangeHandler} id="cartype" placeholder="Enter address type" value={this.state.PIN} style={{ width: "350px" }} />
                    </FormGroup>



                    <FormGroup className='option'>
                        <Label for="cartype">Enter the Latitude </Label>
                        <Input type="text" name="cartype" onChange={this.latitypeChangeHandler} id="cartype" placeholder="Enter address type" value={this.state.LATI} style={{ width: "350px" }} />
                    </FormGroup>



                    <FormGroup className='option'>
                        <Label for="cartype">Enter the Longitude </Label>
                        <Input type="text" name="cartype" onChange={this.longitypeChangeHandler} id="cartype" placeholder="Enter address type" value={this.state.LONGI} style={{ width: "350px" }} />
                    </FormGroup>




                    <FormGroup className='option'>
                        <Label for="company">Enter vehicles per location limit</Label>
                        <Input type="text" name="company" onChange={this.noofvehiclesperlocationChangeHandler} id="company" placeholder="Set vehicle count limit" value={this.state.count} style={{ width: "350px" }} />
                    </FormGroup>

                    <p className="text-danger text-center">{this.state.errMsg}</p>
                    <p className="text-success text-center">{this.state.successMsg}</p>
                    <Button color="success" style={{ width: "350px" }} onClick={this.addLocationHandler} > Add Location </Button>
                </div>
            </div>

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

            <div className="form">
                <Createrentalform />
            </div>


        );
    }
}




export default CreateRental;