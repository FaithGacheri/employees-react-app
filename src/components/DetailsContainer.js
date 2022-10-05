import React from "react";

function DetailsContainer(){
    return (
        <div>
          <Search />
          <AddTransactionForm  />
          <TransactionsList />
        </div>
      ); 
}
export default DetailsContainer;