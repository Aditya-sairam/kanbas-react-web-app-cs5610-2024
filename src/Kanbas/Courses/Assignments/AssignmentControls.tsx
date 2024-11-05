import { FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

export default function AssignmentControls() {
    const navigate = useNavigate();
    const { cid } = useParams();
    return (
        <div className="assignment-controls">
            <button
                className="btn btn-lg btn-danger me-1"
                onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
            >
                <FaPlus className="me-2" />
                Assignment
            </button>
            {/* Add more control buttons as needed */}
        </div>
    );
}
