import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./CountRedux/pracCountReducer";

export default function ReduxExamples(){
    const {count} = useSelector((state:any) => state.practicalCounterReducer)
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Redux Examples</h2>
            <h4>{count}</h4>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}