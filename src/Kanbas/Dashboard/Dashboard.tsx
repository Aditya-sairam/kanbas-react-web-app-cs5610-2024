import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import * as db from "../Database";
import { useSelector } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const enrollments = useSelector((state:any) => state.courseReducer.enrolledCourses)
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleEnrollClick = () => {
    navigate("/enroll-courses"); // Navigate to the EnrollCourses page
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Add the button for Enroll in New Courses in the top-right corner */}
      {currentUser.role === "STUDENT" && (
        <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 10 }}>
          
          <button
                className="btn btn-lg btn-primary"
                onClick={() => navigate("/Kanbas/Dashboard/EnrollCourse")}
            >
               
                Enroll in New courses
            </button>
          
        </div>
      )}

      {/* Rest of the dashboard content */}
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course ... </h5>
          <br />
          <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>

          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <br />
        </>
      )}

      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) =>
              enrollments.some(
                (enrollment: { user: any; course: any; }) => enrollment.user === currentUser._id && enrollment.course === course._id
              )
            )
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src={course.image ? course.image : "images/data.jpg"} alt="images/data.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>

                      {currentUser.role === "FACULTY" && (
                        <>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              setCourse(course);
                              event.preventDefault();
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
