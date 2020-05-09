import React, { Component } from "react";
import CustomInput from "../../Common/CustomInput/CustomInput";
import axios from "axios";
import Constants from "../../../Utils/Constants";
import "./Profile.styles.css";
import CustomButton from "../../Common/CustomButton/CustomButton";
class Profile extends Component {
  state = {
    _id: 0,
    NAME: "",
    DL_STATE: "",
    DL_NUMBER: "",
    EMAIL: "",
    PHONE: 0,
    // PASSWORD: "",
    ADDRESS: {
      _id: 0,
      STREET: "",
      STATE: "",
      COUNTRY: "",
      PIN: 0,
      LATITUDE: 0,
      LONGITUDE: 0,
    },
    MEMBERSHIP_START: "",

    CARD: "",
    CREATED: "",
    MODIFIED: "",

    disabled: true,
    editstate: false,
    oldDetails: {},
  };

  handleChange = (e) => {
    //e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
    // console.log(this.state);
  };
  handleAddressChange = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      ADDRESS: { ...prevState.ADDRESS, [name]: value },
    }));
    //console.log(this.state);
  };
  componentWillMount() {

    console.log("in edit profile")
    let body;
    axios.get(`${Constants.BACKEND_SERVER.URL}/userRes`,
      {
        params: {
          _id: localStorage.getItem("userId")
        }
      }).then((res) => {

        console.log(this.state);
        this.setState({ oldDetails: { ADDRESS: { ...res.data.ADDRESS }, ...res.data }, ...res.data }, () => {
          console.log(this.state);
        });


      })

    // axios
    //   .get(
    //     `${Constants.BACKEND_SERVER}/users/getuser`,
    //     localStorage.getItem("userId")
    //   )
    //   .then((res) => {
    //     const body = res.body;
    //     if (body._id) {
    //       this.setState({
    //         ...body
    //       });

    //     } else {
    //       console.log("Error fetching user data");
    //     }
    //   });
  }

  handleEdit = (e) => {
    e.preventDefault();

    this.setState((prevstate) => ({
      editstate: !prevstate.editstate,
      disabled: !prevstate.disabled,
    }));
  };
  handleCancelEdit = (e) => {
    e.preventDefault();
    if (!this.state.editstate) {
      this.setState((prevstate) => ({
        // ADDRESS: { ...prevstate.oldData.ADDRESS },
        ...prevstate.oldData,
      }));
    }
  };
  handleSave = (e) => {
    e.preventDefault();
    const {
      disabled,
      editstate,
      oldDetails,
      ...userDetails
    } = this.state;


    const req = {
      ...userDetails,
    };
    console.log(req)
    axios
      .put(`${Constants.BACKEND_SERVER.URL}/user`, req)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          window.alert("Changes Updated Successfully");
        }
      });
  };
  handleTerminate = (e) => {
    e.preventDefault();
    const {
      disabled,
      editstate,
      oldDetails,
      ...userDetails
    } = this.state;


    const req = {
      MEMBERSHIP_START: null,
      ...userDetails,
    };
    console.log(req)
    axios
      .put(`${Constants.BACKEND_SERVER.URL}/user`, req)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          window.alert("Membership Terminated Successfully");
          window.location.reload(false);
          localStorage.clear()
          window.location.href = "/"; 

        }
      });
  };
  render() {
    let addresschange
    if (this.state.oldDetails.ADDRESS) {
      addresschange = <div className='addressOptions'>
        <div className="option">
          Street Address:{" "}
          <input
            label={this.state.oldDetails.ADDRESS.STREET}
            disabled={this.state.disabled}
            value={this.state.ADDRESS.STREET}
            onChange={this.handleAddressChange}
            name="STREET"
          />
        </div>
        <div className="option">
          State:{" "}
          <input
            label={this.state.oldDetails.ADDRESS.STATE}
            disabled={this.state.disabled}
            value={this.state.ADDRESS.STATE}
            onChange={this.handleAddressChange}
            name="STATE"
          />
        </div>
        <div className="option">
          Country:{" "}
          <input
            //  label={this.state.oldDetails.ADDRESS.COUNTRY}
            disabled={this.state.disabled}
            value={this.state.ADDRESS.COUNTRY}
            onChange={this.handleAddressChange}
            name="COUNTRY"
          />
        </div>
        <div className="option">
          Zip Code:{" "}
          <input
            // label={this.state.oldDetails.ADDRESS.PIN}
            disabled={this.state.disabled}
            value={this.state.ADDRESS.PIN}
            onChange={this.handleAddressChange}
            name="PIN"
          />
        </div>
      </div>

    }
    return (
      <div className="profile">
        <form className="userdetails">
          <h2>Edit Profile Details</h2>
          <div className="option">
            Name:{" "}
            <input
              label={this.state.oldDetails.NAME}
              disabled={this.state.disabled}
              value={this.state.NAME}
              onChange={this.handleChange}
              name="NAME"
            />
          </div>
          <div className="option">
            Driver License State:{" "}
            <input
              label={this.state.oldDetails.DL_STATE}
              disabled={this.state.disabled}
              value={this.state.DL_STATE}
              onChange={this.handleChange}
              name="DL_STATE"
              width="200px"
            />
          </div>
          <div className="option">
            Driver License Number:{" "}
            <input
              label={this.state.oldDetails.DL_NUMBER}
              disabled={this.state.disabled}
              value={this.state.DL_NUMBER}
              onChange={this.handleChange}
              name="DL_NUMBER"
            />
          </div>
          <div className="option">
            Email: <input disabled value={this.state.EMAIL} name="EMAIL" />
          </div>
          <div className="option">
            Phone:{" "}
            <input
              label={this.state.oldDetails.PHONE}
              disabled={this.state.disabled}
              value={this.state.PHONE}
              onChange={this.handleChange}
              name="PHONE"
            />
          </div>
          {addresschange}
          <div className="option" style={{ justifyContent: "space-around", marginLeft: '20%' }}>
            <CustomButton type="submit" onClick={this.handleEdit}>
              Edit Details
              {/* {this.state.editstate ? "Cancel Edit" : "Edit Details"}{" "} */}
            </CustomButton>
            {/* <button type="submit" onClick={this.handleCancelEdit}>
              Restore Changes
              {this.state.editstate ? "Cancel Edit" : "Edit Details"}{" "}
            </button> */}
            <br />
            {/* </div>

          <div className="option"> */}
            <CustomButton type="submit" onClick={this.handleSave}>
              Save Changes
              {/* {this.state.editstate ? "Cancel Edit" : "Edit Details"}{" "} */}
            </CustomButton>

            
            <CustomButton type="submit" onClick={this.handleTerminate}>
Terminate Membership              
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
