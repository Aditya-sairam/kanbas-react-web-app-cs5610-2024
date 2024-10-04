import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";



export default function Modules() {
    return (
        <div>
            <div className="container mt-3">
                <div className="d-flex justify-content-between align-items-center"> {/* Flex container */}
                    <div className="input-group"> {/* Search bar group */}
                        <span className="input-group-text">
                            <CiSearch />
                        </span>
                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search" style={{maxWidth:"600px"}} />
                    </div>
                    <div className="d-flex"> {/* Flex container for buttons */}
                    <button id="wd-add-assignment-group" type="button" className="btn btn-secondary ms-3">+ Group</button>
                    <button id="wd-add-assignment" type="button" className="btn btn-danger ms-3">+ Assignment</button>
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
                            <span className="border border-secondary rounded-pill p-1" style={{ margin: "0 0 5px 0" }} ><span style={{ margin: "0 10px 0px 10px" }}>40% of Total</span>
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

                        <li className="wd-lesson list-group-item p-3 ps-1">

                            <BsGripVertical style={{ margin: "5px 5px" }} />
                            <MdAssignment className="text-success" style={{ margin: "5px 5px" }} />

                            <a className="wd-assignment-link text-dark fw-bolder" href="#/Kanbas/Courses/1234/Assignments/123" style={{ margin: "25px 20px" }}>

                                A1 - ENV + HTML</a>

                            <div style={{ margin: "20px 20px" }}>
                                <p><span className="text-danger">Multiple Modules</span> | <span className="fw-bolder">not available until </span> May 6 at 12:00 am
                                    <div className="float-end">
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4" /></div></p>

                                <p>Due at May 13 at 11:59 pm  | 100pts</p>

                            </div>

                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical style={{ margin: "5px 5px" }} />
                            <MdAssignment className="text-success" style={{ margin: "5px 5px" }} />
                            <a className="wd-assignment-link text-dark fw-bolder" href="#/Kanbas/Courses/1234/Assignments/124" style={{ margin: "25px 20px" }}>

                                A2 - CSS + BOOTSTRAP</a>
                            <div style={{ margin: "20px 20px" }}>
                                <p><span className="text-danger">Multiple Modules</span> |<span className="fw-bolder">not available until </span> May 13 at 12:00 am  <div className="float-end">
                                    <GreenCheckmark />
                                    <IoEllipsisVertical className="fs-4" /></div></p>
                                <p>Due at May 20 at 11:59 pm  | 100pts</p>

                            </div>

                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical style={{ margin: "5px 5px" }} />
                            <MdAssignment className="text-success" style={{ margin: "5px 5px" }} />
                            <a className="wd-assignment-link text-dark fw-bolder" href="#/Kanbas/Courses/1234/Assignments/125" style={{ margin: "25px 20px" }}>

                                A3 - JAVASCRIPT + REACT</a>
                            <div style={{ margin: "20px 20px" }}>
                                <p> <span className="text-danger">Multiple Modules</span>| <span className="fw-bolder">not available until </span> May 20 at 12:00 am
                                    <div className="float-end">
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4" /></div></p>
                                <p>Due at May 27 at 11:59 pm  | 100pts</p>

                            </div>

                        </li>
                    </ul>
                </li>

            </ul> </div>

    )
}