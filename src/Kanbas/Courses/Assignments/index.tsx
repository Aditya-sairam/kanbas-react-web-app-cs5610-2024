
export default function Assignments() {
    return(
    <div>
        <input id="wd-search-assignment" type="text" placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group" type="button">+ Group</button>
        <button id="wd-add-assignment" type="button">+ Assignment</button><br />
        <h3>ASSIGNMENTS 40% of Total <button type="button">+</button> </h3>
        <ul id="wd-assignment-list">
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML</a>

            </li>
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
                A2 - CSS + BOOTSTRAP</a>
                
            </li>
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
                A3 - JAVASCRIPT + REACT</a>
            </li>
        </ul>

    </div>
    )
}