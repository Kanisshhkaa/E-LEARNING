import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { Link } from "react-router-dom"

export default function Categories(){

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
         {/*Home banner*/}
  <header className="main-header py-5 border-bottom" style={{marginTop:'50px'}}>
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
            CATEGORY
          </a>
        </li>
      </ul>
      <div className="row align-items-center gx-md-3">
        <div className="col-md-6">
          <div className="home-header-text-holder pe-md-5">
            <h1 className="fs-3 fw-normal">Top Courses Category for Career Growth</h1>
            <hr style={{ width: 150 }} />
            <h2 className="fs-5 fw-light text-secondary">
              Explore courses in IT, development, design, and more. Invest in
              your future with high-quality online learning.
            </h2>
            <hr style={{ width: 150 }} />
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="home-header-image-holder">
            <img
              src="images\categories.jpg"
              style={{ width: 480, height: "auto" }}
              className="rounded img-fluid shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*Home banner*/}


<section className="premium-course py-5 border-bottom">
    <div className="container mt-3">
        <div className="row justify-content-center" >
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
                      <Link to={'/ViewCourses/'+ el._id} className="btn btn-lg btn-success rounded shadow-sm small d-inline-flex align-item-center">
            
                             View Courses
                      </Link>
                    </div>
                    </div>
                ))
               }
            </div>

           

        </div>
    </div>
</section>


        </>
    )
}