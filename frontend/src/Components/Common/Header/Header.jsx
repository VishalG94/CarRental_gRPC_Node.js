import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
import { Component } from "react";
import { withRouter } from "react-router-dom";

import logo from "../../../Assets/Icons/Logo.svg";

class Header extends Component {
  // state = {
  //   userName: "",
  //   home: "/",
  // };

  // onSignout = (e) => {
  //   // e.preventDefault();
  //   this.setState({ loggedIn: !this.state.loggedIn, userName: "", home: "/" });

  //   localStorage.clear("loggedIn");
  //   localStorage.clear("userName");
  //   localStorage.clear("userType");
  //   localStorage.clear("vehicleId");
  //   localStorage.clear("locationId");
  //   this.props.history.push('/');
  // };

  // signoutHandler = (e) => {
  //   this.props.onSignout();
  //   this.props.history.push('/')
  // }

  render() {
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    const loggedIn = localStorage.getItem('loggedIn');
    let home;
    if (loggedIn) {
      if (userType === "admin")
        home = "/admin/home";
      else
        home = "/users/home";

    }
    else {
      home = '/';
    }

    return (
      <div>
        <div className="header">
          <Link to={home} className="logo">
            <img src={logo} alt="logo" height="60px"></img>
            <h2>Spartan Cars</h2>
          </Link>

          <div className="options">
            <Link to="profile" className="option" >
              {userName}
            </Link>

            {loggedIn ? (
              <Link className="option" to="/logout">
                SignOut
              </Link>
            ) : (
                <Link className="option" to="/login">
                  Sign In
                </Link>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
