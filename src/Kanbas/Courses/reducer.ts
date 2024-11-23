import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database"; // Assuming `enrollments` has data in the right structure

const initialState = {
  enrolledCourses: enrollments, // Initial enrollment data (if any)
  showAllCourses: false, // Toggle flag to show all courses or only enrolled ones
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleCourseView: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollCourse: (state, { payload: { courseId, userId } }) => {
      // Create new enrollment object with expected structure
      const newEnrollment = {
        _id: `${userId}-${courseId}`, // Generate a unique _id
        user: userId,   // Current user's ID
        course: courseId, // The course ID from payload
      };

      // Add the new enrollment object to the list of enrolled courses
      state.enrolledCourses.push(newEnrollment);
      console.log(state.enrolledCourses);
    },
    unenrollCourse: (state, { payload: { courseId, userId } }) => {
      // Filter out the enrollment for the given user and courseId
      state.enrolledCourses = state.enrolledCourses.filter(
        (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
      );
    },
  },
});

export const { toggleCourseView, enrollCourse, unenrollCourse } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
