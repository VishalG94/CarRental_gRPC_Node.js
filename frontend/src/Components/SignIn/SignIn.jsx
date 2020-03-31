import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignIn-style.css";

import { signInWithGoogle, auth } from "../FirebaseUtils/FirebaseUtils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    //e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    var { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);

      //localStorage.setItem({email:''})
      var user = auth.currentUser;
      const userdetails = {
        name: "",
        email: "",
        photoUrl: "",
        signedIn: "false"
      };
      console.log(user);

      if (user != null) {
        userdetails.name = user.displayName;
        userdetails.email = user.email;
        userdetails.photoUrl = user.photoURL;
        userdetails.signedIn = "true";
      }
      localStorage.setItem("userdetails", userdetails);
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("email", user.email);
      localStorage.setItem("photoURL", user.photoURL);
      localStorage.setItem("signedIn", true);
      this.setState({ email: "", password: "" });

      this.props.history.push("/home");
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
  };
  render() {
    return (
      <div>
        <h1>Have an Account?</h1>
        <h2>Login with Email and Password</h2>
        <div className="signinform">
          <form onSubmit={this.handleSubmit}>
            <CustomInput
              type="email"
              label="Email"
              name="email"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />
            <CustomInput
              type="password"
              label="Password"
              name="password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
            <div className="loginbutton">
              <CustomButton type="submit" label="submit" name="submit">
                SIGN IN
              </CustomButton>
              <CustomButton onClick={signInWithGoogle}>
                GOOGLE Login
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
