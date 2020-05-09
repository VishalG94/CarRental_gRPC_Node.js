import React from "react";

import CustomInput from "../CustomInput/CustomInput";
import "./SignUp-style.css";
import { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import Constants from "../../../Utils/Constants";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dlNumber: "",
      dlState: "",
      street: "",
      state: "",
      country: "",
      pin: "",
      phone: "",
      userType: "USER",
    };
  }

  handleChange = (e) => {
    //  console.log(this.state);
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const userdetails = {
        NAME: this.state.userName,
        EMAIL: this.state.email,
        PASSWORD: this.state.password,
        DL_NUMBER: this.state.dlNumber,
        DL_STATE: this.state.dlState,
        PHONE: this.state.phone,
        USER_TYPE: this.state.userType,
        ADDRESS: {
          STREET: this.state.street,
          STATE: this.state.state,
          COUNTRY: this.state.country,
          PIN: this.state.pin,
        },
      };

      console.log(userdetails);

      axios
        .post(`${Constants.BACKEND_SERVER.URL}/user`, userdetails)
        .then((response) => {
          console.log(response);
          window.alert("SignUp successful! Please pay your membership price");
          this.props.history.push("membership");
        }).catch((err) => {
          window.alert("Invalid Details. Please Re-enter");

        });

      // this.setState({
      //   userName: "",
      //   email: "",
      //   password: "",
      //   confirmPassword: "",
      //   dlNumber: "",
      //   dlState: "",
      //   street: "",
      //   state: "",
      //   country: "",
      //   pin: "",
      //   phone: ""
      // });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="signUp">
        <h1>New User?</h1>
        <h2>Create an account </h2>
        <h5>   with Email and Password</h5>
        <Link to="/users/login" style={{ textDecoration: "none" }}>
          Have an account? SignIn!
        </Link>

        <div className="signUpForm">
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <CustomInput
                type="text"
                label="User Name"
                name="userName"
                value={this.state.userName}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="email"
                label="Email"
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="password"
                label="Password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="phone"
                label="Phone Number"
                name="phone"
                value={this.state.phone}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="text"
                label="Driver's License Number"
                name="dlNumber"
                value={this.state.dlNumber}
                handleChange={this.handleChange}
                required
              />
              {/* <CustomInput
                type="text"
                label="State of Issue"
                name="dlState"
                value={this.state.dlState}
                handleChange={this.handleChange}
                required
              /> */}
              <select id="dlstate" name="dlState" onChange={this.handleChange}>
                <option value="---">State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District of Columbia">
                  District of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Guam">Guam</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Northern Marianas Islands">
                  Northern Marianas Islands
                </option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Virgin Islands">Virgin Islands</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>

              <CustomInput
                type="text"
                label="Street Address"
                name="street"
                value={this.state.street}
                handleChange={this.handleChange}
                required
              />
              {/* <CustomInput
                type="text"
                label="State"
                name="state"
                value={this.state.state}
                handleChange={this.handleChange}
                required
              /> */}

              <select id="state" name="state" onChange={this.handleChange}>
                <option value="---">State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District of Columbia">
                  District of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Guam">Guam</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Northern Marianas Islands">
                  Northern Marianas Islands
                </option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Virgin Islands">Virgin Islands</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
              <CustomInput
                type="text"
                label="Country"
                name="country"
                value={this.state.country}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="text"
                label="Zip Code"
                name="pin"
                value={this.state.pin}
                handleChange={this.handleChange}
                required
              />
            </div>
            <CustomButton type="submit">SignUp</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
