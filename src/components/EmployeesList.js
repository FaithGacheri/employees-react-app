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
            <h3 className="name">Name</h3>
          </th>
          <th>
            <h3 className="id-no">Identitynumber</h3>
          </th>
          <th>
            <h3 className="gender">Gender</h3>
          </th>
          <th>
            <h3 className="age">Age</h3>
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
  