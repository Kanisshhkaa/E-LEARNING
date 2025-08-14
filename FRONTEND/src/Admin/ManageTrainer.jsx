import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import {toast} from 'react-toastify'

export default function ManageTrainer(){
   const[data,setdata]=useState([]);
   
   const[isUpdate,setisUpdate]=useState(false)

   useEffect(()=>{
    ApiServices.getTrainerData()

    .then((res)=>{
        setdata(res.data.data)

    })

    .catch((err)=>{
        console.log(err)
    })
   },[isUpdate])  
   
   //[] is dependency when we delete data we dont need to refresh again and agian data will remove automatically


   const updateStatus = (id,status,userId)=>{
    setisUpdate(true)
    console.log("ID IS ", id)
    console.log("USERID IS ", userId)
    let data = {
      _id:id,
      status:status
    }
    ApiServices.updateTrainerStatus(data)
    .then((res)=>{
      toast.success(res.data.message)
      setisUpdate(false)
      
    })
    .catch((err)=>{
      console.log(err)
    })
    let data1 = {
      _id:userId,
      status:status
    }
    ApiServices.updateUserStatus(data1)
    .then((res)=>{
      console.log(res.data.message)
      
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
            <h1 className="fs-3 fw-strong">Manage Trainer</h1>
            <h2 className="fs-6 fw-normal">
              
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
      <th scope="col">Profile</th>
      <th scope="col">Trainer Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Contact</th>
      <th scope="col">Gender</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((el,index)=>(
            <>
            <tr >
             <th scope="row">{index+1}</th>
             
             <td><img src={BASE_IMAGE_URL + el.profile } height={'100px'} alt="" /></td>
             <td>{el.name}</td>
             
             <td>{el.email}</td>
             <td>{el.password}</td>
             <td>{el.contact}</td>
             <td>{el.gender}</td>
             <td>{el.status}</td>
             <td>
              {
                el.status == "Blocked"?(
                  <>
                  <button onClick={()=>{updateStatus(el._id,"Unblocked",el.userId)}} className="btn btn-success">UnBlock</button>
                  </>
                ):el.status == "Unblocked"?(
                  <button onClick={()=>{updateStatus(el._id,"Blocked",el.userId)}} className="btn btn-danger">Block</button>
                ):(
                  <>

                  </>
                )
              }
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