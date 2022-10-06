import React from "react";
import Employee from "./Employee";

function EmployeesList({employeesData}){
  // console.log(employeesData);
return (
  <>
    <table className="seeing">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Identitynumber</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Gender</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Age</h3>
          </th>
        </tr>
{employeesData.map((employee)=>{
    return <Employee employee={employee} key={employee.id}/>
})}

  </tbody>
  </table>
  </>
);
}

export default EmployeesList;
  