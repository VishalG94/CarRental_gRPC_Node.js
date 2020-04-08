import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignIn-style.css";
import Constants from "../../../Utils/Constants";

import { Link } from "react-router-dom";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    //e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const userdetails = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(`${Constants.BACKEND_SERVER}/login`, userdetails)
      .then((response) => {
        if (response.body.loggedIn === true) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("userId", response.body._id);
          localStorage.setItem("userName", response.body.userName);
          localStorage.setItem("userType", response.body.userType);
          this.setState({ email: "", password: "" });
          if (response.body.userType === "admin") {
            this.props.history.push("/admin/home");
          } else {
            this.props.history.push("/users/home");
          }
        } else {
          window.alert("Incorrect Email or Password");
        }
      });
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <h1>Have an Account?</h1>
        <h2>Login with Email and Password</h2>
        <div className="signinform">
          <form onSubmit={this.handleSubmit}>
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
            <div className="loginbutton">
              <CustomButton type="submit" label="submit" name="submit">
                SIGN IN
              </CustomButton>
            </div>
            <Link style={{ textDecoration: "none" }} to="/users/signup">
              Dont have an Account? SignUP!
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
