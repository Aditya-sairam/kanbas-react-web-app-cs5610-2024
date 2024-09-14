import { Link } from "react-router-dom";

export default function AccountNavigation () {
    return(
    <div id="wd-account-navigation">
        <Link to={"/kanbas/Account/Signin"}>Sign in</Link><br />
        <Link to={"/kanbas/Account/Signup"}>Sign Up</Link><br />
        <Link to={"/kanbas/Account/Profile"}>Profile</Link><br />
    </div>
    )
}