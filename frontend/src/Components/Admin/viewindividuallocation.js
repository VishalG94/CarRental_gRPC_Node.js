import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import { Card, CardBody, CardHeader, CardText, CardTitle, Container,CardImg } from 'reactstrap';
import { Col, Row,  FormGroup, Label, Input} from 'reactstrap';
import logo2 from './hatchback.jpg'
import logo from "./googlemaps.jpg"
import axios from 'axios';
import Constants from '../../Utils/Constants'

class Viewindividuallocation extends Component {

  constructor(props) {
      super(props);
      this.state = {
        allProjCards: [],
        allProjCards1:[],
        _id:"",
        car_id:"",
        objectout:[]
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

changelastservicedatehandler = (e) => {
  this.setState({
      lastservicedate: e.target.value
  });
}

deletevehiclefromloactionhandler =() =>{
  var car_id=this.state.car_id;
  console.log(this.state.car_id)
  
  console.log(this.props.match.params.projectId) 

  axios.delete(`${Constants.BACKEND_SERVER.URL}/vehicle/location?_id=${car_id}&location_id=${this.props.match.params.projectId}`).then((response) => {
    console.log(response) ;

    window.alert("Vehilce Removed From This Location ");
    window.location.reload();

    
  })


}


deletelocationhandler =() =>{
  axios.delete(`${Constants.BACKEND_SERVER.URL}/location/?_id=${this.props.match.params.projectId}`).then((response) => {
    

    window.alert("Location Deleted")
    window.location.reload();
    
  })
  

}



 
  componentDidMount() {
  
        axios.get(`${Constants.BACKEND_SERVER.URL}/location/?_id=${this.props.match.params.projectId}`).then((response) => {  
          if (response.data != null) {
            var item1,cards1=[]
            var car_id
           var item=(response.data)
           var count=0
           var obj=response.data
              console.log(item)
              console.log(obj.VEHICLES)
              Object.keys(obj.VEHICLES).map((index) =>
                 {
                   //count=count+1;
                  item1=obj.VEHICLES[index]
                  car_id=item1['_id']
                  cards1.push(
                     
                        
                      <Card className="card">
                      <CardImg top width="100%" src={logo2} alt="Card image cap" />                       
                       <CardHeader><b>RTag: </b>{item1['REGISTRATION_TAG']}</CardHeader>
                        <CardBody>
                        
                          <CardTitle><b>MAKE:</b> {item1['MAKE']}</CardTitle>
                          <CardText><b>Model:</b> {item1['MODEL']}</CardText>
                          {/* <CardText><b>Late Fee</b> {item['LATE_FEE']}</CardText>
                          <CardText><b>Hourly Feee</b> {item['HOURLY_FEE']}</CardText> */}
                          <CardText><b>Year: </b> {item1['YEAR']}</CardText> 
                          <Button onClick={this.deletevehiclefromloactionhandler} >Delete Vehicle From Location</Button>

                        </CardBody>
                        
                      </Card>
                      
                    
 )})

                 
              this.setState({
                objectout: item,
                car_id:car_id
              })
              
              var cards=[]
              
              

              
              cards.push(
                
                    
                <Card className="card">
                <CardImg top width="100%" src={logo} alt="Card image cap" />
                <CardHeader><b>Location Name: </b>{item['NAME']}</CardHeader>
                   <CardHeader><b>Street Name: </b>{item['ADDRESS'].STREET}</CardHeader>
                   <CardBody>
                     <CardTitle><b>State:</b> {item['ADDRESS'].STATE}</CardTitle>
                     <CardText><b>Country:</b> {item['ADDRESS'].COUNTRY}</CardText>
                     <CardText><b>Pin:</b> {item['ADDRESS'].PIN}</CardText>
                     <CardText><b>Pin:</b> {item['ADDRESS'].LATITUDE}</CardText>
                     <CardText><b>Pin:</b> {item['ADDRESS'].LONGITUDE}</CardText>

                     <CardText><b>Vehicles Available Now:</b> {item['CURRENT_CAPACITY']}</CardText>
                     <CardText><b>Total Vehicle limit:</b> {item['VEHICLE_CAPACITY']}</CardText>


                   </CardBody>
                   <Button onClick={this.deletelocationhandler} >Delete Location </Button>
                 </Card> 
              )

              
            
  
            this.setState({
              allProjCards: cards,
              allProjCards1:cards1
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
              <Container>
                <h4>Vehicles in this Location</h4>
								{ this.state.allProjCards1 }
							</Container>
                            
						</div>
					</div>
				</div>
			</div>
           
            </div>

      );
  }
}

export default Viewindividuallocation;






