import React from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Header from "../src/Components/header/header.jsx";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route
          exact
          path="/login"
          // render={() =>
          //   this.props.currentuser ? <Redirect to="/home" /> : <LoginPage />
          // }
          component={LoginPage}
        />
      </Switch>
    </div>
  );
}

export default App;
