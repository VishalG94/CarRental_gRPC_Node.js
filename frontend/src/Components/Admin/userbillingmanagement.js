import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './manageusers.css';


import AppBar from '@material-ui/core/AppBar';

import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo1 from "./billing.jpg"
import Sidenavbar from "./sidenavbar";

class Usersbillingmanagement extends Component {
  constructor() {
    super();
    this.state = {
        username: ""
    }

}

usernameChangeHandler = (e) => {
  this.setState({
      username: e.target.value
  });
}

getuserhandler = () => {
  if (this.state.username === "")
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        }
        else 
        {
            let fd = new FormData();
            fd.append('name', this.state.username)
            //axios.get(`${Constants.BACKEND_SERVER.URL}/admin/edituser`, fd)
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

correctbillinghandler =() => {
  //axios.post(`${Constants.BACKEND_SERVER.URL}/admin/edituser`, username)
  //.then(() => {
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
  render() {
    return (
      <div className="manageusers">
        <h1>Billing management</h1>
        
        <Grid>
        <Row form >
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter User Name</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.namechangehandler} id="carname" placeholder="Enter user Name" value={ this.state.username } style={{ width: "350px" }}/>
                        </FormGroup>
                        <Button onClick={this.getuserhandler}> Get Details</Button>
                        <img src={logo1} flex="1"/>
                    </Col>
    
                    
                <h1>User Details</h1>
                <h3>terminate Membership</h3>
                <Button onClick={this.correctbillinghandler}> Terminate</Button>
                </Row>
                </Grid>
      </div>
    );
  }
}

export default Usersbillingmanagement;
