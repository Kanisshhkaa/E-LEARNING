import { useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"


export default function Dashboard(){
  const[categorydata,setcategorydata]=useState([])
  const[coursedata,setcoursedata]=useState([])
  const[trainerdata,settrainerdata]=useState([])
  const[bookingdata,setbookingdata]=useState([])
  const[querydata,setquerydata]=useState([])
  const[studata,setstudata]=useState([])
  
  useEffect(()=>{
    ApiServices.getCategoryData()
    .then((res)=>{
      setcategorydata(res.data.data.length)
    })
  })

  useEffect(()=>{
    ApiServices.getCourseData()
    .then((res)=>{
      setcoursedata(res.data.data.length)
    })
  })

  useEffect(()=>{
    ApiServices.getTrainerData()
    .then((res)=>{
      settrainerdata(res.data.data.length)
    })
  })

  useEffect(()=>{
    ApiServices.getBookings()
    .then((res)=>{
      setbookingdata(res.data.data.length)
    })
  })

  useEffect(()=>{
    ApiServices.getQueriesData()
    .then((res)=>{
      setquerydata(res.data.data.length)
    })
  })

  useEffect(()=>{
    ApiServices.getUserRegister()
    .then((res)=>{
      setstudata(res.data.data.length)
    })
  })
  
  return(
    <>
    <section>
    <div className="container" style={{marginTop:'120px'}}>
      <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      <div className="col-md-6 col-sm-12">
        <h1 className="text-center" style={{fontStyle:'italic'}}>Welcome Back!!</h1>
        <h3 className="text-center" style={{color:'grey'}}>Admin</h3>
      </div>
      
      </div> <br />
      <div className="row justify-content-center">
      <div className="card me-3 mt-5" style={{width: '18rem'}}>
          <img className="card-img-top" src="/images/admin1.png" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Categories : {categorydata}</h5>
            
          </div>
    </div> <br /> <br />

        <div className="card me-3 mt-5" style={{width: '18rem'}}>
        <img className="card-img-top" src="/images/admin2a.jpg" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Courses : {coursedata}</h5>
            
          </div>
        </div>

        <div className="card me-3 mt-5" style={{width: '18rem'}}>
        <img className="card-img-top" src="/images/admin3.png" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Trainers : {trainerdata}</h5>
            
          </div>
        </div>


        <div className="card me-3 mt-4" style={{width: '18rem'}}>
        <img className="card-img-top" src="/images/admin4.webp" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Bookings : {bookingdata}</h5>
            
          </div>
        </div>


        <div className="card me-3 mt-4" style={{width: '18rem'}}>
        <img className="card-img-top" src="/images/admin5.webp" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Queries : {querydata}</h5>
            
          </div>
        </div> 


        <div className="card me-3 mt-4" style={{width: '18rem'}}>
        <img className="card-img-top" src="/images/admin6.jpg" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Students : {studata}</h5>
            
          </div>
        </div> 

      </div>  <br /> <br />
    </div>
    </section>
    </>
  )
}