import { Navigate, Route, Routes } from "react-router";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignments";
import Assignments from "./Assignments";
import Editor from "./Assignments/Editor";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2>Course 1234</h2>
            <table>
                <tr>
                    <td valign="top">
                        <CourseNavigation />
                        </td>
                        <td>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="People" element={<h2>People</h2>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    )
}