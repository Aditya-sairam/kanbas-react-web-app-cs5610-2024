export default function NewAssignmentEditor({  assignmentName, setAssignmentName,assignmentDesc,setAssignmentDesc,points,setPoints,dueDate,setDueDate,fromDate,setFromDate,untilDate,setUntilDate, addAssignment }:
    { assignmentName: string; setAssignmentName: (name: string) => void;assignmentDesc: string; setAssignmentDesc: (name: string) => void;points: number; setPoints: (name: number) => void;dueDate: Date; setDueDate: (name: Date) => void;fromDate: Date; setFromDate: (name: Date) => void;untilDate: Date; setUntilDate: (name: Date) => void;addAssignment: () => void; }) {
      return (
        <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                
              </div>
              <div className="modal-body">
               Assignment Name: <input className="form-control" defaultValue={assignmentName} placeholder="Module Name"
                       onChange={(e) => setAssignmentName(e.target.value)}/>
                Assignment Description: <input className="form-control" defaultValue={assignmentDesc} placeholder="Module Name"
                       onChange={(e) => setAssignmentDesc(e.target.value)}/>
                Points: <input className="form-control" defaultValue={points} placeholder="Module Name"
                       onChange={(e) => setPoints(parseInt(e.target.value))}/>
                Due Date: <input type="date" className="form-control"  placeholder="Module Name"
                       onChange={(e) => setDueDate(new Date(e.target.value))}/>
                From Date: <input className="form-control"  placeholder="Module Name"
                       onChange={(e) => setDueDate(new Date(e.target.value))}/>
                Until Date: <input className="form-control"  placeholder="Module Name"
                       onChange={(e) => setDueDate(new Date(e.target.value))}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel </button>
                <button onClick={addAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                  Add Module </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    