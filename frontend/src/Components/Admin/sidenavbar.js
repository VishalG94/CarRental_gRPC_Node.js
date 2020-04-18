import React, { Component }  from "react";
import './sidenavbar.css';
import Button from '@material-ui/core/Button';


class Sidenavbar extends Component {
    state = {};
    render() {
  return (
    <div className="sidebar">
      <div className="togglebtn">
       <ul>
       <Button style={{ color:'white' }} href="/admin/admindashboard">Dashboard</Button>
       <Button style={{ color:'white' }}href="/admin/addvehicle">Add Vehicle</Button>
       <Button style={{ color:'white' }}href="/admin/editall">Edit Vehicle</Button>
       <Button style={{ color:'white' }} href="/admin/usermanagement">USer Management</Button>
       <Button style={{ color:'white' }}href="/admin/userbillingmanagement">User Billing</Button>
       <Button style={{ color:'white' }}href="/admin/viewallcars">View All</Button>
       <Button style={{ color:'white' }}href="/admin/addLocation">Add Location</Button>
       </ul>
       </div>
    </div>  
     
  );
}
}

export default Sidenavbar;