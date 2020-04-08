import React from "react";
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
import Userbillingmanagement from "./Components/Admin/userbillingmanagement";
import Viewalllocations from "./Components/Admin/viewalllocations";

import Dashboard from "./Components/Admin/admindashboard";
import Viewallcars from "./Components/Admin/viewallcars";

function App() {
  return (
    <div className="App">
      <Header />
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
        <Route exact path="/admin/admindashboard" component={Dashboard} />
        <Route exact path="/admin/addvehicle" component={CreateVehicle} />
        <Route exact path="/admin/addlocation" component={CreateRental} />
        <Route exact path="/admin/editall" component={Editvehicledetails} />
        <Route exact path="/admin/usermanagement" component={Usermanagement} />
        <Route
          exact
          path="/admin/userbillingmanagement"
          component={Userbillingmanagement}
        />
        <Route exact path="/admin/viewallcars" component={Viewallcars} />
        <Route
          exact
          path="/admin/viewalllocations"
          component={Viewalllocations}
        />
        <Route exact path="/login" component={LoginPage} />{" "}
        <Route exact path="/users/home" component={UserHomePage} />{" "}
        <Route exact path="/users/signup" component={SignupPage} />{" "}
        <Route exact path="/users/vehiclecatalog" component={VehicleCatalog} />{" "}
        <Route exact path="/admin/home" component={AdminHomePage} />{" "}
        <Route exact path="/admin/vehiclecatalog" component={VehicleCatalog} />{" "}
      </Switch>{" "}
      <Footer />
    </div>
  );
}

export default App;
