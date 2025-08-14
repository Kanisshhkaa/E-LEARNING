import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Trainerheader(){
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
            <a href="/trainer" className="nav-link" aria-current="page" style={{color:'white'}}>
              Dashboard
            </a>
          </li>
          

         <div className="nav-item dropdown">
          <Link to={"#"} className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Syllabus</Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={"/trainer/AddSyllabus"}>Add Syllabus</Link>
            <Link className="dropdown-item" to={"/trainer/ManageSyllabus"}>Manage Syllabus</Link>
          </div>
         </div>

         
          
          <li className="nav-item admin_li">
            <Link to={'/trainer/viewalotcourses'} className="nav-link" style={{color:'white'}}>
              View AlotCourses
            </Link>
          </li>
          <li className="nav-item admin_li">
            <Link to={'/trainer/viewalotstudents'} className="nav-link" style={{color:'white'}}>
              View AlotStudents
            </Link>
          </li>
          
          
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
            Trainer
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="profileDropdown"
          >
            <li>
              <Link className="dropdown-item" to={'/trainer/Profile'}>
                <i className="bi bi-people me-2" style={{ color: "black" }} />
                Profile
              </Link>
            </li>

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
    )
}