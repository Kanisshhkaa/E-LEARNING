import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useNavigate } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function AddCourses(){
  const [name,setname]=useState("")
  const [price,setprice]=useState("")
  const[image,setimage]=useState({})
  // eslint-disable-next-line no-unused-vars
  const[imageName,setimageName]=useState("")
  const[description,setdescription]=useState("")
  const[categoryId,setcategoryId]=useState("")
  
  const[loading,setLoading]=useState(false)

  const nav = useNavigate()

  const[data,setdata]=useState([]);


   useEffect(()=>{
    ApiServices.getCategoryData()

    .then((res)=>{
        setdata(res.data.data)
    })

    .catch((err)=>{
        console.log(err)
    })
   },[])  

  const changeImage=(e)=>{
      setimage(e.target.files[0])
      setimageName(e.target.value)
  }
  const addData=(e)=>{
      e.preventDefault();
      setLoading(true)
      let data = new FormData()
      data.append("name",name)
      data.append("image",image)
      data.append("price",price)
      data.append("description",description)
      data.append("categoryId",categoryId)

      console.log("Submitting data :", Object.fromEntries(data))

      ApiServices.addCourse(data)
      .then((res)=>{
          if(res.data.success===true){
            toast.success(res.data.message)
          setTimeout(() => {
            setLoading(false);
            nav("/admin/ManageCourses");
          }, 2000);
          }
          else{
            toast.error(res.data.message)
            setTimeout(()=>{
              setLoading(false)
              setname('')
              setprice('')
              setimage('')
              setdescription('')
              setcategoryId('')
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
            <h1 className="fs-3 fw-strong">Courses</h1>
            <h2 className="fs-6 fw-normal">
            Top Courses for Career Growth
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <form onSubmit={addData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                  <label>Enter Course Name:</label>
                   <input required className="form-control" type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> 
                  </div>
                  <div className="col-md-6 col-sm-12">
                     <label>Enter Course Price:</label>
                     <input required className="form-control" type="number" value={price} onChange={(e)=>{setprice(e.target.value)}} /> <br /> 
                  </div>
                </div>
                <label>Enter Description:</label>
                <textarea required rows={'2'} className="form-control" value={description} onChange={(e)=>{setdescription(e.target.value)}} ></textarea> <br /> 

                <label>Enter Image:</label>
                <input required type="file" onChange={changeImage} className="form-control" /> <br />

                <label>Enter Category:</label>
                <select required className="form-control" value={categoryId} onChange={(e)=>{setcategoryId(e.target.value)}} >
                  <option>Select Category</option>
                  {
                    data.map((el)=>(
                      <>
                      <option value={el._id}>{el.categoryName}</option>
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