import { useState } from "react";

export default function BooleanStateVariables() {
    const [done,setDone] = useState(false);
    return(
        <div>
        <h2>Setting done/not done</h2>
        <p>{done ? "Done":"Not Done"}</p>
        <button onClick={() => setDone(!done)}>
            Done!
        </button>
        </div>
    )
}