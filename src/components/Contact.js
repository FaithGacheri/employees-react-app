import React from "react";

function Contact(){
return (
    <div>
        <h1>Contact</h1>
        <form>
            <div>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Workemail" />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
)
}

export default Contact;