import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import VehicleCard from "../Common/VehicleCard/VehicleCard"
import { Card, CardBody, CardHeader, CardText, CardTitle, Container,CardImg } from 'reactstrap';
import logo1 from './Usersicon.jpg'

import axios from 'axios';
import Constants from '../../Utils/Constants'
import { Grid } from '@material-ui/core';

class Usermanagement extends Component {

  constructor(props) {
      super(props);
      this.state = {
        allProjCards: [],
        _id:"",
      }
  }



  blockuserhandler= (e) => {
    this.setState({
        _id: e.target.value
    });
    axios.delete(`${Constants.BACKEND_SERVER.URL}/user?_id=${this.state._id}`).then((response) => {
      console.log(response) ;
  
      window.alert("User deleted From Database ");
  
      
    })

}
  
 
  componentDidMount() {
      
        axios.get(`${Constants.BACKEND_SERVER.URL}/users`).then((response) => {
        
          if (response.data != null) {
           var obj=(response.data)
            console.log(obj.users)
            var projectCards = [],
              item,logo
            //for (var index in obj.vehicles) {
               Object.keys(obj.users).map((index) =>
                 {
                  
              item=obj.users[index]
              
              localStorage.setItem(item['_id'], item['EMAIL']) ;
              localStorage.setItem(item['EMAIL'], item['PASSWORD']) ;
              
              projectCards.push(
                
                   
                  <Card className="card">
                 <CardImg top width="100%" src={logo1} alt="Card image cap" />
                    <CardHeader><b>Name: </b>{item['NAME']}</CardHeader>
                    <CardBody>
                    {/* <CardTitle><b>Id:</b> {item['_id']}</CardTitle> */}
                      <CardTitle><b>Phone:</b> {item['PHONE']}</CardTitle>
                      <CardText><b>Email:</b> {item['EMAIL']}</CardText>
                      {/* <CardText><b>Late Fee</b> {item['LATE_FEE']}</CardText>
                      <CardText><b>Hourly Feee</b> {item['HOURLY_FEE']}</CardText> */}
                      <CardText><b>User type: </b> {item['USER_TYPE']}</CardText> 
                    </CardBody>
                    {/* <Button value={item['_id']}onClick={this.blockuserhandler}>Delete User </Button> */}
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
       <div className="manageusers">
 <div>

 <div className="mainDiv">
<div className="navDiv">
</div>
<div style={{ marginTop: "1%" }}>
<div>
 <div class="card-arrange">
 <h1>Active Users</h1>
   <Container>
     { this.state.allProjCards }
   </Container>
 </div>
</div>
</div>
</div>

 </div>
        
        
                
      </div>
        
          

      );
  }
}

export default Usermanagement;



















// import React, { Component } from "react";
// import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
// import './manageusers.css';


// import Grid from '@material-ui/core/Grid';

// import logo1 from './Usersicon.jpg'

// class Usermanagement extends Component {
//   constructor() {
//     super();
//     this.state = {
//         username: ""
//     }

// }

// usernameChangeHandler = (e) => {
//   this.setState({
//       username: e.target.value
//   });
// }

// getuserhandler = () => {
//   if (this.state.username === "")
//         {
//             this.setState({
//                 errMsg: "Required fields are empty",
//                 successMsg: ""
//             })
//         }
//         else 
//         {
//             let fd = new FormData();
//             fd.append('name', this.state.username)
//             //axios.get(`${Constants.BACKEND_SERVER.URL}/admin/edituser`, fd)
//             // .then(() => {
//             //             this.setState({
//             //                 name: "",
//             //                 type: "",
//             //                 price: "",
//             //             })
//             //         })
//             //         .catch((error) => { 
//             //             console.log(error)
//             //             this.setState({
//             //                 errMsg: "Error occured",
//             //                 successMsg: ""
//             //             })
//             //         })
//         }

// }

// deleteuserhandler =() => {
//               //axios.post(`${Constants.BACKEND_SERVER.URL}/admin/edituser`, username)
//               //.then(() => {
//                 //             this.setState({
//                 //                 name: "",
//                 //                 type: "",
//                 //                 price: "",
//                 //             })
//                 //         })
//                 //         .catch((error) => { 
//                 //             console.log(error)
//                 //             this.setState({
//                 //                 errMsg: "Error occured",
//                 //                 successMsg: ""
//                 //             })
//                 //         })

// }
//   render() {
//     return (
//       <div className="manageusers">
        
//         <h1>User management</h1>
//         <Row form >
//                     <Col  >
//                         <FormGroup>
//                             <Label for="carname" >Enter User Name</Label>
//                             <Input type="text" font-size="50px" name="carname" onChange={this.usernameChangeHandler} id="carname" placeholder="Enter user Name" value={ this.state.username } style={{ width: "350px" }}/>
//                         </FormGroup>
//                         <Button onClick={this.getuserhandler}> Get Details</Button>
//                         <img src={logo1} flex="1"/>
//                     </Col>
                   
                    
//                 <h3>User Details will be displayed here</h3>
            
//                     <Button onClick={this.deleteuserhandler}> Delete User </Button>
//                 </Row>
                
//       </div>
//     );
//   }
// }

// export default Usermanagement;
