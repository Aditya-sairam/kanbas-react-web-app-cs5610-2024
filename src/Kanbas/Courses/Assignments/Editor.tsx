import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from '../Assignments/reducer';
import { useParams, useNavigate } from 'react-router-dom';
import * as assignmetClient from "./client";
import * as coursesClient from "../client";

const AssignmentEditor = () => {
    const dispatch = useDispatch();
    const { cid, aid } = useParams();
    const navigate = useNavigate();

    const assignments = useSelector((state:any) => state.assignmentReducer.assignments || []);
    const existingAssignment = assignments.find((assignment:any) => assignment._id === aid);

    // Initialize state for the form fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableUntil, setAvailableUntil] = useState('');

    const createAssignmentForCourse = async() => {
        if(!cid) return;
        const newAssignment = {title:title,description:description,points:points,dueDate:dueDate,availableFrom:availableFrom,availableUntil:availableUntil}
        const assignment = await coursesClient.createAssignmentForCourse(cid,newAssignment);
        dispatch(addAssignment(assignment));
    }

    const updateAssignmentForCourse = async(assignment:any) => {
        if(!cid) return;
        // const newAssignment = {title:title,description:description,points:points,dueDate:dueDate,availableFrom:availableFrom,availableUntil:availableUntil}
        await assignmetClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    }
    // Populate local state when editing an existing assignment
    useEffect(() => {
        if (existingAssignment) {
            setTitle(existingAssignment.title);
            setDescription(existingAssignment.description);
            setPoints(existingAssignment.points.toString());
            setDueDate(existingAssignment.dueDate);
            setAvailableFrom(existingAssignment.availableFrom);
            setAvailableUntil(existingAssignment.availableUntil);
        } else {
            // Clear state for new assignment creation
            setTitle('');
            setDescription('');
            setPoints('');
            setDueDate('');
            setAvailableFrom('');
            setAvailableUntil('');
        }
    }, [existingAssignment]);

    const handleSave = () => {
        const newAssignment = {
            _id: existingAssignment
                ? existingAssignment._id
                : `A${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
            title,
            description,
            points: parseInt(points, 10),
            dueDate,
            availableFrom,
            availableUntil,
            course: cid,
        };

        if (existingAssignment) {
            updateAssignmentForCourse(newAssignment)
        } else {
            createAssignmentForCourse();
        }

        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">{existingAssignment ? 'Edit Assignment' : 'Create New Assignment'}</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input
                            id="title"
                            className="form-control"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} // Update local state
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea
                            id="description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} // Update local state
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input
                            id="points"
                            className="form-control"
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)} // Update local state
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="dueDate" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-10">
                        <input
                            id="dueDate"
                            className="form-control"
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)} // Update local state
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="availableFrom" className="col-sm-2 col-form-label">Available From</label>
                    <div className="col-sm-10">
                        <input
                            id="availableFrom"
                            className="form-control"
                            type="date"
                            value={availableFrom}
                            onChange={(e) => setAvailableFrom(e.target.value)} // Update local state
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="availableUntil" className="col-sm-2 col-form-label">Available Until</label>
                    <div className="col-sm-10">
                        <input
                            id="availableUntil"
                            className="form-control"
                            type="date"
                            value={availableUntil}
                            onChange={(e) => setAvailableUntil(e.target.value)} // Update local state
                            required
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AssignmentEditor;
