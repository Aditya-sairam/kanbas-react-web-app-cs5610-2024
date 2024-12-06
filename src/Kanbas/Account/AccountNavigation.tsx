import { Link, useLocation } from "react-router-dom";
import { useSelector, UseSelector } from "react-redux";


export default function AccountNavigation () {
    const {currentUser} = useSelector((state:any) => state.accountReducer);
    const links = currentUser ? [{name:"Profile",path:"/Kanbas/Account/Profile"}] : [ { name: "Sign in", path: "/kanbas/Account/Signin" },
        { name: "Sign Up", path: "/kanbas/Account/Signup" }]
        const active = (path: string) => (pathname.includes(path) ? "active" : "");

        const { pathname } = useLocation();

        

    return(
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
            <Link
                key={link.name}
                to={link.path}
                className={`list-group-item ${pathname.includes(link.name) ? "active" : "text-danger"} border border-0`}
            >
                {link.name}
            </Link>
        ))}
          {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}

    </div>
    )
}