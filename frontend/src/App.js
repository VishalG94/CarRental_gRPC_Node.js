import React from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Header from "./Components/Common/Header/Header.jsx";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Common/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage} />{" "}
        <Route
          exact
          path="/login"
          // render={() =>
          //   this.props.currentuser ? <Redirect to="/home" /> : <LoginPage />
          // }
          component={LoginPage}
        />{" "}
      </Switch>{" "}
      <Footer />
    </div>
  );
}

export default App;
