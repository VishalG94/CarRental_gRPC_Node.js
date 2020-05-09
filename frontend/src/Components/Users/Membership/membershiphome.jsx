import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../../Common/SignUp/SignUp-style.css";
import Box from '@material-ui/core/Box';

import "./membership.styles.css";
import TextField from '@material-ui/core/TextField';
import CustomButton from "../../Common/CustomButton/CustomButton";

// import axios from "axios";
// import Constants from "../../../Utils/Constants";
// import { Grid } from "@material-ui/core";

class membershiphome extends Component {
    // state = {};
    render() {
        return (
            // <div className = "membershiphome">
            <div style={{ width: "500px", minHeight: "400px", margin: "auto" }}>
                <p><h1>Want to beome a member?</h1></p>
                <h5>    * you will be charged $14.99/6 months +plus taxes </h5>
                <h5>    * we will send a reminder 3 days before your next biling cycle </h5>
                <Link to="/login" style={{ textDecoration: "none" }}>
                    Have an account? SignIn First!<li></li>
                </Link>
                <Link to="/users/signup" style={{ textDecoration: "none" }}>
                    New here? Create an account!<li></li>
                </Link>
                <Link to="membership" style={{ textDecoration: "none" }}>
                    Start your membership today!<li></li>
                </Link>
            </div>
        );
    }
}
export default membershiphome;