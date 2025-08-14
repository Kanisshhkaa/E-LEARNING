import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { Link } from "react-router-dom";


export default function ManageBookings(){
   const[data,setdata]=useState([]);
  

   useEffect(()=>{
    ApiServices.getBookings()

    .then((res)=>{
        setdata(res.data.data)
    })

    .catch((err)=>{
        console.log(err)
    })
   },[])  

   const handleReply = (email, subject, message) => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailURL, '_blank');
};
   
   //[] is dependency when we delete data we dont need to refresh again and agian data will remove automatically


   
     /* const updateStatus = (id,status,userId)=>{
        setisUpdate(true)
       let data = {
         _id:id,
         status:status
       }
       ApiServices.updateBookingStatus(data)
       .then((res)=>{
         toast.success(res.data.message)
         console.log(res.data.message)
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
         */
  
    return(
        <>
  {/*Contact content*/}
  <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-content-holder text-center py-2 mb-4">
            <h1 className="fs-3 fw-strong">View Bookings</h1>
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
      <th scope="col">Course Id</th>
      <th scope="col">Customer Id</th>
      <th scope="col">Alot Starting Date/Reply</th>
      
      
    </tr>
  </thead>
  <tbody>
    {
        data.map((el,index)=>(
            <>
            <tr >
             <th scope="row">{index+1}</th>
             <td>{el.courseId?.name}</td>
             
             <td>{el.customerId?.name}</td>

             <td> <button
                              className="btn btn-warning"
                              onClick={() => handleReply(el?.email, el?.subject, el?.message)}
                          >
                              Reply
              </button></td>
            {/* <td>{el.status}</td>
             <td>
              {
                el.status == "Approved"?(
                  <>
                  <button onClick={()=>{updateStatus(el._id,"Reject",el.userId)}} className="btn btn-danger">Reject</button>
                  </>
                ):el.status == "Reject"?(
                  <button onClick={()=>{updateStatus(el._id,"Approved",el.userId)}} className="btn btn-success">Approved</button>
                ):(
                  <>

                  </>
                )
              }
             </td>  */}
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