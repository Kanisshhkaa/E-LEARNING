import { useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"

export default function ManageQueries(){
    const[data,setdata]=useState([])

    useEffect(()=>{
        ApiServices.getQueriesData()
    
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
       

    return(
        <>
         {/*Contact content*/}
  <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-content-holder text-center py-2 mb-4">
            <h1 className="fs-3 fw-strong">Queries</h1>
            <h2 className="fs-6 fw-normal">
            Feel Free to post your queries
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
                 <th scope="col">Name</th>
                 <th scope="col">Email</th>
                 <th scope="col">Subject</th>
                 <th scope="col">Message</th>
                 <th scope="col">Reply</th>
               </tr>
             </thead>
             <tbody>
               {
                   data.map((el,index)=>(
                       <>
                       <tr>
                        <th scope="row">{index+1}</th>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.subject}</td>
                        <td>{el.message}</td>
                        <td> <button
                              className="btn btn-success"
                              onClick={() => handleReply(el?.email, el?.subject, el?.message)}
                          >
                              Reply
                          </button></td>
                       
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