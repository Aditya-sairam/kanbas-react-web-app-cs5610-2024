export default function AssignmentEditor() {
    return(
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> < br />
            <input id="wd-name" value="A1 - ENV + HTML" /> <br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of yout web application running on Netlify. The landing page should include the following : Yoru full name and Links to each of the Lab assignments, Link to Kanbas application Links to all the relevent code repositiories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <br />
            <table>

                <tr>
                    <td >
                        <label htmlFor="wd-points">Points</label><br />
                        <input id="wd-points" value={100} />
                    </td>
                    </tr>
                    <br />
                    <tr>
                    <td>
                        <label htmlFor="wd-group">Assignment Group</label><br />
                        
                        <select id="wd-group" >
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option  value="QUIZZES">QUIZZES</option>
                            <option  value="EXAMS">EXAMS</option>
                            <option  value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                    </tr>
                    <br />
                    <tr>
                    <td >
                        <label htmlFor="wd-display-grade-as">Display Grade As</label><br />
                        <select id="wd-display-grade-as" >
                            <option selected value="Percentage">Percentage</option>
                            <option  value="Points">Points</option>
                            <option selected value="Complete/Incomplete">Complete/Incomplete</option>
                            <option selected value="Letter grade">Letter Grade</option>
                            <option selected value="GPA scale"> GPA Scale</option>
                            <option selected value="Not graded">Not Graded</option>
                        </select>
                    </td>
                    </tr >
                    <br />
                    <tr>
                    <td >
                        <label htmlFor="wd-submission-type">Submission Type</label><br />
                        <select id="wd-submission-type" >
                            <option selected value="online">Online</option>
                            <option  value="On Paper">On Paper</option>
                            <option selected value="External tool">External Tool</option>
                            <option selected value="Lucid">Lucid</option>
                            <option selected value="No submission">No Submission</option>
                        </select>
                    </td>
                    </tr>
                    <br />
                    <tr>
                    <td >
                        
                        <label htmlFor="wd-text-entry">Online Entry Options</label> <br />
                        <input id="wd-text-entry" type="checkbox" name="Text Entry" />Text Entry<br />
                        <input id="wd-website-url" type="checkbox" name="Website URL" />Website URL<br />
                        <input id="wd-media-recordings" type="checkbox" name="Media Recordings" />Media Recordings<br />
                        <input id="wd-student-annotation" type="checkbox" name="Student annotation" />Student Annotation<br />
                        <input id="wd-file-upload" type="checkbox" name="File Uploads" />File Uploads
                    </td>
                    </tr>
                    <br />
                    <tr>
                    <td align="right" >
                    <label htmlFor="wd-assign-to">Assign Assignment to</label><br /> 
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                    </tr>
                    <tr>
                    <td  >
                        <label htmlFor="wd-due-date">Due</label><br />
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                    </ tr>
                    <br />
                    <tr>
                    <td >
                        <label htmlFor="wd-available-from">Available From</label><br />
                        <input type="date" id="wd-available-from" value= "2024-05-06" /><br />
                    </td>
                    </tr>
                    <br />
                    <tr>
                    <td >
                    <label htmlFor="wd-available-until">Available Until</label><br />
                        <input id="wd-available-until" type="date" value="2024-05-20" />
                    </td>
                    </tr>
                   
            </table>
            <hr />
            <button>Cancel</button>
            <button>Save</button>
        </div>
    )
}