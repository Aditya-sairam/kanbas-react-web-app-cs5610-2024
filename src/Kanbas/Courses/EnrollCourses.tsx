import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { enrollCourse, unenrollCourse } from "./reducer"; // Import the actions
import { useParams } from "react-router-dom";
import * as db from "../Database";
import * as accountClient from "../Account/client";
import { enrollCourse, unenrollCourse } from '../Courses/reducer';
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";

  const EnrollCourses = () => {
    const [courses,setCourses] = useState<any[]>([]);
    const [enrolledCourses,setEnrolledCourses] = useState<any[]>([]);
    const fetchCourses = async () => {
      try {
        const allCourses = await courseClient.fetchAllCourses();
        setCourses(allCourses);
        const enrolledCourses = await userClient.findCoursesForUser(
          currentUser._id
        );
        setEnrolledCourses(enrolledCourses)
        const courses = allCourses.map((course: any) => {
          if (enrolledCourses.find((c: any) => c._id === course._id)) {
            return { ...course, enrolled: true };
          } else {
            return course;
          }
        });
        // setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
        fetchCourses();
    }, []);
  const dispatch = useDispatch();
  const { cid } = useParams(); // Get the course ID from the URL
  const currentUser = useSelector((state:any) => state.accountReducer.currentUser); // Get the current user
  // const courses = db.courses; 
  // const enrolledCourses = accountClient.findCoursesForUser(currentUser._id)

  const enrollInCourse = async (courseId:string) => {
    // const courses = 
    const course = courses.find((c) => c._id === courseId);
    console.log(course);
    await accountClient.enrollcourse(course,currentUser);
    dispatch(enrollCourse({ courseId, userId: currentUser._id }));
  }

  const unEnrollfromCourse = async(courseId:string) => {
    // const courses = db.courses;
    // const course = courses.filter((c) => c._id === courseId);
    console.log(currentUser._id)
    await accountClient.unenrollFromCourse(currentUser._id,courseId);
    dispatch(unenrollCourse({ courseId, userId: currentUser._id }));
  }
  // Function to check if the user is enrolled in a specific course
  const isEnrolled = (courseId: string) => {
    console.log(enrolledCourses[0])
    const isCourseEnrolled = enrolledCourses.some(course => course._id === courseId);
    console.log(isCourseEnrolled)
    return isCourseEnrolled

  };


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
                    onClick={() => unEnrollfromCourse(course._id)} // Unenroll if already enrolled
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
