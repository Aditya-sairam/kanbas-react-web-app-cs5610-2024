import axios from "axios"

const axiosWithCredentials = axios.create({ withCredentials: true });

export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
  };
  

export const  REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
  };
  export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
  };
  export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
  };
  export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
  };
  export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };
      
  export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
  };
    
   export const enrollcourse = async(course:any,userId:any) =>{
    const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/enrollCourse`,course)
    console.log(response.data)
    return response.data;
   }

   export const unEnrollCourse = async(courseId:string,userId:any) =>{
    const response = await axiosWithCredentials.get(`${USERS_API}/${userId}/unenrollCourse/${courseId}`)
   console.log(`${USERS_API}/${userId}/unenrollCourse/${courseId}`)
    return response.data;
   }
  