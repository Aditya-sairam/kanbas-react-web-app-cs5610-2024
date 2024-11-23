import { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5])
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)])
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index))
    }
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn btn-success p-3 m-3">Add Element</button>
            <ul >
                {array.map((item, index) => (
                    <li className="border border-primary p-3 rounded" key={index}>
                       {item} 
                        <button onClick={() => deleteElement(index)}
                            id="wd-delete-element-click" className="btn btn-danger p-4 m-3 ">
                            Delete</button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>

    )
}