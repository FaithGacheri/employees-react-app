import React, { useEffect, useState } from "react";
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
    }
    return (
        <div>
            <Search handleSearch={handleSearch}/>
          <EmployeesList employeesData={employeesData}/>  
        </div>
    )
}

export default EmployeeDetails;

