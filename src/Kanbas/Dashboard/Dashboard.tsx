import { Link } from "react-router-dom";

export default function Dashboard () {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <h2 id="wd-dashboard-published">Published courses(12)</h2>
            <div id="wd-dasboard-course">
                <img src="/images/reactjs.png" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                    CS1234 React Js
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Full stack software developer
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                </div>
            </div>
            <div id="wd-dasboard-course">
                <img src="/images/data.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6767/Home">
                    CS6767 Data Science
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Data Science using R
                    </p>
                    <Link to="/Kanbas/Courses/6767/Home">Go</Link>
                </div>
            </div>
            <div id="wd-dasboard-course">
                <img src="/images/python.png" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
                    CS5678 Python Programming
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Backend Development using python
                    </p>
                    <Link to="/Kanbas/Courses/5678/Home">Go</Link>
                </div>
            </div>
            <div id="wd-dasboard-course">
                <img src="/images/nodejs.png" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1212/Home">
                    CS1212 Node Js
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Server Programming with Node.js
                    </p>
                    <Link to="/Kanbas/Courses/1212/Home">Go</Link>
                </div>
            </div>
            <div id="wd-dasboard-course">
                <img src="/images/parallel.png" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1265/Home">
                    CS1265 Parallel Programming
                    </Link>
                    <p className="wd-dashboard-course-title">
                       Parallel Programming using Java
                    </p>
                    <Link to="/Kanbas/Courses/1265/Home">Go</Link>
                </div>
            </div>
            <div id="wd-dasboard-course">
                <img src="/images/game.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4789/Home">
                    CS4789 Game Development
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Game Development Course using unity
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                </div>
            </div>

            <div id="wd-dasboard-course">
                <img src="/images/quantum.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7897/Home">
                    CS7897 Qauntum Computing
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Quantum Computing course
                    </p>
                    <Link to="/Kanbas/Courses/7897/Home">Go</Link>
                </div>
            </div>

        </div>
    )
}