import React from "react";

function Employee({employee}){
    return (
      <tr>
      <td>{employee.name}</td>
      <td>{employee.identitynumber}</td>
      <td>{employee.gender}</td>
      <td>{employee.age}</td>
        </tr>
      );  
}
export default Employee;