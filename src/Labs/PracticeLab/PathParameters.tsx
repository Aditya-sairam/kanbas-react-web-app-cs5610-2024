import { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function PracPathParameters(){
    const [a,setA] = useState("");
    const [b,setB] = useState("");

    return(
        <div>
        <input type="form-control" onChange={(e) => setA(e.target.value)} />
        <input type = "form-contr" onChange={(e) => setB(e.target.value)} />
        <a className="btn btn-primary" href={`${REMOTE_SERVER}/practicelab/add/${a}/${b}`} >Take me to the sum!</a>
        </div>
    )
}