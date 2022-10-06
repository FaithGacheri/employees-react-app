import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div className="navbar">
        <div className="navlink">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/employeedetails'>EmployeeDetails</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </div>
       
       
      </div>  
    )
}

export default NavBar;