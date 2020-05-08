import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import { Card, CardBody, CardHeader, CardText, CardTitle, Container,CardImg } from 'reactstrap';


import logo from "./googlemaps.jpg"
import axios from 'axios';
import Constants from '../../Utils/Constants'

class Viewindividualuser extends Component {

  constructor(props) {
      super(props);
      this.state = {
        allProjCards: [],
        _id:"",
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



// deletelocationhandler =() =>{
//   axios.delete(`${Constants.BACKEND_SERVER.URL}/address/?_id=${this.props.match.params.projectId}`).then((response) => {
//     console.log(response) 

//     window.alert("Location Deleted")
    
//   })

// }



 
  componentDidMount() {
        
        var id=this.props.match.params.projectId;
        
        var Email=localStorage.getItem(this.props.match.params.projectId)
       
        var Password=localStorage.getItem(Email)
        var body= {
          _id: id,
          email: Email,
          password: Password
        }
      
        axios.get(`${Constants.BACKEND_SERVER.URL}/userID`,body).then((response) => {
          if (response.data != null) {
           var item=(response.data)
              console.log(item)
              this.setState({
                objectout: item
              })
              
              var cards=[]
              

              
              cards.push(
                
                    
                <Card className="card">
                <CardImg top width="100%" src={logo} alt="Card image cap" />
                   <CardHeader><b>Street Name: </b>{item['STREET']}</CardHeader>
                   <CardBody>
                     <CardTitle><b>State:</b> {item['STATE']}</CardTitle>
                     <CardText><b>COuntry:</b> {item['COUNTRY']}</CardText>
                     <CardText><b>Pin:</b> {item['PIN']}</CardText>
                     <CardText><b>Pin:</b> {item['"LATITUDE']}</CardText>
                     <CardText><b>Pin:</b> {item['LONGITUDE']}</CardText>
                   </CardBody>
                   <Button onClick={this.deletelocationhandler} >Delete Location </Button>
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
                            
						</div>
					</div>
				</div>
			</div>
           
            </div>

      );
  }
}

export default Viewindividualuser;






