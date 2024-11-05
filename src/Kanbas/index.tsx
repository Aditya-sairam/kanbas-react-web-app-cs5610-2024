import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Link } from "react-router-dom";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectRoute";
import Dashboard from "./Dashboard/Dashboard";
import EnrollCourses from "./Courses/EnrollCourses";


export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: any) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div id="wd-kanbas">

            <KanbasNavigation />

            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={ <ProtectedRoute> <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse} /> </ProtectedRoute>
                    } />
                    <Route path="Dashboard/EnrollCourse" element={<ProtectedRoute><EnrollCourses /></ProtectedRoute>}  />
                    <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /> </ProtectedRoute>} />
                    <Route path="/Calender" element={<h1>Calender</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>

                <Link to="/" id="wd-account-link" >Back to landing page</Link><br />
            </div>
        </div>
    );
}