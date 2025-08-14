import { useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"


export default function TrainerDashboard(){
 
  const[alotcoursedata,setalotcoursedata]=useState([])
  const[alotstudata,setalotstudata]=useState([])


  useEffect(()=>{
    let data = {
      trainerId:sessionStorage.getItem("trainerId")
    }
    ApiServices.getAlotCourses(data)
    .then((res)=>{
      setalotcoursedata(res.data.data.length)
    })
  },[])



  useEffect(()=>{
    let data = {
      trainerId:sessionStorage.getItem("trainerId")
    }
    ApiServices.getAlotStudents(data)
    .then((res)=>{
      setalotstudata(res.data.data.length)
    })
  },[])
  
  return(
    <>
    <section>
    <div className="container" style={{marginTop:'120px'}}>
      <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      <div className="col-md-6 col-sm-12">
        <h1 className="text-center" style={{fontStyle:'italic'}}>Welcome Back!!</h1>
        <h3 className="text-center" style={{color:'grey'}}>Trainer</h3>
      </div>
      
      </div> <br />
      <div className="row justify-content-center">
      

        <div className="card me-5 mt-4" style={{width: '18rem'}}>
        <img className="card-img-top" src="/images/trainer1.jpg" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Aloted Courses : {alotcoursedata}</h5>
            
          </div>
        </div>


        <div className="card me-5 mt-4" style={{width: '18rem'}}>
        <img className="card-img-top" src="/images/trainer2.jpg" height={'200px'} alt=""/>
          <div className="card-body">
            <h5 className="card-title">Aloted Students : {alotstudata}</h5>
            
          </div>
        </div> 

      </div>  <br /> <br />
    </div>
    </section>
    </>
  )
}