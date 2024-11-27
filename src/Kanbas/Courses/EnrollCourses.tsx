import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { enrollCourse, unenrollCourse } from "./reducer"; // Import the actions
import { useParams } from "react-router-dom";
import * as db from "../Database";
import * as accountClient from "../Account/client";
import { enrollCourse, unenrollCourse } from '../Courses/reducer';


  const EnrollCourses = () => {
  const dispatch = useDispatch();
  const { cid } = useParams(); // Get the course ID from the URL
  const currentUser = useSelector((state:any) => state.accountReducer.currentUser); // Get the current user
  const courses = db.courses; // Assuming this imports your courses data
  const enrolledCourses = useSelector((state:any) => state.courseReducer.enrolledCourses); // Get enrolled courses from state

  const enrollInCourse = async (courseId:string) => {
    const courses = db.courses;
    const course = courses.find((c) => c._id === courseId);
    // console.log(course);
    await accountClient.enrollcourse(course,currentUser);
    dispatch(enrollCourse({ courseId, userId: currentUser._id }));
  }

  const unEnrollFromCourse = async(courseId:string) => {
    // const courses = db.courses;
    // const course = courses.filter((c) => c._id === courseId);
    console.log(courseId)
    await accountClient.unEnrollCourse(courseId,currentUser._id);
    dispatch(unenrollCourse({ courseId, userId: currentUser._id }));
  }
  // Function to check if the user is enrolled in a specific course
  const isEnrolled = (courseId: string) => {
    return enrolledCourses.some(
      (enrollment: { user: any; course: any; }) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  // const handleEnroll = (courseId: string) => {
  //   // Dispatch enrollCourse action
  //   dispatch(enrollCourse({ courseId, userId: currentUser._id }));
  // };

  const handleUnenroll = (courseId: string) => {
    // Dispatch unenrollCourse action
    dispatch(unenrollCourse({ courseId, userId: currentUser._id }));
  };

  return (
    <div>
      <h2>Available Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col">
            <div className="card">
              <img src={course.image || "images/data.jpg"} alt={course.name} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                {isEnrolled(course._id) ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => unEnrollFromCourse(course._id)} // Unenroll if already enrolled
                  >
                    Unenroll
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => enrollInCourse(course._id)} // Enroll if not already enrolled
                  >
                    Enroll
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollCourses;
