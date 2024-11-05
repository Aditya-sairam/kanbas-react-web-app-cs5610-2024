import React, {useState} from "react"
export default function Counter() {
    // let count = 7;
    const [count,setCount] = useState(7);
    console.log(count);
    return(
        <div id="wd-counter-use-state">
            <h2>Counter:{count}</h2>
            <button onClick={() => setCount(count+1)} className="btn btn-success">Up</button>
             <button onClick={() => setCount(count-1)} className="btn btn-danger">Down</button>
        </div>
    )
}