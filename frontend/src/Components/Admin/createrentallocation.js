import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './createvehicle.css';
//import axios from 'axios';
//import Constants from '../../../utils/constants';

class Createrentalform extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            address:"",
            capacity: "",
            noofvehiclesperlocation: "",
        }
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    addresstypeChangeHandler = (e) => {
        this.setState({
            address: e.target.value
        });
    }
   capacityChangeHandler = (e) => {
        this.setState({
            capacity: e.target.value
        });
    }
    noofvehiclesperlocationChangeHandler = (e) => {
        this.setState({
            hourlyrange: e.target.value
        });
    }
    addLocationHandler = () => {
        if (this.state.name === "" || this.state.address === "" || this.state.capacity === "" 
        || this.state.noofvehiclesperlocation === "") 
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        } else {

            let fd = new FormData();
            fd.append('name', this.state.name)
            fd.append('address', this.state.address)
            fd.append('capacity', this.state.capacity)
            fd.append('noofvehiclesperlocation', this.state.noofvehiclesperlocation)

            // const projectData = {
            //     managerId: localStorage.getItem('281UserId'),
            //     name: this.state.name,
            //     shortDescription: this.state.shortDes,
            //     detailedDescription: this.state.detDesc,
            //     companyName: this.state.
            //     compName,
            //     address: this.state.address,
            //     city: this.state.city,
            //     state: this.state.state,
            //     zip: this.state.zip,
            //     testCases: this.state.testCases,
            //     technologies: this.state.tech
            // }
            
            // axios.defaults.withCredentials = true;//very imp, sets credentials so that backend can load cookies
            const config = {
                headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'multipart/form-data'
                }
            };
             //axios.post(`${Constants.BACKEND_SERVER.URL}/manager/addProject`, fd, config)
            // // axios.post(`${Constants.BACKEND_SERVER.URL}/manager/addProject`, projectData)
            //     .then(() => {
            //         this.setState({
            //             name: "",
            //             shortDes: "",
            //             detDesc: "",
            //             compName: "",
            //             address: "",
            //             city: "",
            //             state: "",
            //             zip: "",
            //             testCases: "",
            //             tech: "",
            //             selectedFile: "",
            //             errMsg: "",
            //             successMsg: "Project added!"
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
    render () {

        return (
            <Form>
                <h3> Add a New Location </h3>
                <br>
                </br>
                <Row form >
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Location Name</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.nameChangeHandler} id="carname" placeholder="Enter Location Name" value={ this.state.carname } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter the complete address Type</Label>
                            <Input type="text" name="cartype" onChange={this.addresstypeChangeHandler} id="cartype" placeholder="Enter address type"  value={ this.state.cartype } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                </Row>
                <FormGroup>
                    <Label for="hourlyprice">Enter Vehicle capacity</Label>
                    <Input type="textarea" name="hourlyprice" onChange={this.capacityChangeHandler} id="detaildesc" placeholder="Set Hourly pricing"  value={ this.state.hourlyprice } />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="company">Enter number of vehicles per location limit</Label>
                    <Input type="text" name="company" onChange={this.noofvehiclesperlocationChangeHandler} id="company" placeholder="Set Hourly range"  value={ this.state.hourlyrange } />
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