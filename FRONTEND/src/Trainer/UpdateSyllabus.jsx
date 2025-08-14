
import { useEffect, useState} from "react"
import {toast} from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function UpdateSyllabus(){
    const [courseId,setcourseId]=useState("")
    const [title,settitle]=useState("")
    const[totalTopics,settotalTopics]=useState("")
    const[syllabus,setsyllabus]=useState("")
    const[duration,setduration]=useState("")
    const[loading,setLoading]=useState(false)
    const nav = useNavigate()
    
    const[coursedata,setcoursedata]=useState([]);
    


    const param = useParams()
    const id = param.id


    useEffect(()=>{
        let data = {
            _id:id
        }
        ApiServices.getSingleSyllabus(data)
        .then((res)=>{
            settitle(res.data.data.title)
            setcourseId(res.data.data.courseId)
            settotalTopics(res.data.data.totalTopics)
            setsyllabus(res.data.data.syllabus)
            setduration(res.data.data.duration)

        })
    },[id])

    const updateData=(e)=>{
        e.preventDefault()
        setLoading(true)

        let data = {
            title:title,
            courseId:courseId,
            totalTopics:totalTopics,
            syllabus:syllabus,
            _id:id
        }
        ApiServices.updateSyllabus(data)
        .then((res)=>{
            toast.success(res.data.message,{
                position:"top-center"
            })
            setTimeout(() => {
                setLoading(false);
                nav("/trainer/ManageSyllabus");
              }, 2000);
        })
        .catch((err)=>{
            toast.error(err)
        })
    }


       useEffect(()=>{
               ApiServices.getCourseData()
           
               .then((res)=>{
                   setcoursedata(res.data.data)
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
            <h1 className="fs-3 fw-strong">Update Students</h1>
            <h2 className="fs-6 fw-normal">
            Top Courses for Career Growth
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <form onSubmit={updateData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                
                  
                  <label>Enter Course Id:</label>
                <select required className="form-control" value={courseId} onChange={(e)=>{setcourseId(e.target.value)}} >
                  <option>Select Course</option>
                  {
                    coursedata.map((el)=>(
                      <>
                      <option  value={el._id}>{el.name}</option>
                      </>
                    ))
                  }
                  </select> <br />

                  
                <label>Enter Title:</label>
                <input required className="form-control" type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} /> <br /> 

                
                <label>Enter Total Topics:</label>
                <input required className="form-control" type="text" value={totalTopics} onChange={(e)=>{settotalTopics(e.target.value)}} /> <br /> 


                
                <label>Enter Syllabus:</label>
                <input  required className="form-control" type="text" value={syllabus} onChange={(e)=>{setsyllabus(e.target.value)}} /> <br /> 

                
                <label>Enter Duration:</label>
                <input required className="form-control" type="text" value={duration} onChange={(e)=>{setduration(e.target.value)}} /> <br /> 



                  
                
                  
                 <br /> 

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