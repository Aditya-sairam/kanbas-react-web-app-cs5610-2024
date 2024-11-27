import { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function TodoArray() {
    const [todo,setTodo] = useState({
        id:"1",
        title:"New Task",
        completed:"false"
    })
    return(
        <div>
            
            <h2> a complete state of a TodoArray</h2>
           <input className="form-control" onChange={(e) => setTodo({...todo,id:e.target.value})} />
           <input className="form-control" onChange={(e) => setTodo({...todo,completed:e.target.value})} />
           <a href={`${REMOTE_SERVER}/practicelab/todos/${todo.id}/completed/${todo.completed}`}>Link to update todo!</a>
    
        </div>
    )
}