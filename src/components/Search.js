import React from "react";
import {BiSearchAlt2} from "react-icons/bi"

function Search({handleSearch}){
    return (
        <div className="get">
          <input
            type="text"
            placeholder="Search Details"
            onChange={(e)=>handleSearch(e)}
          />
<BiSearchAlt2/>
        </div>
      );
    
    }

    export default Search;
