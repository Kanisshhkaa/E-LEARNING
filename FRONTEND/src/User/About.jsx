import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
        <>
  {/*About banner*/}
  <header className="about-header py-5 border-bottom" style={{marginTop:'50px'}}>
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
            ABOUT
          </a>
        </li>
      </ul>
      <div
        className="row align-items-center gx-md-3"
        style={{ paddingTop: "-100px" }}
      >
        <div className="col-md-6">
          <div className="home-header-text-holder pe-md-5">
            <h1 className="fs-3 fw-normal align-item-center">
              Free and Premium Web Design Development Courses for Every Budget
            </h1>
            <h2 className="fs-5 fw-light text-secondary">
              Welcome to Code Sphere, your premier destination for online
              learning. Our mission is to provide high-quality courses and
              training programs to individuals and organizations around the
              world.
            </h2>
            <Link to={'/UserRegister'} className="btn btn-sm btn-success mt-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-person-add"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
              </svg>
              Sign-up to get started
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="home-header-image-holder">
            <img
              src="images\pic-8.png"
              style={{ width: 420, height: "auto" }}
              className="rounded-circle img-fluid shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*About banner*/}
  {/*About section*/}
  <section className="about-content py-4 mb-3">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="about-content-header text-center">
            <h3 className="fs-4 fw-normal">Welcome to Code Sphere</h3>
            <p className="text-secondary small">
              Welcome to Code Sphere,Our mission is to provide high-quality
              courses and training programs to individuals and organizations
              around the world.
            </p>
            <div className="collapse small text-secondary" id="ReadMoreContent">
              We value innovation, creativity, and excellence in everything we
              do. We believe in making online learning accessible to everyone,
              regardless of their background or location.
            </div>
            <a
              href="#ReadMoreContent"
              data-bs-toggle="collapse"
              className="btn btn-sm btn-success mt-1"
              role="button"
              aria-expanded="false"
              aria-controls="ReadMoreContent"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="row gx-4 align-item-center mt-4">
        <div className="col-md-4">
          <div className="about-content-image">
            <img
              src="images\pic-9.jpg"
              alt=""
              className="rounded img-fluid full-width mb-md-0 mb-3"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="about-content-holder">
            <p className="text-secondary small">
              Code Sphere was founded in 2022 with the goal of making online
              learning accessible to everyone. Our team of experts has years of
              experience in creating engaging and effective online courses.
            </p>
            <p className="text-secondary small">
              Our mission is to provide high-quality courses and training
              programs that help individuals and organizations achieve their
              goals. We strive to make online learning fun, engaging, and
              effective
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="about-content-holder">
            <p className="text-secondary small">
              We value innovation, creativity, and excellence in everything we
              do. We believe in making online learning accessible to everyone,
              regardless of their background or location.
            </p>
            <p className="text-secondary small">
              Our mission is to provide high-quality courses and training
              programs that help individuals and organizations achieve their
              goals. We strive to make online learning fun, engaging, and
              effective
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*About section*/}
</>

        </>
    )
}