import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <>
        <>
  {/*Blog-header*/}
  <header className="blog-header py-5 border-bottom" style={{marginTop:'50px'}}>
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <a href="#">HOME</a>
        </li>
        
        <li>
          <a href="#">&gt;</a>
        </li>
        <li>
          <a href="#" className="breadcrumb-item active">
            BLOG
          </a>
        </li>
      </ul>
      <div className="row gx-md-5 align-items-center">
        <div className="col-md-6 order-md-0 order-2">
          <div className="breadcrumb-holder"></div>
          <div className="blog-content-holder pe-md-5 mb-3">
            <h1 className="fw-normal fs-3">
              Tips, Tricks, and Tutorials for Web Design, Web Development, Tech,
              Windows, and Android.
            </h1>{" "}
            <hr style={{ width: 200 }} />
            <h2 className="fs-6 small fw-light text-secondary">
              Whether you’re a beginner or an experienced professional, you’ll
              find the tips, tricks, and tutorials you need to succeed in web
              design, web development, tech, Windows, and Android on our blog.
            </h2>
            <hr style={{ width: 200 }} />
            <form role="search" className="d-flex">
              <div className="input-group">
                <button
                  className="btn btn-sm btn-success"
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#subscribe-modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-envelope-arrow-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z" />
                  </svg>{" "}
                 <Link to={'/UserRegister'} style={{textDecoration:'none',color:'white'}}> Sign-up to newsletters </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="blog-image mb-md-0 mb-3">
            <img src="images/pic-18.webp" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*Blog-header*/}
  {/*Blog post list*/}
  <div className="blog-post-list py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="list-group small text-bg-light">
            <div className="list-group-item text-bg-light d-flex fw-bold justify-content-between align-item-center">
              List of blog posts
              <span className="badge rounded-pill text-bg-warning">
                12 Posts Available
              </span>
            </div>
            <Link
              to={"/Blog1"}
              className="list-group-item list-group-item-action"
              target="_blank"
            >
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="course-image-holder">
                    <img
                      src="images/pic-19-htmltagas.jpg"
                      className="rounded img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="small">
                    10 Secret HTML5 tag that will blow your mind
                  </h5>
                  <Link
                    className="text-secondary small text-decoration-none"
                    to={"/Blog1"}
                  >
                    Discover the 10 secret HTML5 tags that can transform your
                    websites from basic to mind-blowing! Get ready to unlock
                    hidden web design powers. Click now! 🚀
                  </Link>
                  <p className="d-inine-flex align-items-center">
                    <span className="badge text-bg-dark rounded-pill me-2">
                      <strong>Posted on:</strong>
                      <span className="fw-light">2nd Aug 2023</span>
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to={"/Blog2"}
              className="list-group-item list-group-item-action"
              
            >
              <div className="row align-items-center g-3 mt-2">
                <div className="col-md-4">
                  <div className="course-image-holder">
                    <img
                      src="images/pic-20-bootstrap.jpg"
                      className="rounded img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="small">How to create navbar in Bootstrap.</h5>
                  <Link
                    className="text-secondary small text-decoration-none"
                    to={"/Blog2"}
                  >
                    In this step-by-step tutorial, you will learn How to Create
                    Navbar using Bootstrap 5. You will also learn how to
                    customize Bootstrap 5 Navbar .
                  </Link>
                  <p className="d-inine-flex align-items-center">
                    <span className="badge text-bg-dark rounded-pill me-2">
                      <strong>Posted on:</strong>
                      <span className="fw-light">12th Oct 2023</span>
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to={"/Blog3"}
              className="list-group-item list-group-item-action"
              
            >
              <div className="row align-items-center g-3 mt-2">
                <div className="col-md-4">
                  <div className="course-image-holder">
                    <img src="images/pic-21.jpg" className="rounded   img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="small">
                    How to create To-Do App in HTML,CSS and JS.
                  </h5>
                  <Link
                    className="text-secondary small text-decoration-none"
                    to={"/Blog3"}
                  >
                    Learn how to create a To-Do List app in HTML, CSS, and
                    JavaScript with our step-by-step guide. Build your skills
                    today!
                  </Link>
                  <p className="d-inine-flex align-items-center">
                    <span className="badge text-bg-dark rounded-pill me-2">
                      <strong>Posted on:</strong>
                      <span className="fw-light">6th Nov 2023</span>
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to={"/Blog4"}
              className="list-group-item list-group-item-action"
              
            >
              <div className="row align-items-center g-3 mt-2">
                <div className="col-md-4">
                  <div className="course-image-holder">
                    <img src="images/pic-22.jpg" className="rounded img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="small">
                    How to change bootstrap navbar color.
                  </h5>
                  <Link
                    className="text-secondary small text-decoration-none"
                    to={"/Blog4"}
                  >
                    In this step-by-step tutorial, you will learn How to Change
                    Bootstrap 5 Navbar Color with default and custom styles.
                    Step-by-Step guide to customization.
                  </Link>
                  <p className="d-inine-flex align-items-center">
                    <span className="badge text-bg-dark rounded-pill me-2">
                      <strong>Posted on:</strong>
                      <span className="fw-light">29th Nov 2023</span>
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="list-group small mb-3">
            <div className="list-group-item text-bg-light fw-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-archive me-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
              </svg>
              Archieves
            </div>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
            >
              2020
              <span className="badge text-bg-warning rounded-pill">14</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
            >
              2021
              <span className="badge text-bg-warning rounded-pill">42</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
            >
              2022
              <span className="badge text-bg-warning rounded-pill">23</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
            >
              2023
              <span className="badge text-bg-warning rounded-pill">71</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
            >
              2024
              <span className="badge text-bg-warning rounded-pill">8</span>
            </a>
          </div>
          <div className="list-group small mb-3">
            <div className="list-group-item text-bg-light fw-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-alarm me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
              </svg>
              Recent Posts
            </div>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center small"
              onclick="window.open('http://127.0.0.1:5500/BootStrap/Professional-site-project/blog-1.html',);"
            >
              10 Secret HTML5 Tags That Will Blow Your Mind!
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center small"
              onclick="window.open('http://127.0.0.1:5500/BootStrap/Professional-site-project/blog-2.html#',);"
            >
              How to create navbar in Bootstrap.
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center small"
              onclick="window.open('http://127.0.0.1:5500/BootStrap/Professional-site-project/blog-3.html',);"
            >
              How to create To-Do App in HTML,CSS and JS.
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center small"
              onclick="window.open('http://127.0.0.1:5500/BootStrap/Professional-site-project/blog-4.html',);"
            >
              How to change Bootstrap navbar color.
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Blog post list*/}
</>

        </>
    )
}