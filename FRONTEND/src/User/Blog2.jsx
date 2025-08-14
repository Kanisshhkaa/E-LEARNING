export default function Blog2(){
    return(
        <>
        <>
  {/*Blog-header*/}
  <header className="blog-header py-5 border-bottom" style={{marginTop:'50px'}}>
    <div className="container">
      <div className="row gx-md-5 align-items-center">
        <div className="col-md-6 order-md-0 order-2">
          <div className="breadcrumb-holder"></div>
          <div className="blog-content-holder pe-md-5 mb-3">
            <h1 className="fw-normal fs-3">
              How to Create Navbar using Bootstrap 5.
            </h1>{" "}
            <hr style={{ width: 200 }} />
            <h2 className="fs-6 small fw-light text-secondary">
              In this step-by-step tutorial, you will learn How to Create Navbar
              using Bootstrap 5. You will also learn how to customize Bootstrap
              5 Navbar.
            </h2>
            <p className="d-inine-flex align-items-center">
              <span className="badge text-bg-dark rounded-pill me-2">
                <strong>Posted on:</strong>
                <span className="fw-light">2nd Aug 2023</span>
              </span>
            </p>
            <hr style={{ width: 200 }} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="blog-image mb-md-0 mb-3">
            <img
              src="images/bootstrap.jpg"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*Blog-header*/}
  {/*Blog-content*/}
  <section className="blog-content py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <p className="small">
            Hi, welcome to this simple Bootstrap 5 Tutorial, here you will learn
            How to Create Navbar using Bootstrap 5. A well-designed navbar is
            crucial for any website. It provides users with a clear
            understanding of the website’s structure and allows them to easily
            navigate between different pages. In this guide, we’ll walk you
            through the process of creating a beautiful and functional navbar
            using Bootstrap 5.
          </p>
          <br />
          <p> Contents</p>
          <ul className="small">
            <li>Set the Stage</li>
            <li>Building the Foundation</li>
            <li> Navigation for All Sizes</li>
            <li> Branding Your Site</li>
            <li>Navigate with Ease</li>
            <li>Collapse and Conquer (Optional)</li>
            <li> Making it Yours</li>
            <li>Unleash Your Creativity (continued)</li>
            <li>Celebrate Your Success!</li>
          </ul>
          <p />
        </div>
        <div className="col-md-4">
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
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center small"
              onclick="window.open('http://127.0.0.1:5500/BootStrap/Professional-site-project/blog-4.html',);"
            >
              How to create an effective navbar in Bootstrap.
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Blog-content*/}
</>

        </>
    )
}