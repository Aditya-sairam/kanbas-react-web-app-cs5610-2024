export default function Editor() {
    return(
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /> <br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of yout web application running on Netlify. The landing page should include the following : Yoru full name and Links to each of the Lab assignments, Link to Kanbas application Links to all the relevent code repositiories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <select id="wd-group" >
                            <option selected value="ASSIGNMENTS"></option>
                            <option  value="QUIZZES"></option>
                            <option selected value="EXAMS"></option>
                            <option selected value="PROJECT"></option>
                        </select>
                    </td>
                    <td>
                        
                        Online Entry Options <br />
                        <input id="wd-points" type="checkbox" name="Text Entry" />
                        <input id="wd-points" type="checkbox" name="Text Entry" />
                        <input id="wd-points" type="checkbox" name="Text Entry" />
                        <input id="wd-points" type="checkbox" name="Text Entry" />
                        <input id="wd-points" type="checkbox" name="Text Entry" />
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
            </table>
        </div>
    )
}