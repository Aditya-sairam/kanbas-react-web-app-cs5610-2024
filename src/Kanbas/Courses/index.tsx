import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignments";
import Assignments from "./Assignments";
import Editor from "./Assignments/Editor";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { courses } from "../Database";
import NewAssignmentEditor from "./Assignments/NewAssignmentEditor";
import EnrollCourses from "./EnrollCourses";
import { useEffect, useState } from "react";
import * as client from "./client";
import * as userClient from "../Account/client";




export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const [users, setUsers] = useState<any[]>([]); 
    const { pathname } = useLocation();
    const fetchUsers = async () => {
        if(!cid){
            return;
        }
        const userIds = await client.findUsersForCourse(cid);
        for (let i = 0; i < userIds.length; i++){
            const user = await userClient.findUserById(userIds[i]);
            users.push(user);
        }
        setUsers(users);
        console.log("From index of courses!")
        console.log(users);
        
        setUsers(users);
      };
      useEffect(() => {
        fetchUsers();
      }, [cid]);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}

            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="/Kanbas/Courses/:cid/Assignments/new" element={<AssignmentEditor />} />
                        <Route path="Kanbas/Dashboard/EnrollCourse" element={<EnrollCourses />} />
                        <Route path="People" element={<PeopleTable users={users} />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}