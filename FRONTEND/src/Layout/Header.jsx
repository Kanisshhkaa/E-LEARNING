import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header(){
  const [token , setToken ] = useState(sessionStorage.getItem("token"));
  const nav = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setToken(sessionStorage.getItem("token")); // Update Token whenever it changes
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log("Token in Header:", token);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("userId");
    toast.success("Logout Successfuly");
    setTimeout(() => {
      nav('/');
    }, 1000);
  }

  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-light fixed-top border-bottom small blur-filter">
        <div className="container">
          <Link to={"#"} className="navbar-brand">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg"
              className="rounded-circle"
              style={{ width: 45, height: "auto" }}
            />
            <b> Code Sphere </b>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/About"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Categories"} className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Premium_Courses"} className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Blog"} className="nav-link">
                  Blog
                </Link>
              </li>
              {/* Only show "View Certificates" if the user is logged in */}
              {token ? (
                <li className="nav-item">
                  <Link to={"/Viewcertificate"} className="nav-link">
                    View Certificates
                  </Link>
                </li>
              ):(
                <>
                </>
              )}

              {token ? (
                <li className="nav-item">
                  <Link to={"/MyBookings"} className="nav-link">
                    My Bookings
                  </Link>
                </li>
              ):(
                <>
                
                </>
              )}

              <li className="nav-item">
                <Link to={"/Contact"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            {token ? (
              <div className="ms-auto me-1 d-flex gap-2 mb-2 mb-md-0 align-items-center">
                <Link onClick={logout} className="btn btn-sm btn-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-person-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    <path
                      fillRule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  LogOut
                </Link>
              </div>
            ) : (
              <div className="">
                <Link to={"/UserRegister"} className="btn btn-sm btn-danger me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                  Sign-up
                </Link>

                <Link to={"/Login"} className="btn btn-sm btn-warning me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                  Login
                </Link>
              </div>
            )}
           
          </div>
        </div>
      </nav>
      {/* navbar */}
    </>
  );
}
