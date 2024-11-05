import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from '../Assignments/reducer';
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import AssignmentControls from "./AssignmentControls";


export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    
    // State for dialog control
    const [openDialog, setOpenDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

    // Handle delete button click
    const handleDeleteClick = (assignmentId: string) => {
        setAssignmentToDelete(assignmentId);
        setOpenDialog(true);
    };

    // Confirm delete action
    const handleConfirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete)); // Dispatch the delete action
            setOpenDialog(false);
        }
    };

    // Handle cancel delete
    const handleCancelDelete = () => {
        setOpenDialog(false);
        setAssignmentToDelete(null);
    };

    return (
        <div>
            <div className="container mt-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="input-group">
                        <span className="input-group-text">
                            <CiSearch />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                            style={{ maxWidth: "600px" }}
                        />
                    </div>
                    <div className="d-flex">
                        <button id="wd-add-assignment-group" type="button" className="btn btn-secondary ms-3">
                            + Group
                        </button>
                        <AssignmentControls />
                    </div>
                </div>
            </div>

            <br />
            <ul id="wd-modules" className="list-group rounded-1 container mt-3">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-light">
                        <BsGripVertical />
                        <span className="fw-bolder">ASSIGNMENTS </span>
                        <div className="float-end ">
                            <span className="border border-secondary rounded-pill p-1" style={{ margin: "0 0 5px 0" }}>
                                <span style={{ margin: "0 10px 0px 10px" }}>40% of Total</span>
                            </span>
                            <span style={{ margin: "15px" }}>
                                <LuPlus />
                                <span style={{ margin: "0 0 15px 15px" }}>
                                    <IoEllipsisVertical className="fs-4" />
                                </span>
                            </span>
                        </div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li className="wd-lesson list-group-item p-3 ps-1" key={assignment._id}>
                                    <BsGripVertical style={{ margin: "5px 5px" }} />
                                    <MdAssignment className="text-success" style={{ margin: "5px 5px" }} />
                                    <a
                                        className="wd-assignment-link text-dark fw-bolder"
                                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        style={{ margin: "25px 20px" }}
                                    >
                                        {assignment.title}
                                    </a>
                                    <div style={{ margin: "20px 20px" }}>
                                        <p>
                                            <span className="text-danger">Multiple Modules</span> |{" "}
                                            <span className="fw-bolder">not available until </span>{assignment.availableFrom}
                                            <div className="float-end">
                                                <GreenCheckmark />
                                                <IoEllipsisVertical className="fs-4" />
                                                <button
                                                    className="btn btn-sm btn-danger ms-3"
                                                    onClick={() => handleDeleteClick(assignment._id)} // Call delete on click
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </p>
                                        <p>Due at {assignment.Due} | {assignment.pts}</p>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>

            {/* Confirmation Dialog */}
            <ConfirmationDialog
                open={openDialog}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
                title="Delete Assignment"
                message="Are you sure you want to delete this assignment?"
            />
        </div>
    );
}
