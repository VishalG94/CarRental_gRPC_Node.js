import React from "react";
import { Link } from "react-router-dom";
import "./header-style.css";
import { auth } from "../FirebaseUtils/FirebaseUtils";
import { Component } from "react";

class Header extends Component {
  state = {
    userdetails: ""
  };

  componentDidUpdate = e => {
    this.setState(localStorage.getItem("userdetails"));
    console.log(this.state.userdetails.name);
  };
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <Link to="/home">
              {/* <Logo className="logo" /> */}
              logo
            </Link>
          </div>
          <div className="options">
            <Link to="list" className="option">
              List
            </Link>
            <Link to="cart" className="option">
              Cart
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
