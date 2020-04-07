import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
import { auth } from "../../FirebaseUtils/FirebaseUtils";
import { Component } from "react";
import logo from "../../../Assets/Icons/Logo.svg";

class Header extends Component {
  state = {
    userdetails: "",
  };

  componentDidUpdate = (e) => {
    this.setState(localStorage.getItem("userdetails"));
    console.log(this.state.userdetails.name);
  };
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/home" className="logo">
            {/* <Logo className="logo" /> */}
            <img src={logo} alt="logo" height="60px"></img>
            <h2>Spartan Cars</h2>
          </Link>

          <div className="options">
            <Link to="list" className="option">
              Catalog
            </Link>
            <Link to="cart" className="option">
              Reservations
            </Link>
            {this.state.userdetails.signedIn ? (
              <div className="option" onClick={() => auth.signOut()}>
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
