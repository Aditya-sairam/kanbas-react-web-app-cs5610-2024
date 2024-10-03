import { Link } from "react-router-dom";

export default function Dashboard () {
    return (
        <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4" style={{margin:"0 50px"}}>
            <div className="wd-dashboard-course col" style={{ width: "260px",margin:"40px 0" }}>
              <div className="card rounded-3 overflow-hidden" style={{height:"350px"}}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/reactjs.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                       CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px", margin:"40px 0"}}>
            <div className="card rounded-3 overflow-hidden" style={{height:"350px"}}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/data.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS6767 Data Science
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Data Science using R
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>

            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px",margin:"40px 0" }}>
            <div className="card rounded-3 overflow-hidden" style={{height:"350px"}}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/python.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5678 Python Programming Course
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Backend Development using python
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px",margin:"40px 0" }}>
            <div className="card rounded-3 overflow-hidden" style={{height:"350px"}}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/nodejs.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS1212 Node Js
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Server Programming with Node.js
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px",margin:"40px 0" }}>
            <div className="card rounded-3 overflow-hidden" style={{height:"350px"}}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/parallel.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS1265 Parallel Programming
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Parallel Programming using Java
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px",margin:"40px 0" }}>
            <div className="card rounded-3 overflow-hidden" style={{height:"350px"}}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/game.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS4789 Game Development
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Game Development Course using unity
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px",margin:"40px 0" }}>
            <div className="card rounded-3 overflow-hidden" style={{height:"350px"}}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/quantum.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS7897 Qauntum Computing
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Quantum Computing course
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <br /><br /><br /><br />
        </div></div>
      
    )
}