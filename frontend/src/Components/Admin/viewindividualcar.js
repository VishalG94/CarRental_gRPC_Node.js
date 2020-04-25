import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import VehicleCard from "../Common/VehicleCard/VehicleCard"
import { Card, CardBody, CardHeader, CardText, CardTitle, Container,CardImg } from 'reactstrap';
import { Col, Row,  FormGroup, Label, Input} from 'reactstrap';

import logo1 from './Suve.jpg'
import logo2 from './hatchback.jpg'
import logo3 from './luxury.png'
import logo4 from './sedan.jpg'
import axios from 'axios';
import Constants from '../../Utils/Constants'
import { Grid } from '@material-ui/core';

class Viewindividualcar extends Component {

  constructor(props) {
      super(props);
      this.state = {
        allProjCards: [],
        rtag: "",
        condition: "",
        lastservicedate:"",
        mileage: "",
      }
  }
  changertagHandler = (e) => {
    this.setState({
        rtag: e.target.value
    });
}
changemileageHandler = (e) => {
    this.setState({
        mileage: e.target.value
    });
}
changeconditionHandler = (e) => {
    this.setState({
        condition: e.target.value
    });
}

editvehicledetailshandler =() => {
    
   
    
    
    if (this.state.rtag === "" || this.state.mileage === "" || this.state.condition === "")
    {
        this.setState({
            errMsg: "Required fields are empty",
            successMsg: ""
        })
    } else 
    {
        const data={
            MILEAGE: this.state.mileage,
            REGISTRATION_TAG: this.state.rtag,
            VEHICLE_CONDITION: this.state.condition,
        }
        

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



 
  componentDidMount() {
      
        axios.get(`${Constants.BACKEND_SERVER.URL}/vehicle/?_id=${this.props.match.params.projectId}`).then((response) => {
          if (response.data != null) {
           var item=(response.data)
              console.log(item)
              var cards=[],logo
              if(item['CATEGORY']['CATEGORY_NAME']=="SUV"){
                logo=logo3;
              }
              else if(item['CATEGORY']['CATEGORY_NAME']=="Luxury"){
               
                logo=logo1;
              }
              else if(item['CATEGORY']['CATEGORY_NAME']=="Hatchback"){
               
                logo=logo2;
              }
              else if(item['CATEGORY']['CATEGORY_NAME']=="Sedan"){
                logo=logo4;
              }

              
              cards.push(
                
                    
                  <Card className="card">
                 <CardImg top width="100%" src={logo} alt="Card image cap" />
                    <CardHeader><b>RTag: </b>{item['REGISTRATION_TAG']}</CardHeader>
                    <CardBody >
                    
                      <CardTitle><b>MAKE:</b> {item['MAKE']}</CardTitle>
                      <CardText><b>Model:</b> {item['MODEL']}</CardText>
                       <CardText><b>Category</b> {item['CATEGORY']['CATEGORY_NAME']}</CardText> 
                      <CardText><b>Hourly Feee</b> {item['CATEGORY']['HOURLY_FEE']}</CardText>
                      <CardText><b>Year: </b> {item['YEAR']}</CardText> 
                      <CardText><b>Condition: </b> {item['VEHICLE_CONDITION']}</CardText> 
                      <CardText><b>Mileage: </b> {item['MILEAGE']}</CardText> 
                    </CardBody>
                    
                  </Card>    
              )
            
  
            this.setState({
              allProjCards: cards
            })
          }
        })
                  
            
              .catch((error) => { 
                  console.log(error)
                  this.setState({
                      errMsg: "Error occured",
                      successMsg: ""
                  })
             })
      }

  
  render () {
      return (
          <div>
            <div className="mainDiv">
				<div className="navDiv">
				</div>
				<div style={{ marginTop: "1%" , marginLeft:"15%"}}>
					<div>
						<div class="card-arrange" >
							<Container>
								{ this.state.allProjCards }
							</Container>
                            <br></br>
                            <Container>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            <FormGroup>
                          <Label for="carname" >Change Car Registration tag</Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.changertagHandler} id="carname" placeholder="Enter car registration tag" value={ this.state.rtag } style={{ width: "350px" }}/>
                      </FormGroup>
                      <br></br>
                      <FormGroup>
                          <Label for="carname" >Change Car Mileage </Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.changemileageHandler} id="carname" placeholder="Enter car mileage" value={ this.state.mileage } style={{ width: "350px" }}/>
                      </FormGroup>
                      <br></br>
                      <FormGroup>
                          <Label for="carname" >Change Car Condition </Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.changeconditionHandler} id="carname" placeholder="Enter car condition" value={ this.state.condition } style={{ width: "350px" }}/>
                      </FormGroup>
                      <br></br>
                      <Button onClick={this.editvehicledetailshandler}>Edit </Button> 
							</Container>
						</div>
					</div>
				</div>
			</div>
           
            </div>

      );
  }
}

export default Viewindividualcar;






