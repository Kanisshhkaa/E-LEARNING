export default function Footer(){
    return(
        <>
        <>
  {/*Subscribe*/}
  <section className="subscribe py-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="subscribe-heading text-white text-center text-md-end">
            <h5 className="fs-3 fw-light m-0 mb-md-0 mb-3">
              Subscribe for newsletters
            </h5>
            <form className="d-flex justify-content-center mt-2">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control border-3"
                  placeholder="Your Email"
                  style={{ width: 130, height: 35 }}
                />
                <button className="btn btn-sm btn-success" type="submit">
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
                  </svg>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Subscribe*/}
  {/*Main footer*/}
  <footer className="main-footer text-bg-light py-5 small">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="brand-icon mb-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg"
              className="rounded-circle"
              style={{ width: 30, height: "auto" }}
            />{" "}
            <b> Code Sphere </b>
            <address className="small text-secondary">
              Jaynagar, Bangalore , <br />
              Karnatka , India. <br />
              560011
            </address>
            <p className="small ">
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
              </svg>
              contact@codesphere.com
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <h6>Quick Links</h6>
          <ul className="list-unstyled small">
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h6>Education</h6>
          <ul className="list-unstyled small">
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Code Sphere Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Free Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Tips &amp; Tricks
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h6>Other Pages</h6>
          <ul className="list-unstyled small">
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary small">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6>Connect with us</h6>
          <p>
            <a
              href="#"
              className="btn btn-sm btn-primary rounded-pill px-md-3 d-inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-facebook me-2 mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              <span className="d-md-block d-none">Facebook</span>
            </a>
            <a
              href="#"
              className="btn btn-sm btn-info rounded-pill px-md-3 d-inline-flex mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-twitter me-2 mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
              <span className="d-md-block d-none">Twitter</span>
            </a>
            <a
              href="#"
              className="btn btn-sm btn-danger rounded-pill px-md-3 d-inline-flex mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-instagram me-2 mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <span className="d-md-block d-none">Instagram</span>
            </a>
            <a
              href="#"
              className="btn btn-sm btn-warning rounded-pill px-md-3 d-inline-flex mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-youtube mt-1 me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
              <span className="d-md-block d-none">Youtube</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/*Main footer*/}
  {/*CopyRight*/}
  <div className="copy py-4 small" style={{ backgroundColor: "black" }}>
    <div className="container">
      <div className="row text-center text-white justify-content-center">
        <p className="m-0 small">Copyright @copy; 2024. All Rights Reserved.</p>
      </div>
    </div>
  </div>
  {/*CopyRight*/}
  {/*Mobile Padding*/}
  <div
    className="mobile-padding pt-5 pb-4 d-md-none"
    style={{ backgroundColor: "black" }}
  />
  {/*Mobile Padding*/}
  {/*Sticky footer*/}
  <div className="d-md-none d-block d-flex p-3 fixed-bottom justify-content-center blur-filter shadow-lg">
    <a
      href="#"
      className="rounded-pill btn btn-sm btn-warning small px-3 fw-bold"
    >
      Sign-up for Free
    </a>
  </div>
  {/*Sticky footer*/}
</>

        </>
    )
}