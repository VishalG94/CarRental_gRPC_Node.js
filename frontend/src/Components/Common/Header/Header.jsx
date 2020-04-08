import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
import { Component } from "react";
import logo from "../../../Assets/Icons/Logo.svg";

class Header extends Component {
  state = {
    loggedIn: true,
    userName: "Vamsi",
    home: "/",
  };

  onSignout = (e) => {
    // e.preventDefault();
    this.setState({ loggedIn: !this.state.loggedIn, userName: "", home: "/" });

    localStorage.clear("loggedIn");
    localStorage.clear("userName");
    localStorage.clear("userType");
    localStorage.clear("vehicleId");
    localStorage.clear("locationId");
  };
  componentWillMount = (e) => {
    // this.setState({ loggedIn: localStorage.getItem("loggedIn") });
    // this.setState({ username: localStorage.getItem("userName") });
    if (this.state.loggedIn) {
      this.setState({ home: "home" });
    }
  };
  render() {
    // const userType=localStorage;
    return (
      <div>
        <div className="header">
          <Link to={this.state.home} className="logo">
            {/* <Logo className="logo" /> */}
            <img src={logo} alt="logo" height="60px"></img>
            <h2>Spartan Cars</h2>
          </Link>

          <div className="options">
            <Link to="profile" className="option">
              {this.state.userName}
            </Link>
            {/* <Link to="cart" className="option">
              Reservations
            </Link> */}
            {this.state.loggedIn === true ? (
              <div className="option" onClick={this.onSignout}>
                SignOut
              </div>
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

export default Header;
