import React from "react";

function DetailsContainer(){
    // const [EmployeesData, setemployeesData] =useState([])
    return (
        <div>
          <Search />
          <AddTransactionForm  />
          <TransactionsList />
        </div>
      ); 
}
export default DetailsContainer;