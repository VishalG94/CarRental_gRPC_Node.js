import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './manageusers.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'


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
import logo1 from './carrepair.jpg'




class Editvehicledetails extends Component {
  state = {};
  render() {
    return (
      <div>
      
      <div className="manageusers">
      <h1>Edit Page</h1>
      <Col  >
                      <FormGroup>
                          <Label for="carname" >Enter Car Name to get Details</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.carnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.carname } style={{ width: "350px" }}/>
                      </FormGroup>
                      <Button>Get Details</Button>
                      <img src={logo1} flex="1"/>
                  </Col>
      <Card style={{ width: '18rem', height:"20rem",  margin:"20" }}>
                <CardMedia 
                  title="Image title"
                  image={logo1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Details of the Car
                  </Typography>
                  <Typography>
                    After pressing get details, these will be shown here
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="/editall" size="small" color="primary">
                    Delete Car
                  </Button>
                </CardActions>
              </Card>
      
      <Grid>
      <Row form >
                  <Col  >
                      <FormGroup>
                          <Label for="carname" >Change Car Name</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.carnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.carname } style={{ width: "350px" }}/>
                      </FormGroup>
                      <Button>Apply changes</Button>
                      
                  </Col>
                  <Col  >
                      <FormGroup>
                          <Label for="carname" >Change Car Type</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.carnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.carname } style={{ width: "350px" }}/>
                      </FormGroup>
                      <Button>Apply changes</Button>
                      
                  </Col>
                  <Col  >
                      <FormGroup>
                          <Label for="carname" >Change Car Price</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.carnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.carname } style={{ width: "350px" }}/>
                      </FormGroup>
                      <Button>Apply changes</Button>
                      
                  </Col>
                  
                 
                  <Grid item key={1} grid-gap= "5px"s={100} sm={25} md={2} >
              
            </Grid>
                  
              </Row>
              </Grid>
    </div>
    </div>
    );
  }
}

export default Editvehicledetails;
