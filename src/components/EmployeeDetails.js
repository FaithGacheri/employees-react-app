import React, { useEffect, useState } from "react";
import EmployeesList from "./EmployeesList";

function EmployeeDetails(){
    const [employeesData, setemployeesData]= useState([])
    useEffect(() => {
        fetch("http://localhost:3000/employees")
        .then(resp => resp.json())
        .then(respdata => {
            setemployeesData(respdata);
        })
    }, [])

    return (
        <div>
          <EmployeesList employeesData={employeesData}/>  
        </div>
    )
}

export default EmployeeDetails;

