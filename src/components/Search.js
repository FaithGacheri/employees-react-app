import React from "react";

function Search({handleSearch}){
    return (
        <div className="get">
          <input
            type="text"
            placeholder="Search Details"
            onChange={(e)=>handleSearch(e)}
          />

        </div>
      );
    
    }

    export default Search;
