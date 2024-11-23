import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignment: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      // console.log("Assignments:",state.assignments)
      console.log('Adding assignment in reducer:', assignment);
      const newAssignment : any = {
        _id: assignment._id,
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
      console.log(state.assignments)
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      );
    },
    editAssignment: (state, { payload: moduleId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment,setAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
