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
import logo1 from './Usersicon.jpg'

class Usermanagement extends Component {
  state = {};
  render() {
    return (
      <div className="manageusers">
        <h1>User management</h1>
        <Grid>
        <Row form >
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter User Name</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.carnameChangeHandler} id="carname" placeholder="Enter car Name" value={ this.state.carname } style={{ width: "350px" }}/>
                        </FormGroup>
                        <Button> Get Details</Button>
                        <img src={logo1} flex="1"/>
                    </Col>
                   
                    <Grid item key={1} grid-gap= "5px"s={100} sm={25} md={2} >
                <Card >
                  <CardMedia
                    className={1}
                    image= {logo1}
                    title="Image title"
                  />
                  <CardContent className={1}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Details of the user
                    </Typography>
                    <Typography>
                      After pressing get details, these will be shown here
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/usermanagement" size="small" color="primary">
                      Delete User
                    </Button>
                    <Button size="small" color="primary">
                      
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
                    
                </Row>
                </Grid>
      </div>
    );
  }
}

export default Usermanagement;
