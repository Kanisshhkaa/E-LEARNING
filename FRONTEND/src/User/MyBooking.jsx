import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"

export default function MyBooking(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        let data = {
            customerId:sessionStorage.getItem("customerId")
        }
        ApiServices.getBookings(data)
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })
    return(
        <>
        <div className="container" style={{marginTop:'120px'}}>
            <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'italic',marginBottom:'20px'}}>My Bookings </h1>
            <div className="row">
              {
                data?.map((el)=>(
                    <>
                      {
                        el.status == "Approved"?(
                            <>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card mb-5 mx-auto " style={{ width: "22rem" }}>
                                 <img className="card-img-top" src={BASE_IMAGE_URL+ el.courseId?.image } alt="Card image cap" style={{height:'200px'}} />
                                 <div className="card-body">
                                   <h5 className="card-title">{el.courseId?.name}</h5>
                                   <h6>{el.courseId?.description}</h6>
                                  
                                 </div>
                        </div>

                </div> 
                            </>
                        ):null
                      }
                    </>
                ))
              }
            </div>
        </div>
        </>
    )
}