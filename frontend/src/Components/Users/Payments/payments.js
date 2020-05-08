import React from "react";

// import "./membership.styles.css";
import TextField from "@material-ui/core/TextField";
import "../../Common/SignUp/SignUp-style.css";
import { Component } from "react";
import CustomButton from "../../Common/CustomButton/CustomButton";
import axios from "axios";
import Constants from "../../../Utils/Constants";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

class payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardno: "",
      nameoncard: "",
      cardtype: "",
      expirymonth: "",
      expiryyear: "",
      // cvv: "",
    };
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
    e.preventDefault();

    const obj = {
      CARD_NUMBER: this.state.cardno,
      NAME_ON_CARD: this.state.nameoncard,
      CARD_TYPE: this.state.cardtype,
      EXP_MONTH: this.state.expirymonth,
      EXP_YEAR: this.state.expiryyear,
      _id: localStorage.getItem("userId"),
    };
    console.log(obj);

    axios.post(`${Constants.BACKEND_SERVER.URL}/card`, obj).then((response) => {
      console.log(response.body);
    });
    window.alert("Reservation successfull!");
    this.props.history.push("/users/home");
    // })

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
        <h2>Payment Amount: {localStorage.getItem("price")}</h2>
        <h1>Make payment</h1>

        <div className="membershipForm">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Card Number"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeCardNumber}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Name on Card"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeName}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Card Type"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeCardType}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Expiry Month"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeMonth}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Expiry Year"
                    placeholder="Please enter here"
                    multiline
                    variant="outlined"
                    onChange={this.changeyear}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            {/* <Link to="/memsuccess">
             <CustomButton type="submit">Start Memebership</CustomButton> 
             </Link> */}
            <CustomButton type="submit">Make Payment</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default payments;
