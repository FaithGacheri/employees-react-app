import React from "react";
import { Routes, Route  } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import Home from "./components/Home";
import NavBar from "./components/NavBar";




function App() {
  return (
    <div className="App">
   <div className="title">
    <h2>Employees App</h2>
   </div>
      <EmployeeDetails/>
     {/* <NavBar />
    <Routes>
      <Route  path='/'>
        <Home />
      </Route>
    </Routes> */}
    </div>
  );
}

export default App;
