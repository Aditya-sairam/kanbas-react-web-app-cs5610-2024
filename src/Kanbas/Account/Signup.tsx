import React from "react";
import { Link } from "react-router-dom";


export default function Signup(){
    return (
        <div id="wd-signup-screen">
            <h3>Sign Up</h3>
            <input type="text" placeholder="username" /> <br />
            <input type="password" placeholder="password" /> <br/ >
            <input type="password" placeholder="verify password" /> <br/ >
            <Link to="/kanbas/Account/Profile">Sign Up</Link><br /> <br />
            <Link to="/Kanbas/Account/Signin">Sign in</Link>
        </div>
    )
}