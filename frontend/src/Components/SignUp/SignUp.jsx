import React from "react";
import {
  auth,
  createUserProfileDocument,
} from "../FirebaseUtils/FirebaseUtils";
import CustomInput from "../CustomInput/CustomInput";
import "./SignUp-style.css";
import { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import Constants from "../../Utils/Constants";
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
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, userName, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // const { user } = await auth.createUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await user.updateProfile({ displayName: displayName }).then(() => {
      //   console.log("displayname updated");
      // });

      const userdetails = {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        dlNumber: this.state.dlNumber,
        dlState: this.state.dlState,
        street: this.state.street,
        state: this.state.state,
        country: this.state.country,
        pin: this.state.pin,
      };

      console.log(userdetails);

      axios
        .post(`${Constants.BACKEND_SERVER}/user/newUser`, userdetails)
        .then((response) => {
          console.log(response.body);
          window.alert("SignUp successful! Please Login");
        });

      this.setState({
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
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <h1>New User?</h1>
        <h2>Create an account with Email and Password</h2>
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
                type="text"
                label="Driver's License Number"
                name="dlNumber"
                value={this.state.dlNumber}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="text"
                label="State of Issue"
                name="dlState"
                value={this.state.dlState}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="text"
                label="Street Address"
                name="street"
                value={this.state.street}
                handleChange={this.handleChange}
                required
              />
              <CustomInput
                type="text"
                label="State"
                name="state"
                value={this.state.state}
                handleChange={this.handleChange}
                required
              />
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
