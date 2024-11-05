import { useState } from "react"

export default function StringStateVariables() {
    const [firstname,setFirstName] = useState("John");
    return(
        <div>
            <p>{firstname}</p>
            <input className="form-control" defaultValue={firstname} onChange={(e) => setFirstName(e.target.value)} />
            
        </div>

    )
}