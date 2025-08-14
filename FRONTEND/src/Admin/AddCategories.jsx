import { useState } from "react"
import {toast} from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useNavigate } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function AddCategories(){
    const [categoryName,setcategoryName]=useState("")
    const[categoryImage,setcategoryImage]=useState({})
    // eslint-disable-next-line no-unused-vars
    const[imageName,setimageName]=useState("")
    const[description,setdescription]=useState("")
    
    const[loading,setLoading]=useState(false)
    const nav= useNavigate()

    const changeImage=(e)=>{
        setcategoryImage(e.target.files[0])
        setimageName(e.target.value)
    }
    const addData=(e)=>{
        e.preventDefault();
        setLoading(true)
        let data = new FormData()
        data.append("categoryName",categoryName)
        data.append("categoryImage",categoryImage)
        data.append("description",description)

        console.log("Submitting data :", Object.fromEntries(data))

        ApiServices.addCategories(data)
        .then((res)=>{
            if(res.data.success===true){
              toast.success(res.data.message)
            setTimeout(() => {
              nav("/admin/ManageCategories");
              setLoading(false);
            }, 2000);
            }
            else{
              toast.error(res.data.message)
              setTimeout(()=>{
                setLoading(false)
                setcategoryName('')
                setdescription('')
                setcategoryImage('')
              },2000)
            }
        })
        .catch((err)=>{
            toast.error(err.message)
            console.log(err.errors)
        })
    }
    return(
        <>
{
  loading?(
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
    <>  {/*Contact content*/}
    <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-content-holder text-center py-2 mb-4">
              <h1 className="fs-3 fw-strong">Add Categories</h1>
              <h2 className="fs-6 fw-normal">
                Get in touch with us for more information about our courses
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
              <form onSubmit={addData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                  <label>Enter Category Name:</label>
                  <input required className="form-control" type="text" value={categoryName} onChange={(e)=>{setcategoryName(e.target.value)}} /> <br />
                  <label>Enter Category Image:</label>
                  <input required className="form-control" type="file" onChange={changeImage} /> <br /> 
                  <label>Enter Description:</label>
                  <textarea rows={'2'} className="form-control" value={description} onChange={(e)=>{setdescription(e.target.value)}} ></textarea> <br />
                  <button type="submit" className="btn btn-warning offset-md-3 w-50" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Save</button>
              </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
</>

    )
}