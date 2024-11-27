import { useState } from "react";

export default function ObjectStateVariables(){
    const [object,setObject] = useState({name:"Peter",age:24})
    return(
        <div>
            <h2>Chaning Object states</h2>
            <pre>{JSON.stringify(object,null,2)}</pre>
            <input defaultValue={object.name} onChange={(e) => setObject({...object,name:e.target.value})} />
        </div>
    )
}