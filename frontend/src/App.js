import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Header from "./Components/Common/Header/Header.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import UserHomePage from "./Components/Users/HomePage/HomePage";
import Footer from "./Components/Common/Footer/Footer";
import SignupPage from "./Components/Users/SignUpPage/SignUpPage";
import VehicleCatalog from "./Components/Common/VehicleCatalog/VehicleCatalog";

import AdminHomePage from "../src/Components/Admin/HomePage/HomePage";

import CreateVehicle from "./Components/Admin/createvehicle";
import CreateRental from "./Components/Admin/createrentallocation";
import Editvehicledetails from "./Components/Admin/editvehicledetails";
import Usermanagement from "./Components/Admin/manageusers";
import Vehiclepricemanagement from "./Components/Admin/Vehiclepricemanagement";
import Viewindividualcategory from "./Components/Admin/Viewindividualcategory";

import Viewalllocations from "./Components/Admin/viewalllocations";


import Dashboard from "./Components/Admin/admindashboard";
import Viewallcars from "./Components/Admin/viewallcars";
import Viewindividualcar from "./Components/Admin/viewindividualcar"
import Viewindividuallocation from "./Components/Admin/viewindividuallocation"
import Viewindividualuser from "./Components/Admin/viewindividualuser"
import ReturnCar from './Components/Users/ReturnCar/ReturnCar'
import Sidenavbar from "./Components/Admin/sidenavbar";

import LandingPage from "../src/Components/LandingPage/LandingPage";
import Profile from "./Components/Users/Profile/Profile";
import Logout from "./Components/Common/Header/Logout";
import Reservations from "./Components/Users/Reservations/Reservations";
import ReservationList from "./Components/Users/ReservationList/ReservationList";

class App extends Component {
  state = {
    loggedIn: false
  }
  onSignIn = (e) => {
    this.setState({ loggedIn: true });
  }
  onSignout = (e) => {
    // console.log("clear local from app.js")
    // localStorage.clear("loggedIn");
    // localStorage.clear("userName");
    // localStorage.clear("userType");
    // localStorage.clear("vehicleId");
    // localStorage.clear("locationId");
    this.setState({ loggedIn: !this.state.loggedIn });
    // return <Redirect to='/' />
  };

  render() {
    return (
      <div>

        <Route path="/admin" component={Sidenavbar} />

        <div className="App">

          <Header {...this.props} onSignout={this.onSignout} />

          <Switch>
            {/* <Route
          exact
          path="/login"
          render={() =>
            localStorage.getItem("loggedIn") ? (
              <Redirect to="/home" />
            ) : (
              <LoginPage />
            )
          }
          component={LoginPage}
        />{" "} */}
            <Route exact path="/" component={LandingPage} />


            <Route exact path="/logout"
              render={props =>
                (<Logout {...props} onSignout={this.onSignout} />)} />


            <Route exact path="/admin/admindashboard" component={Dashboard} />
            <Route exact path="/admin/addvehicle" component={CreateVehicle} />
            <Route exact path="/admin/addlocation" component={CreateRental} />
            {/* <Route exact path="/admin/editall" component={Editvehicledetails} /> */}
            <Route exact path="/admin/usermanagement" component={Usermanagement} />
            <Route exact path="/admin/vehiclepricemanagement" component={Vehiclepricemanagement} />
            <Route exact path="/admin/viewallcars" component={Viewallcars} />
            <Route exact path="/admin/viewalllocations" component={Viewalllocations} />
            <Route exact path="/login"
              render={props =>
                (<LoginPage {...props} onSignIn={this.onSignIn} />)} />
            <Route exact path="/admin/viewallcars/view/:projectId" component={Viewindividualcar} />
            <Route exact path="/admin/viewalllocations/view/:projectId" component={Viewindividuallocation} />
            <Route exact path="/admin/usermanagement/view/:projectId" component={Viewindividualuser} />
            <Route exact path="/admin/vehiclepricemanagement/view/:projectId" component={Viewindividualcategory} />
            <Route exact path="/users/home" component={UserHomePage} />{" "}
            <Route exact path="/users/signup" component={SignupPage} />{" "}
            <Route exact path="/users/profile" component={Profile} />{" "}
            <Route exact path="/users/reservations" component={Reservations} />{" "}
            <Route exact path="/users/reservationList" component={ReservationList} />{" "}
            <Route exact path="/users/returnCar" component={ReturnCar} />{" "}


            <Route exact path="/users/vehiclecatalog" component={VehicleCatalog} />{" "}

            <Route exact path="/admin/home" component={AdminHomePage} />{" "}
            <Route exact path="/admin/vehiclecatalog" component={VehicleCatalog} />{" "}
          </Switch>{" "}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
