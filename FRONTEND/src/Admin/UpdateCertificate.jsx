/* eslint-disable no-extra-boolean-cast */
import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function UpdateCategories(){
    const[certificateImg,setcertificateImg]=useState({})   //curly braces are used bcos data is coming from backend in json form
    const[imageName,setimageName]=useState("")
    const[previousImage,setpreviousImage]=useState([])
    const[title,settitle]=useState("")
    
    const[loading,setLoading]=useState(false)
    const nav = useNavigate()
    const param = useParams()
    const id = param.id
    
    useEffect(()=>{
        let data={
            _id:id
        }
        console.log(data)
        ApiServices.getSingleCertificates(data)
        .then((res)=>{
            settitle(res.data.data.title)
            setpreviousImage(res.data.data.certificateImg)
        })
    },[id])

    const changeImage=(e)=>{
        setcertificateImg(e.target.files[0])
        setimageName(e.target.value)
    }
    const updateData=(e)=>{
        e.preventDefault();
        setLoading(true)
        let data = new FormData()
       
        if(!!imageName){
            data.append("certificateImg",certificateImg)
        }
        data.append("_id",id)
        data.append("title",title)


        ApiServices.updateCertificates(data)
        .then((res)=>{
            toast.success(res.data.message)
            console.log(res.data.error)
            setTimeout(() => {
              setLoading(false);
              nav("/admin/ManageCertificate");
            }, 2000);
        })
        .catch((err)=>{
            toast.error(err.message)
            console.log(err.errors)
        })
    }

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
    <>{/*Contact content*/}
    <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-content-holder text-center py-2 mb-4">
              <h1 className="fs-3 fw-strong">Update Categories</h1>
              <h2 className="fs-6 fw-normal">
                Get in touch with us for more information about our courses
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
              <form onSubmit={updateData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                  
  
                  <div className="col-12">
                      <div className="form-group">
  
                      <label>Enter title:</label>
                      <input required className="form-control" type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} /> <br />
  
                      <label>Previous Image:</label>
                      <img src={BASE_IMAGE_URL + previousImage}  height={'200PX'} alt="" />
                      </div>
                  </div>
  
                  <label>Enter Course Image:</label>
                  <input className="form-control" type="file" onChange={changeImage} /> <br /> 
                  
                  <button type="submit" className="btn btn-warning offset-md-3 w-50" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Save</button>
              </form>
          </div>
        </div>
      </div>
    </div></>
  )}
  
</>

    )
}