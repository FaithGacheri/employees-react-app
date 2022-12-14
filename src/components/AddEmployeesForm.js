import React, {useState} from "react";


function AddEmployeesForm({addEmployee}){
 
        const [employeeId, setemployeeId] = useState();
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
      alert("Fill all the details")
         }
        }

        return (
            <div className="adding">
              <form className="ui-form" onSubmit={handleSubmit}>
 <h3>Enter details of a new employee below</h3>
                <div className="location">
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
                    
                    onChange={(e) =>
                      setMyEmployee((prev) => ({ ...prev, age: e.target.value }))
                    }
                  />
                </div>
                <button className="btn" type="submit">
                  Add Details
                </button>
              </form>
            </div>
          );
        }
        
        
         export default AddEmployeesForm;
