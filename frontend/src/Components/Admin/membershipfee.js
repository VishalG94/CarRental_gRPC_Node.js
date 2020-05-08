import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './viewallcars.css'
import {  Container } from 'reactstrap';
import {  FormGroup, Label, Input, CardImg} from 'reactstrap';
import logo1 from './membership.svg'

import axios from 'axios';
import Constants from '../../Utils/Constants'

class Membership extends Component {

  constructor(props) {
      super(props);
      this.state = {
          currentprice:"",
      membershipfee:"",
      
      }
  }

  membershipricehandler = (e) => {
    this.setState({
        membershipfee: e.target.value
    });

    
}
  
componentDidMount =() => {

    axios.get(`${Constants.BACKEND_SERVER.URL}/membership`).then((response) => {
        
        if (response.data != null) {
            this.setState({
                currentprice: response.data.MEMBERSHIP_FEE

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


setmembershippricehandler =() => {

    if(this.state.membershipfee==="")
    {
        this.setState({
            errormsg: "Required fields are empty"
        });
    }
    else {
        const data={
            _id:"",
            MEMBERSHIP_FEE:this.state.membershipfee
        }
    
        axios.put(`${Constants.BACKEND_SERVER.URL}/membership`,data).then((response) => {
            
            if (response.data != null) {
                this.setState({
                    currentprice: response.data.MEMBERSHIP_FEE
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
      window.location.reload()
    }

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
                            {}
                                Current Price: {this.state.currentprice} $/6month
                            </Container>
                            <Container>
                            <CardImg top width="50%" src={logo1} alt="Card image cap" />
                                <br></br>
                                <br></br>
                                
                                <FormGroup>
                          <Label for="carname" >Set Membership Price  </Label>
                          <Input type="text" font-size="50px" name="carname" onChange={this.membershipricehandler} id="carname" placeholder="Ex: 30 $" value={ this.state.membershipfee } style={{ width: "350px" }}/>
                      </FormGroup>
                      <br></br>
                            
                      <br></br>
                      <Button onClick={this.setmembershippricehandler}>Set </Button> 
                      <p>{this.state.successMsg}</p>
                      <p>{this.state.errormsg}</p>
							</Container>
                            
						</div>
					</div>
				</div>
			</div>
           
            </div>

      );
  }
}

export default Membership;






