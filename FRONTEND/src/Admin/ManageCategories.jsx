import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ManageCategories(){
   const[data,setdata]=useState([]);
   const[isDelete,setIsDelte]=useState(false)

   useEffect(()=>{
    ApiServices.getCategoryData()

    .then((res)=>{
        setdata(res.data.data)
    })

    .catch((err)=>{
        console.log(err)
    })
   },[isDelete])  
   
   //[] is dependency when we delete data we dont need to refresh again and agian data will remove automatically


   const deleteData = (id)=>{
    setIsDelte(true)
    let data = {

      _id:id
    }

    ApiServices.deleteCategoryData(data)
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
            <h1 className="fs-3 fw-strong">Manage Categories</h1>
            <h2 className="fs-6 fw-normal">
              Get in touch with us for more information about our courses
            </h2>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12 table-responsive">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Category Name</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((el,index)=>(
            <>
            <tr >
             <th scope="row">{index+1}</th>
             <td>{el.categoryName}</td>
             <td><img src={BASE_IMAGE_URL + el.categoryImage } height={'200px'} alt="" /></td>
             <td>{el.description}</td>
             <td><button onClick={()=>{deleteData(el._id)}} className="btn btn-danger">Delete</button></td>
             <td>
              <Link to={"/admin/updatecategory/" + el._id}>
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