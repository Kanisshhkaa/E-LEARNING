import { useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


export default function ManageSyllabus(){
    const[data,setdata]=useState([])
    const[isDelete,setIsDelte]=useState(false)
    

    useEffect(()=>{
      let data = {
        trainerId:sessionStorage.getItem("trainerId")
      }
      
        ApiServices.getSyllabus(data)
    
        .then((res)=>{
            setdata(res.data.data)
        })
    
        .catch((err)=>{
            console.log(err)
        })
       },[isDelete]) 

       const deleteData = (id)=>{
           setIsDelte(true)
           let data = {
       
             _id:id
           }
       
        ApiServices.deleteSyllabus(data)
         .then((res)=>{
           toast.success(res.data.message)
           setIsDelte(false)
         })
         .catch((err)=>{
           console.log(err)
         })
         }

       
    return(
        <>
         {/*Contact content*/}
  <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-content-holder text-center py-2 mb-4">
            <h1 className="fs-3 fw-strong">Manage Syllabus</h1>
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
                 <th scope="col">Course Id</th>
                 <th scope="col">Title</th>
                 <th scope="col">Total Topics</th>
                 <th scope="col">Syllabus</th>
                 <th scope="col">Duration</th>
                 <th scope="col">Delete</th>
                 <th scope="col">Update</th>
               </tr>
             </thead>
             <tbody>
               {
                   data.map((el,index)=>(
                       <>
                       <tr>
                        <th scope="row">{index+1}</th>
                        <td>{el.courseId?.name}</td>
                        <td>{el.title}</td>
                        <td>{el.totalTopics}</td>
                        <td>{el.syllabus}</td>
                        <td>{el.duration}</td>
                        <td>
                          <Link onClick={()=>{deleteData(el._id)}} >
                          <button className="btn btn-danger">Delete</button>
                          </Link>
                        </td>
                        <td>
                        <Link to={"/trainer/UpdateSyllabus/" + el._id}>
                         <button className="btn btn-success">Update</button>
                         </Link>
                        </td>
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