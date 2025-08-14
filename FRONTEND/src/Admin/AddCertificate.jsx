import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useNavigate } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function AddCertificate(){
    const[certificateImg,setcertificateImg]=useState({})
    // eslint-disable-next-line no-unused-vars
    const[imageName,setimageName]=useState("")
    const[title,settitle]=useState("")
    const[customerId,setcustomerId]=useState("")
    const[customerdata,setcustomerdata]=useState([])
    
    const[loading,setLoading]=useState(false)
    const nav= useNavigate()

    const changeImage=(e)=>{
        setcertificateImg(e.target.files[0])
        setimageName(e.target.value)
    }
    const addData=(e)=>{
        e.preventDefault();
        setLoading(true)
        let data = new FormData()
        data.append("certificateImg",certificateImg)
        data.append("title",title)
        data.append("customerId",customerId)

        ApiServices.addCertificate(data)
        .then((res)=>{
            if(res.data.success===true){
              toast.success(res.data.message)
            setTimeout(() => {
              nav("/admin/ManageCertificate");
              setLoading(false);
            }, 2000);
            }
            else{
              toast.error(res.data.message)
              setTimeout(()=>{
                setLoading(false)
                settitle('')
                setcustomerId('')
                setcertificateImg('')
              },2000)
            }
        })
        .catch((err)=>{
            toast.error(err.message)
            console.log(err.errors)
        })
    }
    useEffect(()=>{
                    ApiServices.getUserRegister()
                
                    .then((res)=>{
                        setcustomerdata(res.data.data)
                    })
     
                
                    .catch((err)=>{
                        console.log(err)
                    })
                   },[]) 
    return(
        <>

        {loading?(
          <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DotLoader color="#ffc107" loading={true} size={80} />
        </div>
        ):(
          <>
            {/*Contact content*/}
  <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-content-holder text-center py-2 mb-4">
            <h1 className="fs-3 fw-strong">Add Certificate</h1>
            <h2 className="fs-6 fw-normal">
              Get in touch with us for more information about our courses
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <form onSubmit={addData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                <label>Enter certificate Image:</label>
                <input required className="form-control" type="file" onChange={changeImage} /> <br /> 
                <label>Enter title:</label>
                <input required type="text" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}} ></input> <br />

                <label>Enter Customer Name:</label>
                <select required className="form-control" onChange={(e)=>{setcustomerId(e.target.value)}} >
                  <option>Select Customer</option>
                  {
                    customerdata.map((el)=>(
                      <>
                      <option  value={el._id}>{el.name}</option>
                      </>
                    ))
                  }
                  </select> <br />

                <button type="submit" className="btn btn-warning offset-md-3 w-50" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Save</button>
            </form>
        </div>
      </div>
    </div>
  </div>
          </>
        )}
  
</>

    )
}