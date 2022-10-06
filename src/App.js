import React from "react";
import { Routes, Route  } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";




function App() {
  return (
    <div className="App">
   <div className="title">
    <h2>Employees App</h2>
   </div>
      <NavBar/>
      {/* <EmployeeDetails/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/employeedetails' element={<EmployeeDetails/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
