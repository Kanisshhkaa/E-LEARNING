import { useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"



export default function ViewAlotedCourses(){
    const[data,setdata]=useState([])

    useEffect(()=>{
      let data = {
        trainerId:sessionStorage.getItem("trainerId")
      }
        ApiServices.getAlotCourses(data)
    
        .then((res)=>{
            setdata(res.data.data)
        })
    
        .catch((err)=>{
            console.log(err)
        })
       },[]) 

      

       
    return(
        <>
         {/*Contact content*/}
  <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-content-holder text-center py-2 mb-4">
            <h1 className="fs-3 fw-strong">View Alot Courses</h1>
            <h2 className="fs-6 fw-normal">
            
            </h2>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col table-responsive">
           <table class="table ms-4">
             <thead>
               <tr>
                 <th scope="col">Sr No.</th>
                 <th scope="col">TrainerId</th>
                 <th scope="col">Course Id</th>
                 <th scope="col">Deadline</th>
                 <th scope="col">Description</th>
               </tr>
             </thead>
             <tbody>
               {
                   data.map((el,index)=>(
                       <>
                       <tr>
                        <th scope="row">{index+1}</th>
                        <td>{el.trainerId?.name}</td>
                        <td>{el.courseId?.name}</td>
                        <td>{el.deadline}</td>
                        <td>{el.description}</td>
                        
                        </tr>
                       </>
                   ))
               }
            
             </tbody>
           </table>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}