import { useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


export default function ManageAlotStudents(){
    const[data,setdata]=useState([])
    const[isDelete,setIsDelete]=useState(false)

    useEffect(()=>{
        ApiServices.getAlotStudents()
    
        .then((res)=>{
            setdata(res.data.data)
        })
    
        .catch((err)=>{
            console.log(err)
        })
       },[isDelete]) 

      const deleteData = (id)=>{
        setIsDelete(true)
        let data = {
          _id:id
        }
        ApiServices.deleteAlotStudents(data)
        .then((res)=>{
          toast.success(res.data.message)
          setIsDelete(false)
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
            <h1 className="fs-3 fw-strong">Manage Alot Students</h1>
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
                 <th scope="col">Timeline</th>
                 <th scope="col">StudentId</th>
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
                        <td>{el.trainerId?.name}</td>
                        <td>{el.courseId?.name}</td>
                        <td>{el.timeline}</td>
                        <td>{el.studentId?.name}</td>
                        <td>
                        <Link onClick={()=>{deleteData(el._id)}} >
                          <button className="btn btn-danger">Delete</button>
                        </Link>
                        </td>

                        <td>
                        <Link to={"/admin/UpdateAlotStudents/" + el._id}>
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