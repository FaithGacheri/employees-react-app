import React from "react";
import img1 from "./images/gettyimages.jpg"


function Home() {
    return (
        <>
            <h1>Home Page</h1>

            {/* <div className="save">
               <h3> Save time on accessing employees data</h3>
            </div> */}
            <div className="image">
                <img src={img1} alt=""/>
                <h3>Time is of essence,save time on accessing employees data.Get all your data safely stored and easily accessible </h3>
            </div>
        </>
    );
}

export default Home;