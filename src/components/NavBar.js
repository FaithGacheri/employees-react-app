import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div className="navbar">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/employeedetails'>EmployeeDetails</NavLink>
      </div>  
    )
}

export default NavBar;