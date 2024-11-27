import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "./pracAddReducer";


export default function AddRedux() {
    const {sum} = useSelector((state:any) => state.pracAddReducer)
    const [a,setA] = useState(6);
    const [b,setB] = useState(10);
    const dispatch = useDispatch();
    return(
        <div>
        <h1>Add Redux</h1>
        <h2>{a}+{b}= {sum}</h2>
        <input type="number" defaultValue={a} onChange={(e) => setA(parseInt(e.target.value))} />
        <input type="number" defaultValue={b} onChange={(e) => setB(parseInt(e.target.value))} />
        <button className="btn btn-primary" onClick={() => dispatch(add({a,b}))}>Add em!</button>
        </div>
    )

}