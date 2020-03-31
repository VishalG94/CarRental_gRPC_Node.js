import React from "react";
import {
  auth,
  createUserProfileDocument
} from "../FirebaseUtils/FirebaseUtils";
import CustomInput from "../CustomInput/CustomInput";
import "./SignUp-style.css";
import { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user.updateProfile({ displayName: displayName }).then(() => {
        console.log("displayname updated");
      });

      const userdetails = {
        name: this.state.displayName,
        email: this.state.email,
        photoUrl: "",
        signedIn: "false"
      };
      console.log(userdetails);
      localStorage.setItem("userdetails", userdetails);
      localStorage.setItem("name", userdetails.name);
      localStorage.setItem("email", userdetails.email);
      localStorage.setItem("signedIn", userdetails.signedIn);

      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: ""
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
        <div className="signUpForm">
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <CustomInput
                type="text"
                label="Display Name"
                name="displayName"
                value={this.state.displayName}
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
            </div>
            <CustomButton type="submit">SignUp</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
