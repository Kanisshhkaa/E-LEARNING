import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import {useParams } from "react-router-dom"


export default function ViewSyllabus(){
   const[mydata,setmydata]=useState([])
 
  
   
   
   let params = useParams()
   const id=params.id
   useEffect(()=>{
    let data = {
        courseId:id
    }
    ApiServices.getSyllabus(data)
    .then((res)=>{
        setmydata(res.data.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   })

    return(
        <>
        <h4 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'150px'}}>What You'll Learn in this Course :-</h4>

        <div className="container" style={{marginBottom:'100px'}}>
            <div className="row">
                <div className="col-12">
                    {
              mydata.map((el) => (
                <div  key={el._id} className="container my-4 p-3 border rounded shadow-sm bg-light">
                  <div className="row align-items-center">
                    <div className="col-md-8 col-sm-12">
                      <h5 className="fw-bold">{el.title}</h5>
                      <p><strong>Total Topics:</strong> {el.totalTopics}</p>
                      <p><strong>Duration:</strong> {el.duration}</p>
                      <p>{el.syllabus}</p>
                     
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                      <img
                        src={BASE_IMAGE_URL + el.courseId?.image}
                        alt="Course"
                        className="img-fluid rounded"
                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                      />
                    </div> 
                  </div>
                </div>  
              ))
              
            }

                </div>
            </div>
        </div>
        </>
    )
}