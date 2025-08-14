
import { useEffect, useState} from "react"
import {toast} from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function UpdateAlotStudents(){
    const [trainerId,settrainerId]=useState("")
    const [courseId,setcourseId]=useState("")
    const[studentId,setstudentId]=useState("")
    const[timeline,settimeline]=useState("")

    const[loading,setLoading]= useState(false)
    const nav = useNavigate()

    const[trainerdata,settrainerdata]=useState([]);
    const[coursedata,setcoursedata]=useState([]);
    const[customerdata,setcustomerdata]=useState([]);


    const param = useParams()
    const id = param.id


    useEffect(()=>{
        let data = {
            _id:id
        }
        ApiServices.getSingleAlotStudents(data)
        .then((res)=>{
            settrainerId(res.data.data.trainerId)
            setcourseId(res.data.data.courseId)
            setstudentId(res.data.data.studentId)
            settimeline(res.data.data.timeline)

        })
    },[id])

    const updateData=(e)=>{
        e.preventDefault()
        setLoading(true)

        let data = {
            trainerId:trainerId,
            courseId:courseId,
            studentId:studentId,
            timeline:timeline,
            _id:id
        }
        ApiServices.updateAlotStudents(data)
        .then((res)=>{
           if(res.data.success=== true){
            toast.success(res.data.message,{
              position:"top-center"
          })
          setTimeout(() => {
            setLoading(false);
            nav("/admin/manageAlotStudents");
          }, 2000);
           }
           else{
            toast.error(res.data.message)
            setTimeout(()=>{
              setLoading(false)
            },2000)
           }
        })
        .catch((err)=>{
            toast.error(err)
        })
    }
  

     useEffect(()=>{   //Copied from ManageTrainerdata becos to show the options of trainer we have to write this
        ApiServices.getTrainerData()
    
        .then((res)=>{
            settrainerdata(res.data.data)
        })
    
        .catch((err)=>{
            console.log(err)
        })
       },[])  
       console.log(trainerdata)


       useEffect(()=>{
               ApiServices.getCourseData()
           
               .then((res)=>{
                   setcoursedata(res.data.data)
               })

           
               .catch((err)=>{
                   console.log(err)
               })
              },[]) 


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
            <h1 className="fs-3 fw-strong">Update AlotedStudents</h1>
            <h2 className="fs-6 fw-normal">
            Top Courses for Career Growth
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <form onSubmit={updateData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                
                <label>Enter studentId:</label>
                <select required className="form-control" value={studentId} onChange={(e)=>{setstudentId(e.target.value)}} >
                  <option>Select Student</option>
                  {
                    customerdata.map((el)=>(
                      <>
                      <option value={el._id}>{el.name}</option>
                      </>
                    ))
                  }
                  </select> <br />


                <label>Enter timeline:</label>
                <input required className="form-control" type="text" value={timeline} onChange={(e)=>{settimeline(e.target.value)}} /> <br /> 

                

                <label>Enter Trainer Id:</label>
                <select required className="form-control" value={trainerId} onChange={(e)=>{settrainerId(e.target.value)}} >
                  <option>Select Trainer</option>
                  {
                    trainerdata.map((el)=>(
                      <>
                      <option value={el._id}>{el.name}</option>
                      </>
                    ))
                  }
                  </select> <br />
                  
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