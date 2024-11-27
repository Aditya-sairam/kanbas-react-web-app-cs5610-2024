import { useState } from "react";

export default function StringStateVariables(){
    const [text,setText] = useState("");
    return(
        <div>
            <h2>{text}</h2>
            <input className="form-control" defaultValue={text} onChange={(e) => setText(e.target.value)}  />
        </div>
    )
}