import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './createvehicle.css';
import Sidenavbar from './sidenavbar'
//import axios from 'axios';
//import Constants from '../../../utils/constants';

class Createvehicleform extends Component {

    constructor() {
        super();
        this.state = {
            make:"",
            model:"",
            year:"",
            rtag:"",
            
            carname: "",
            cartype: "",
            hourlyprice: "",
            hourlyrange: "",
            latereturnfee: "",
            addlocation:"",
            membershipcost:"",
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

    locationaddhandler= (e) => {
        this.setState({
            addlocation: e.target.value
        });
    }

    membershipcosthandler= (e) => {
        this.setState({
            membershipcost: e.target.value
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
        } else 
        {

            let fd = new FormData();
            fd.append('name', this.state.carname)
            fd.append('cartype', this.state.cartype)
            fd.append('hourlyprice', this.state.hourlyprice)
            fd.append('hourlyrange', this.state.hourlyrange)
            fd.append('latereturnfree', this.state.latereturnfee)
            fd.append('addlocation', this.state.addlocation)
            fd.append('file', this.state.imagefile)

            
            
            // axios.defaults.withCredentials = true;//very imp, sets credentials so that backend can load cookies
            const config = {
                headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'multipart/form-data'
                }
            };
             //axios.post(`${Constants.BACKEND_SERVER.URL}/admin/addcar`, fd, config)
            
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
    render () {

        return (
            <Form>
                <h3> Add a vehicle </h3>
                <Row form >
                <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Car Make</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.makechangehandler} id="carname" placeholder="Enter car Name" value={ this.state.make } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Car Model</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.modelchangehandler} id="carname" placeholder="Enter car Name" value={ this.state.model } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br> 
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Car Year of manufacturing</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.yearchangehandler} id="carname" placeholder="Enter car Name" value={ this.state.year } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>  
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter vehicle Registration Tag </Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.rtaghandler} id="carname" placeholder="Enter car Name" value={ this.state.rtag } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Vehicle Category</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.categoryhandler} id="carname" placeholder="Enter car Name" value={ this.state.category } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter vehicle Mileage</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.mileagechangehandler} id="carname" placeholder="Enter car Name" value={ this.state.mileage } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br> 
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter vehicle Last Service date</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.lastservicedatehandler} id="carname" placeholder="Enter car Name" value={ this.state.lastservicedate } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>   
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Vehicle Condition</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.conditionchangehandler} id="carname" placeholder="Enter car Name" value={ this.state.condition } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <br></br>   
                    <Button color="danger" onClick={this.addvehiclerdetailshandler} className="w-100"> Add Car </Button>






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
                    <Input type="textarea" name="hourlyprice" onChange={this.hourlypriceChangeHandler} id="detaildesc" placeholder="Set Hourly pricing"  value={ this.state.hourlyprice } />
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
                <FormGroup>
                    <Label for="exampleAddress2">Assign the location to add</Label>
                    <Input type="textarea" name="text" onChange={this.locationaddhandler} id="exampleText" placeholder="Link to what location"  value={ this.state.addlocation } />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">Assign the 6 month membership cost</Label>
                    <Input type="textarea" name="text" onChange={this.membershipcosthandler} id="exampleText" placeholder="Link to what location"  value={ this.state.membershipcost } />
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
                <Button color="danger" onClick={this.addVehicleHandler} className="w-100"> Set Price</Button>
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