import React from "react";
// import {RiTwitterLine} from "react-icons/ri"

function Footer(){
    return(
       <div>
         <section className="footer">

            {/* <RiTwitterLine/> */}
     <section className="co">
        <ul>
        <li><h2>Company</h2></li>
      <li><a href="/">Service</a></li>
      <li><a href="/">Contact Us</a></li>
      </ul>
     </section >
     
    <section className="det">
        <ul>
    <li><h2>Details</h2></li>
      <li><a href="/">Name</a></li>
      <li><a href="/">Identitynumber</a></li>
      <li><a href="/">Gender</a></li>
      <li><a href="/">Age</a></li>
      </ul>
     </section>

     <section className="others">
        <ul>
     <li><h2>Others</h2></li>
      <li><a href="/">FAQs</a></li>
      <li><a href="/">Terms of Services</a></li>
      <li><a href="/">Privacy and Policy</a></li>
      </ul>
     </section>
    </section>
       </div> 
    )
} 
export default Footer;