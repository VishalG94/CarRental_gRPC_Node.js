import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './createvehicle.css';
//import axios from 'axios';
//import Constants from '../../../utils/constants';

class Createvehicleform extends Component {

    constructor() {
        super();
        this.state = {
            carname: "",
            cartype: "",
            hourlyprice: "",
            hourlyrange: "",
            latereturnfee: "",
            imagefile: "",
        }
    }

    carnameChangeHandler = (e) => {
        this.setState({
            carname: e.target.value
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
    hourlyrangeChangeHandler = (e) => {
        this.setState({
            hourlyrange: e.target.value
        });
    }
    laternreturnfeeChangeHandler = (e) => {
        this.setState({
            latereturnfee: e.target.value
        });
    }
    
    onChangeFileUpload = (e) => {
        this.setState({
            selectedFile: e.target.value
        });
    }
    addVehicleHandler = () => {
        if (this.state.carname === "" || this.state.cartype === "" || this.state.hourlyprice === "" 
        || this.state.hourlyrange === ""|| this.state.latereturnfee === "") 
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        } else {

            let fd = new FormData();
            fd.append('name', this.state.carname)
            fd.append('cartype', this.state.cartype)
            fd.append('hourlyprice', this.state.hourlyprice)
            fd.append('hourlyrange', this.state.hourlyrange)
            fd.append('latereturnfree', this.state.latereturnfee)
            fd.append('file', this.state.imagefile)

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
                <h3> Add a vehicle </h3>
                <br>
                </br>
                <Row form >
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Car Name</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.carnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.carname } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="cartype">Enter Vehicle Type</Label>
                            <Input type="text" name="cartype" onChange={this.cartypeChangeHandler} id="cartype" placeholder="Enter car type"  value={ this.state.cartype } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                </Row>
                <FormGroup>
                    <Label for="hourlyprice">Set Hourly Price</Label>
                    <Input type="textarea" name="hourlyprice" onChange={this.detailedDesChangeHandler} id="detaildesc" placeholder="Set Hourly pricing"  value={ this.state.hourlyprice } />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="company">Set Hourly range</Label>
                    <Input type="text" name="company" onChange={this.hourlyrangeChangeHandler} id="company" placeholder="Set Hourly range"  value={ this.state.hourlyrange } />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="exampleAddress2">Late refurn fees</Label>
                    <Input type="textarea" name="text" onChange={this.laternreturnfeeChangeHandler} id="exampleText" placeholder="Enter amount for late return fee?"  value={ this.state.latereturnfee } />
                </FormGroup>
                <FormGroup row>
                <br></br>
                    <Label for="image" sm={2}>Add an image of car</Label>
                    <Col sm={10}>
                        <Input type="file" name="image" id="image" multiple="" onChange={this.onChangeFileUpload}  value={ this.state.selectedFile } />
                        <FormText color="muted">
                            Upload File of car
                </FormText>
                    </Col>
                </FormGroup>
                <br></br><br></br>
                <p className="text-danger text-center">{ this.state.errMsg }</p>
                <p className="text-success text-center">{ this.state.successMsg }</p>
                <Button color="danger" onClick={this.addVehicleHandler} className="w-100"> Add Car </Button>
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
                <div className="navDiv">
                </div>
                <div className="listDiv">
                    <div>
                        <div>
                            <Createvehicleform />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}




export default CreateVehicle;