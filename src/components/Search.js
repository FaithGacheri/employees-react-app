import React from "react";

function Search({handleSearch}){
    return (
        <div className="ui large fluid icon input">
          <input
            type="text"
            placeholder="Search your Employees Details"
            onChange={(e)=>handleSearch(e)}
          />
          <i className="circular search link icon"></i>
        </div>
      );
    
    }

    export default Search;
