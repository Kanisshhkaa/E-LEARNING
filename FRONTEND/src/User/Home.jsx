import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices";

export default function Home(){
    const[mydata,setmydata]=useState([])
      
        useEffect(()=>{
          ApiServices.getCategoryData()
          .then((res)=>{
            console.log(res.data.data)
            setmydata(res.data.data)
          })
          .catch((err)=>{
            console.log(err.message)
          })
        },[])
    return(
        <>
        <>
  {/*Home banner*/}
  <header className="main-header py-5 border-bottom" style={{marginTop:'50px'}}>
    <div className="container" id="container">
      <ul className="breadcrumb">
        <li>
          <a href="#" className="breadcrumb-item active">
            HOME
          </a>
        </li>
      </ul>
      <div className="row align-items-center gx-md-3">
        <div className="col-md-6">
          <div className="home-header-text-holder pe-md-5 ">
            <h1 className="fs-3 fw-normal">
              Free and Premium Web Design Development Courses for Every Budget
            </h1>
            <h2 className="fs-5 fw-light text-secondary">
              Whether you’re a beginner just starting out or a seasoned
              professional looking to brush up your skills, we offer a wide
              range of web design development courses to meet your needs.
            </h2>
            <Link
              to={'/UserRegister'}
              className="btn btn-sm btn-success mt-2 mb-3"
            >
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
              src="images\pic-1.jpg"
              style={{ width: 480, height: "auto" }}
              className="rounded img-fluid shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*Home banner*/}
  {/*site features*/}
  <section className="site-features py-4 border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="feature-item d-flex align-items-center bg-white p-3 border rounded mb-md-0 mb-3">
            <div className="flex-shrink-0">
              <img
                src="/images/pic-2.jpg"
                className="img-fluid"
                style={{ width: 60, height: "auto" }}
              />
            </div>
            <div style={{height:'100px'}} className="flex-grow-1 ms-3">
              <h3 className="fs-6">High-Quality Lessons</h3>
              <p className="small text-secondary">
                Every video esson is made within 2 to 3 minutes concentrating on
                the point of the topic,making every course easier.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-item d-flex align-items-center bg-white p-3 border rounded mb-md-0 mb-3">
            <div className="flex-shrink-0">
              <img
                src="images\pic-3.jpg"
                className="img-fluid"
                style={{ width: 60, height: "auto" }}
              />
            </div>
            <div style={{height:'100px'}} className="flex-grow-1 ms-3">
              <h3 className="fs-6">Build for Success</h3>
              <p className="small text-secondary">
                Our courses are designed to get your career started with
                in-depth lessons and a focus on student satisfaction. Empower
                your future.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-item d-flex align-items-center bg-white p-3 border rounded mb-md-0 mb-3">
            <div className="flex-shrink-0">
              <img
                src="/images/pic-4.webp"
                className="img-fluid"
                style={{ width: 60, height: "auto" }}
              />
            </div>
            <div style={{height:'100px'}} className="flex-grow-1 ms-3">
              <h3 className="fs-6">Anywhere,Anytime Access</h3>
              <p className="small text-secondary">
                By signing up for our courses,you have unimited access to course
                content anywhere with exercise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*site features*/}
  {/*Course loop*/}
  <section className="premium-course py-5 border-bottom">
    <div className="container mt-3">
        <div className="row justify-content-center" >
          <h4 style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'italic',marginBottom:'30px'}}>Browse Courses</h4>
            <div className="col-12 d-flex flex-wrap justify-content-center">
               {
                mydata.map((el)=>(

                  <div className="card me-3 mb-3" style={{ width: "22rem",display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <img src={BASE_IMAGE_URL + el.categoryImage } height={'200px'} className="card-img-top img-fluid" alt=""/>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{el.categoryName}</h5>
                      <p className="card-text">
                       <small> {el.description}  </small>
                      </p>
                      <Link to={'/ViewCourses/'+ el._id} className="btn btn-sm btn-success rounded shadow-sm small d-inline-flex align-item-center">
            
                             View Detail
                      </Link>
                    </div>
                    </div>
                ))
               }
            </div>

           

        </div>
    </div>
</section>
  {/*Course loop*/}
  {/*Page Content*/}
  <div className="home-page-content py-4 mb-3">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="fs-5">
            Start Your Web Design and Development Career with the Best Courses.
          </h2>
          <p className="small text-secondary">
            Our web design and development courses are designed to teach you the
            skills you need to build and design beautiful, user-friendly
            websites. You’ll learn about HTML, CSS, JavaScript, and more
            advanced topics like responsive design and content management
            systems.
          </p>
          <h2 className="fs-5">
            Web Design and Development Tips, Tricks, and Tutorials.
          </h2>
          <p className="small text-secondary">
            Covering everything from HTML and CSS to responsive design and
            content management systems.Covering everything from HTML and CSS to
            responsive design and content management systems
          </p>
          <Link
            to={'/UserRegister'}
            className="btn btn-sm btn-success d-inline-flex-align-items-center mb-md-0 mb-2"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-info-circle me-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            Sign up to get more info
          </Link>
        </div>
        <div className="col-md-6">
          <div className="home-content-image">
            <img
              src="images\pic-7.jpg"
              className="img-fluid full-width shadow-sm rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Page Content*/}
</>

        </>
    )
}