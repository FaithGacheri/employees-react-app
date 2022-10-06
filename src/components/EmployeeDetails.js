import React, { useEffect, useState } from "react";
import AddEmployeesForm from "./AddEmployeesForm";
import EmployeesList from "./EmployeesList";
import Search from "./Search";

function EmployeeDetails(){
    const [employeesData, setemployeesData]= useState([])
    useEffect(() => {
        fetch("http://localhost:3000/employees")
        .then(resp => resp.json())
        .then(respdata => {
            setemployeesData(respdata);
        })
    }, [])

    function handleSearch(e){
        const mysearch = e.target.value
        const updatedEmp =  employeesData.filter(item => item.name.toLowerCase().includes(mysearch))
setemployeesData(updatedEmp)
    }
    function addEmployee(employee){
        console.log(employee);
        setemployeesData(prevstate => [...prevstate,employee])
      }
    return (
        <div>
            <Search handleSearch={handleSearch}/>
            <AddEmployeesForm addEmployee={addEmployee} /> 
          <EmployeesList employeesData={employeesData}/> 
          
        </div>
    )
}

export default EmployeeDetails;

