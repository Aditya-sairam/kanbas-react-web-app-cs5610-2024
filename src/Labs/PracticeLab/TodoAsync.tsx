import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import * as client from "./client";

export default function TodoAsync(){
    const [todos,setTodos] = useState<any>([]);
    
    const fetchTodo = async() =>{
        const todos = await client.fetchTodo();
        setTodos(todos);
    }
    const postTodo = async() => {
        const newTodo = await client.postTodo({title:"new Todo creation",completed:false})
        console.log(newTodo)
        setTodos([...todos,newTodo]);
    } 
    const deleteTodo = async(todo:any) => {
        await client.deleteTodo(todo);
        const newTodos = todos.filter((t: { id: any; }) => t.id !== todo.id) //Trail!
        setTodos(newTodos)
    }
    useEffect(() => {
        fetchTodo();
    },[])
    return(
        <div>
            <button onClick={postTodo} className="btn btn-primary">Create a constant todo!</button>
            <ul>
                {todos.map((todo: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) =>(
                    <li key={todo.id} >{todo.title}
                    <button onClick = {() => deleteTodo(todo)} className="btn btn-danger">Delete this item!</button>
                    </li>
                   
                ))}
            </ul>

        </div>
    )
}