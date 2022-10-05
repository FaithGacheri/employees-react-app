import React, {useState} from "react";
import Employee from "./Employee";

function AddEmployeesForm({addEmployee}){
 
        const [employeeId, setemployeeId] = useState(15);
        const [myEmployee, setMyEmployee ] = useState({
          name: "",
          identitynumber: "",
          gender: "",
          age: "",
        });
      
        function handleSubmit(e) {
         if( myEmployee.name && myEmployee.identitynumber && myEmployee.gender && myEmployee.age){
          e.preventDefault();
          addEmployee(myEmployee);
          setMyEmployee({name: "", identitynumber: "", gender: "", age: "" });
          e.target.reset() 
         }
         else{
          e.preventDefault();
      alert("your details is not complete")
         }
        }

        return (
            <div className="ui segment">
              <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={(e) =>
                      setMyEmployee((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <input
                    type="number"
                    name="identitynumber"
                    placeholder="identitynumber"
                    onChange={(e) =>
                      setMyEmployee((prev) => ({
                        ...prev,
                        identitynumber: e.target.value,
                        id: setemployeeId(employeeId)
                      }))
                    }
                  />
                  <input
                    type="text"
                    name="gender"
                    placeholder="gender"
                    onChange={(e) =>
                      setMyEmployee((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="age"
                    step="0.01"
                    onChange={(e) =>
                      setMyEmployee((prev) => ({ ...prev, age: e.target.value }))
                    }
                  />
                </div>
                <button className="ui button" type="submit">
                  Add Details
                </button>
              </form>
            </div>
          );
        }
        
        
         export default AddEmployeesForm;
