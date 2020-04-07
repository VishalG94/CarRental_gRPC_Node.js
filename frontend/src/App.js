import React from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Header from "./Components/Common/Header/Header.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Common/Footer/Footer";
import SignupPage from "./Components/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage} />{" "}
        <Route
          exact
          path="users/login"
          render={() =>
            localStorage.getItem("loggedIn") ? (
              <Redirect to="/home" />
            ) : (
              <LoginPage />
            )
          }
          component={LoginPage}
        />{" "}
        <Route
          exact
          path="admin/login"
          render={() =>
            localStorage.getItem("loggedIn") ? (
              <Redirect to="/home" />
            ) : (
              <LoginPage />
            )
          }
          component={LoginPage}
        />{" "}
        <Route exact path="/users/login" component={LoginPage} />{" "}
        <Route exact path="/users/signup" component={SignupPage} />{" "}
        <Route exact path="/admin/login" component={HomePage} />{" "}
      </Switch>{" "}
      <Footer />
    </div>
  );
}

export default App;
