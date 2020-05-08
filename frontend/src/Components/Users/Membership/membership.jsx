import React from "react";

import "./membership.styles.css";
import TextField from "@material-ui/core/TextField";
import "../../Common/SignUp/SignUp-style.css";
import { Component } from "react";
import CustomButton from "../../Common/CustomButton/CustomButton";
import axios from "axios";
import Constants from "../../../Utils/Constants";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

class membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardno: "",
      nameoncard: "",
      cardtype: "",
      expirymonth: "",
      expiryyear: "",
      MEMBERSHIP_START: "",
      // cvv: "",
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      MEMBERSHIP_START: date + "/" + month + "/" + year + " ",
    });
  }
  handleChange = (m) => {
    const { value, name } = m.target;
    this.setState({ [name]: value });
  };
  //   handleSubmit = async (m) => {
  //     m.preventDefault();
  // //     const { password, confirmPassword } = this.state;

  //     if (password !== confirmPassword) {
  //       alert("Passwords don't match");
  //       return;
  //     }

  //  carddetails = {
  //   cardno: this.state.cardno,
  //   nameoncard: this.state.nameoncard,
  //   cardtype: this.state.cardtype,
  //   expirymonth: this.state.expirymonth,
  //   expiryyear: this.state.expiryyear,
  //   // cvv: this.state.cvv,
  // }

  // console.log(carddetails);

  handleSubmit = (e) => {
    const obj = {
      CARD_NUMBER: this.state.cardno,
      NAME_ON_CARD: this.state.nameoncard,
      CARD_TYPE: this.state.cardtype,
      EXP_MONTH: this.state.expirymonth,
      EXP_YEAR: this.state.expiryyear,
      // MEMBERSHIP_START:this.state.memstartdate,
    };
    e.preventDefault();
    //console.log(obj);

    axios.post(`${Constants.BACKEND_SERVER.URL}/card`, obj).then((response) => {
      console.log(response.body);
      //  this.props.history.push("/users/memsuccess");
      //user membership update
      axios
        .put(`${Constants.BACKEND_SERVER.URL}/userMembership`, obj)
        .then((response) => {
          console.log(response.body);
          // this.props.history.push("/users/memsuccess");
        });
      window.alert("Congratulations on your new membership!");
      this.props.history.push("/users/memsuccess");
    });

    // this.setState({
    //   cardNo: "",
    //   nameonCard: "",
    //   cardtype:"",
    //   expirymonth: "",
    //   expiryyear: "",
    //   // cvv: "",

    // });
  };

  changeCardNumber = (e) => {
    this.setState({ cardno: e.target.value });
  };

  changeName = (e) => {
    this.setState({ nameoncard: e.target.value });
  };

  changeCardType = (e) => {
    this.setState({ cardtype: e.target.value });
  };

  changeMonth = (e) => {
    this.setState({ expirymonth: e.target.value });
  };
  changeyear = (e) => {
    this.setState({ expiryyear: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Start your memberhsip today!</h1>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="membershipForm">
              <div className="option">
                <TextField
                  id="outlined-textarea"
                  label="Card Number"
                  placeholder="Please enter here"
                  multiline
                  variant="outlined"
                  onChange={this.changeCardNumber}
                  required
                />
                {/* </div>
              <div className="option"> */}
                <TextField
                  id="outlined-textarea"
                  label="Name on Card"
                  placeholder="Please enter here"
                  multiline
                  variant="outlined"
                  onChange={this.changeName}
                  required
                />
              </div>

              <div className="row2">
                <div className="option">
                  <TextField
                    id="outlined-textarea"
                    label="Card Type"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeCardType}
                    required
                  />
                </div>
                <div className="option">
                  <TextField
                    id="outlined-textarea"
                    label="Expiry Month"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeMonth}
                    required
                  />
                </div>
                <div className="option">
                  <TextField
                    id="outlined-textarea"
                    label="Expiry Year"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeyear}
                    required
                  />
                </div>
              </div>
            </div>
            {/* <Link to="/memsuccess">
             <CustomButton type="submit">Start Memebership</CustomButton> 
             </Link> */}
            <CustomButton type="submit">Start Memebership</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default membership;
