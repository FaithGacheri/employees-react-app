import React from "react";

function EmployeesList(){
return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Identity-no</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Gender</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Age</h3>
          </th>
        </tr>
  </tbody>
  </table>
);
}

export default EmployeesList;
  