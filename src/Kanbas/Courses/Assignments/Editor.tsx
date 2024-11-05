import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from '../Assignments/reducer';
import { useParams, useNavigate } from 'react-router-dom';

const AssignmentEditor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cid, aid } = useParams();

    // Use selector to fetch all assignments
    const assignments = useSelector((state:any) => state.assignmentReducer.assignments || []);
    const existingAssignment = assignments.find((assignment: { _id: string | undefined; }) => assignment._id === aid);

    // Initialize state for the form fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableUntil, setAvailableUntil] = useState('');

    // Populate fields with existing assignment data when in edit mode
    useEffect(() => {
        if (existingAssignment) {
            setTitle(existingAssignment.title);
            setDescription(existingAssignment.description);
            setPoints(existingAssignment.points.toString());
            setDueDate(existingAssignment.dueDate);
            setAvailableFrom(existingAssignment.availableFrom);
            setAvailableUntil(existingAssignment.availableUntil);
        }
    }, [existingAssignment]);

    // Handle save functionality
    const handleSave = () => {
        const newAssignment = {
            _id: existingAssignment ? existingAssignment._id : `A${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
            title,
            description,
            points: parseInt(points, 10),
            dueDate,
            availableFrom,
            availableUntil,
            course: cid
        };

        // Log data for debugging purposes
        console.log("Dispatching with data:", newAssignment);

        if (existingAssignment) {
            dispatch(updateAssignment(newAssignment));
        } else {
            dispatch(addAssignment(newAssignment));
        }

        // Navigate back after saving
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div>
            <h2>{existingAssignment ? 'Edit Assignment' : 'Create New Assignment'}</h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Points:</label>
                    <input
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Due Date:</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Available From:</label>
                    <input
                        type="date"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Available Until:</label>
                    <input
                        type="date"
                        value={availableUntil}
                        onChange={(e) => setAvailableUntil(e.target.value)}
                        required
                    />
                </div>
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default AssignmentEditor;
