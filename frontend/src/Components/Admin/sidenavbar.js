import React, { Component } from "react";
import './sidenavbar.css';
import Button from '@material-ui/core/Button';


class Sidenavbar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <div className="togglebtn">
          <ul>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/home">Home</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/admindashboard">Dashboard</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/addLocation">Add Location</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/addvehicle">Add Vehicle</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/viewallcars">View All Cars</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/viewalllocations">View All Locations</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/usermanagement">USer Management</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/vehiclepricemanagement">Vehicle Pricing</Button>
            <Button style={{ color: 'white', fontFamily: 'Montserrat' }} href="/admin/membershippricing">Membership Pricing</Button>
          </ul>
        </div>
      </div>

    );
  }
}

export default Sidenavbar;