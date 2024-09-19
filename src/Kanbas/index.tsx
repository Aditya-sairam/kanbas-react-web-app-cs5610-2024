import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Link } from "react-router-dom";

export default function Kanbas () {
    return (
        <div id="wd-kanbas">
            <table>            
                <tr>
                    <td valign="top">
                        <KanbasNavigation />
                    </td>
            <td valign="top">
            <Routes>
                <Route path="/" element={<Navigate to="Account" />} /> 
                <Route path="/Account/*" element={<Account />} /> 
                <Route path="/Dashboard" element = {<Dashboard />} />
                <Route path="/Courses/:cid/*" element={<Courses />} />
                <Route path="/Calender" element={<h1>Calender</h1> } />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
            </td>
            </tr>
            </table>
           
            <Link to="/" id="wd-account-link" >Back to landing page</Link><br/>
        </div>
    );
}