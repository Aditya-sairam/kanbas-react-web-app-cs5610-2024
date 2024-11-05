import { useState } from "react"

export default function BooleanStateVariables(){
    const [show,setShow] = useState(true);
    return(
        <div>
        <label className="form-control">
        <input type="checkbox" checked={show} onChange={() => setShow(!show)} />Done 
        </label>
           {show && <div className="alert alert-success"> Yay! you are done </div>} 
        <hr />
        </div>
    )
}