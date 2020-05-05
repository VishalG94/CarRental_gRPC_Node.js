import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import VehicleCard from "../Common/VehicleCard/VehicleCard"
import { Card, CardBody, CardHeader, CardText, CardTitle, Container,CardImg } from 'reactstrap';
import logo from './googlemaps.jpg'
import axios from 'axios';
import Constants from '../../Utils/Constants'
import { Grid } from '@material-ui/core';

class Viewallcars extends Component {

  constructor(props) {
      super(props);
      this.state = {
        allProjCards: []
      }
  }

 
  componentDidMount() {
      
        axios.get(`${Constants.BACKEND_SERVER.URL}/locations`).then((response) => {
        
          if (response.data != null) {
           var obj=(response.data)
            console.log(obj.locations)
            var projectCards = [],
              item
            //for (var index in obj.vehicles) {
               Object.keys(obj.locations).map((index) =>
                 {
              item=obj.locations[index]
              
              console.log(item['ADDRESS'].STREET)
              projectCards.push(
                
                    
                  <Card className="card">
                 <CardImg top width="100%" src={logo} alt="Card image cap" />
                    <CardHeader><b>Loc Name: </b>{item['NAME']}</CardHeader>
                    <CardBody>
                    <CardTitle><b>State:</b> {item['ADDRESS'].STATE}</CardTitle>
                      <CardTitle><b>Street:</b> {item['ADDRESS'].STREET}</CardTitle>
                      <CardText><b>Country:</b> {item['ADDRESS'].COUNTRY}</CardText>
                      <CardText><b>Pin:</b> {item['ADDRESS'].PIN}</CardText>
                      
                    </CardBody>
                    <Button href={`/admin/viewalllocations/view/${item['_id']}`}>View </Button>
                  </Card>
                  
                  
                  
              )
            })
  
            this.setState({
              allProjCards: projectCards
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
            <Button color="danger" href="/admin/viewallcars" className="w-100"> Get all Vehicles</Button> 
            <Button color="danger" href="/admin/viewalllocations"className="w-100"> Get all Locations</Button>             <div className="mainDiv">
				<div className="navDiv">
				</div>
				<div style={{ marginTop: "1%" }}>
					<div>
						<div class="card-arrange">
							<Container>
								{ this.state.allProjCards }
							</Container>
						</div>
					</div>
				</div>
			</div>
           
            </div>

      );
  }
}

export default Viewallcars;






