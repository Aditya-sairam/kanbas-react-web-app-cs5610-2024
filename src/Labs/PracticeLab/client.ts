import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

const TODO_API = `${REMOTE_SERVER}/practicelab/todos`;
export const fetchTodo = async() => {
  const response = await axios.get(`${TODO_API}`);
  return response.data;
  }
export const postTodo = async(todo:any) => {
  const response = await axios.post(`${REMOTE_SERVER}/practicelab/todos/create`,todo)
  return response.data;
}

export const deleteTodo = async(todo:any) => {
  const response = await axios.delete(`${REMOTE_SERVER}/practicelab/todos/${todo.id}/delete`)
  return response.data;
}