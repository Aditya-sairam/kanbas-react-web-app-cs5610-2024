import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import { Link } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectRoute";
import Dashboard from "./Dashboard/Dashboard"; 
import EnrollCourses from "./Courses/EnrollCourses";
import Session from "./Account/Session";
import { useSelector } from "react-redux";


export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {

    let courses = [];
    try {
       courses = await userClient.findMyCourses();
      
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
    //   console.log(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);

    };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
      };
      const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })
      );};
    

    return (
        <Session>
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
        </Session>
    );
}