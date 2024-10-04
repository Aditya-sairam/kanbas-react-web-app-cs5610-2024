import React from "react";
import { Link } from "react-router-dom";


export default function Signup() {
    return (
        <div id="wd-signup-screen" className="m-3">
            <h1>Sign Up</h1>
            <input
                id="wd-username"
                type="text"
                placeholder="username"
                className="form-control mb-2"
            />
            <input
                id="wd-password"
                type="password"
                placeholder="password"
                className="form-control mb-2"
            />
            <input
                id="wd-verify-password"
                type="password"
                placeholder="verify password"
                className="form-control mb-3"
            />
            <Link
                id="wd-signup-btn"
                to="/kanbas/Account/Profile"
                className="btn btn-primary w-100"
            >
                Sign Up
            </Link>
            <div className="mt-3">
                <Link id="wd-signin-link" to="/Kanbas/Account/Signin">
                    Already have an account? Sign In
                </Link>
            </div>
        </div>

    )
}