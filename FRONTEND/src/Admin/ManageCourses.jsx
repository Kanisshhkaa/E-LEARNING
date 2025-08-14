import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function ManageCourses(){
    const[data,setdata]=useState([])
    const[Delete,setIsDelete]=useState(false)
    useEffect(()=>{
        ApiServices.getCourseData()
    
        .then((res)=>{
            setdata(res.data.data)
        })
    
        .catch((err)=>{
            console.log(err)
        })
       },[Delete]) 

       const deleteData = (id)=>{
        console.log(id)
        setIsDelete(true)
           let data = {
             _id:id
           }
           ApiServices.deleteCourseData(data)
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
            <h1 className="fs-3 fw-strong">Courses</h1>
            <h2 className="fs-6 fw-normal">
            Top Courses for Career Growth
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
                 <th scope="col">Image</th>
                 <th scope="col">Course Name</th>
                 <th scope="col">Price</th>
                 <th scope="col">Description</th>
                 <th scope="col">CategoryId</th>
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
                        <td><img src={BASE_IMAGE_URL + el.image } height={'200px'} alt=""/></td>
                        <td>{el.name}</td>
                        <td ><span>Rs.</span>{el.price}  <span> /-</span> </td>
                        <td>{el.description}</td>
                        <td>{el.categoryId?.categoryName}</td>
                        <td><button onClick={()=>deleteData(el._id)} className="btn btn-danger">Delete</button></td>
                        <td>
                        <Link to={"/admin/UpdateCourses/" + el._id}>
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