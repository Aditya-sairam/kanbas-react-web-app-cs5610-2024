import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiInbox2Fill } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";



export default function KanbasNavigation() {
    // const location = useLocation(); // Get the current location

    return (
        <div id="wd-kanbas-navigation" style={{width:110}} className="list-group-rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
        <img className="list-group-item text-center border-0 bg-black text-white mx-auto d-block" style={{width:60}} src = "images/NEU_logo.jpg" /><br />
        <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className="list-group-item bg-black border-0 text-center text-white">Northeastern</a><br/>
        <Link to="/Kanbas/Account" id="wd-account-link" className={`nav-link list-group-item text-center border-0 ${useLocation().pathname === "/Kanbas/Account" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account</Link><br/>
        <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"  className={`nav-link list-group-item text-center border-0 ${useLocation().pathname === "/Kanbas/Dashboard" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard</Link><br/>
        <Link to="/Kanbas/Courses" id="wd-courses-link" className={`nav-link list-group-item text-center border-0 ${useLocation().pathname === "/Kanbas/Courses" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses</Link><br/>
        <Link to="/Kanbas/Calender" id="wd-calender-link" className={`nav-link list-group-item text-center border-0 ${useLocation().pathname === "/Kanbas/Calender" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <MdOutlineCalendarMonth className="fs-1 text-danger" /><br />
        Calender</Link><br/>
        <Link to="/Kanbas/Inbox" id="wd-inbox-link" className={`nav-link list-group-item text-center border-0 ${useLocation().pathname === "/Kanbas/Inbox" ? "bg-white text-danger" : "bg-black text-white"}`}> 
        <RiInbox2Fill className="fs-1 text-danger" /><br />
        Inbox</Link><br/>
        <Link to="/Kanbas/Labs" id="wd-labs-link" className={`nav-link list-group-item text-center border-0 ${useLocation().pathname === "/Kanbas/Labs" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <MdOutlineSettings className="fs-1 text-danger" /><br />
        Labs</Link><br/>
        </div>

    )
}