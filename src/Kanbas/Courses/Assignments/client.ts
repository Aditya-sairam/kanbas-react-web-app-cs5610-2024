import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const API_BASE = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

export const findAssignmentForCourse = async (courseId: string | undefined) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment : any) => {
  // console.log(assignment._id)
  const {data} = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};

export const createAssignment = async (courseId : string,assignment:any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  
  return response.data;
};