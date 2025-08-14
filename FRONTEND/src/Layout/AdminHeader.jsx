import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminHeader(){
  const [token , settoken ] = useState(sessionStorage.getItem("token"));
  const nav=useNavigate();
  useEffect(()=>{
    const interval  = setInterval(()=>{
      settoken(sessionStorage.getItem("token")) //Update Token whenever it changes

    },1000);
    return ()=> clearInterval(interval);
  },[])

  console.log("Token in Header:",token)
  const logout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("name")
    sessionStorage.removeItem("userId")
    toast.success("Logout Successfuly")
    setTimeout(()=>{
      nav('/')
    },1000)
  }
    return(
        <>
 <>
  {/*navbar*/}
  <nav className="navbar navbar-expand-lg bg-success fixed-top border-bottom small blur-filter">
    <div className="container">
      <a href="index.html" className="navbar-brand">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg"
          className="rounded-circle"
          style={{ width: 45, height: "auto" }}
        />
        <b style={{ color: "white" }}> Code Sphere </b>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-content"
        aria-controls="navbar-content"
        aria-expanded="false"
        aria-label="Navbar Toogler"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse navbar-collapse-admin
        "
        id="navbar-content"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="admin_li nav-item">
            <Link to={'/admin'} className="nav-link" aria-current="page" style={{color:'white'}}>
              Dashboard
            </Link>
          </li>
          <div className="nav-item dropdown">
            <Link
            to={"#"}
          className="nav-link dropdown-toggle text-white"
          data-bs-toggle="dropdown"
        >
          Categories
            </Link>
            <div className="dropdown-menu">
              <Link to={"/admin/AddCategories"} className="dropdown-item">
                Add Category
              </Link>
              <Link to={"/admin/ManageCategories"} className="dropdown-item">
                Manage Category
              </Link>

            </div>
        </div>

        <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
             >
                 Courses
            </Link>
            <div className="dropdown-menu">
              <Link to={"/admin/AddCourses"} className="dropdown-item">
                Add Courses
              </Link>
              <Link to={"/admin/ManageCourses"} className="dropdown-item">
                Manage Courses
              </Link>
            </div>
        </div>

        <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
             >
                 Bookings
            </Link>
            <div className="dropdown-menu">

              <Link to={"/admin/ManageBookings"} className="dropdown-item">
                View Bookings
              </Link>
            </div>
        </div>


        <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
             >
                 AlotCourses
            </Link>
            <div className="dropdown-menu">
              <Link to={"/admin/AddAlotCourses"} className="dropdown-item">
                Add AlotCourses
              </Link>
              <Link to={"/admin/ManageAlotCourses"} className="dropdown-item">
                Manage AlotCourses
              </Link>
            </div>
        </div>

        <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
             >
                 AlotStudents
            </Link>
            <div className="dropdown-menu">
              <Link to={"/admin/AddAlotStudents"} className="dropdown-item">
                Add AlotStudents
              </Link>
              <Link to={"/admin/manageAlotStudents"} className="dropdown-item">
                Manage AlotStudents
              </Link>
            </div>
        </div>

        <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
             >
                 Queries
            </Link>
            <div className="dropdown-menu">
              
              <Link to={"/admin/ManageQueries"} className="dropdown-item">
                Manage Queries
              </Link>
            </div>
        </div>
        <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
             >
                 Certificates
            </Link>
            <div className="dropdown-menu">
              <Link to={"/admin/AddCertificate"} className="dropdown-item">
                Add Certificate
              </Link>
              <Link to={"/admin/ManageCertificate"} className="dropdown-item">
                Manage Certificate
              </Link>
            </div>
        </div>

        <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
             >
                 Trainer
            </Link>
            <div className="dropdown-menu">
              <Link to={"/admin/AddTrainer"} className="dropdown-item">
                Add Trainer
              </Link>
              <Link to={"/admin/ManageTrainer"} className="dropdown-item">
                Manage Trainer
              </Link>
            </div>
        </div>
          
        </ul>
        <div className="dropdown">
          <button
            className="btn btn-sm btn-danger dropdown-toggle rounded-4"
            type="button"
            id="profileDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "white" }}
          >
            <i className="bi bi-person-circle me-2" />
            
            Admin 
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="profileDropdown"
          >
           
            
            <li>
            {
            token? (
              <>
              <Link onClick={logout} className="dropdown-item text-danger" href="#">
                <i
                  className="bi bi-box-arrow-right me-2"
                  style={{ color: "black" }}
                />
                Logout
              </Link>
            </>
            ):(
              <>
              
            
              
              </>
            )
           }
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  {/*navbar*/}
</>




        </>
    )
}