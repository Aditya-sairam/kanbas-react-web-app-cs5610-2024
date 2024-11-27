import { useState } from "react";

export default function counter(){
    const [count,setCount] = useState(7);
    console.log(count); 
    return(
        <div>
            <h2> Counter : {count}</h2>
            <button onClick={() => setCount(count+1)} >
            increment
            </button>
            <button onClick={() => setCount(count-1)} >
            Decrement
            </button>
        </div>
    )
}