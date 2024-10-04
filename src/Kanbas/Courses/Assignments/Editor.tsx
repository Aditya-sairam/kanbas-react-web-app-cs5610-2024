import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="row mb-3 ">

                <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
                <div className="col-sm-10 ">
                    <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
                </div>
            </div>

            <div className="row mb-3 ">
                <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10 ">
                    <textarea id="wd-description" className="form-control" rows={5}>
                        The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following:
                        Your full name and links to each of the Lab assignments, Link to the Kanbas application, Links to all the relevant code repositories. The Kanbas application should include a link to navigate back to the landing page.
                    </textarea>
                </div>
            </div>

            <div className="row mb-3 ">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                <div className="col-sm-10 ">
                    <input id="wd-points" className="form-control" defaultValue={100} />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
                <div className="col-sm-10">
                    <select id="wd-group" className="form-control m-2">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3 ">
                <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade As</label>
                <div className="col-sm-10 ">
                    <select id="wd-display-grade-as" className="form-control">
                        <option selected value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                        <option value="Complete/Incomplete">Complete/Incomplete</option>
                        <option value="Letter grade">Letter Grade</option>
                        <option value="GPA scale">GPA Scale</option>
                        <option value="Not graded">Not Graded</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3 ">
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                <div className="col-sm-10 border border-3">
                    <select id="wd-submission-type" className="form-control">
                        <option selected value="online">Online</option>
                        <option value="On Paper">On Paper</option>
                        <option value="External tool">External Tool</option>
                        <option value="Lucid">Lucid</option>
                        <option value="No submission">No Submission</option>
                    </select>
                    <div>
                    <label htmlFor="wd-text-entry" className="form-label fw-bolder m-2">Online Entry Options</label>
                    <div className="form-check">
                        <input id="wd-text-entry" type="checkbox" className="form-check-input" name="Text Entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input id="wd-website-url" type="checkbox" className="form-check-input" name="Website URL" />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input id="wd-media-recordings" type="checkbox" className="form-check-input" name="Media Recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input id="wd-student-annotation" type="checkbox" className="form-check-input" name="Student annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input id="wd-file-upload" type="checkbox" className="form-check-input" name="File Uploads" />
                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="row mb-3" >
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Assign</label>
                <div className="col-sm-10 border border-3">
                    <select id="wd-submission-type" className="form-control m-3" style={{maxWidth:"750px"}}>
                        <option selected value="online">Online</option>
                        <option value="On Paper">On Paper</option>
                        <option value="External tool">External Tool</option>
                        <option value="Lucid">Lucid</option>
                        <option value="No submission">No Submission</option>
                    </select>
                    <div className='m-2'>
                    <label htmlFor="wd-assign-to" className="form-label fw-bolder m-2">Assignment to</label>
                    <div className="form-check">
                        <input id="wd-assign-to" value="Everyone"/>
                    </div>
                    
                        <div className='m-3'>
                        <label htmlFor="wd-due-date">Due</label>
                        <input id="wd-due-date"  style={{maxWidth:"600px"}} type="date" className="form-control" defaultValue="2024-05-13" />
                        
                        
                        <label htmlFor="wd-available-from">Available From</label>
                        <input id="wd-available-from"  style={{maxWidth:"350px"}} type="date" className="form-control" defaultValue="2024-05-13" />
                        <label htmlFor="wd-available-until">Until</label>
                        <input id="wd-available-until"  style={{maxWidth:"350px"}} type="date" className="form-control" defaultValue="2024-05-13" />
                        </div>
                        
                    </div>
                </div>
            </div>
        

            <hr />
            <button className="btn btn-secondary float-end">Cancel</button>
            <button className="btn btn-danger float-end">Save</button>
        </div>
    );
}
