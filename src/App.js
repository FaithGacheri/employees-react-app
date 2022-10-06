import React from "react";
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
      {/* <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
