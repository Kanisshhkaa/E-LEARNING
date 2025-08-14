import { useState } from "react"
import {toast} from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useNavigate } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function AddTrainer(){
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  
  const[password,setpassword]=useState("")
  const[contact,setcontact]=useState("")
  const[gender,setgender]=useState("")
  const[loading,setLoading]=useState(false)
  const[profile,setprofile]=useState([])
  // eslint-disable-next-line no-unused-vars
  const[profilename,setprofilename]=useState("")

  const nav = useNavigate()

  // eslint-disable-next-line no-unused-vars
  const[data,setdata]=useState([]);

  const changeImage=(e)=>{
    setprofile(e.target.files[0])
    setprofilename(e.target.value)
}
const addData=(e)=>{
    e.preventDefault();
    setLoading(true)
    let data = new FormData()
    data.append("name",name)
    data.append("email",email)
    data.append("password",password)
    data.append("contact",contact)
    data.append("gender",gender)
    data.append("profile",profile)

      


      ApiServices.addTrainer(data)
      .then((res)=>{
        console.log("data is:",res.data.data)
          if(res.data.success===true){
            toast.success(res.data.message)
          setTimeout(() => {
            setLoading(false);
            nav("/admin/ManageTrainer");
          }, 2000);
          }
          else{
            toast.error(res.data.message)
            setTimeout(()=>{
              setLoading(false)
              setname('')
              setemail('')
              setpassword('')
              setcontact('')
              setgender('')
              setprofile('')
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
    <>{/*Contact content*/}
    <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-content-holder text-center py-2 mb-4">
              <h1 className="fs-3 fw-strong">Trainers</h1>
              <h2 className="fs-6 fw-normal">
              Top Trainers for Career Growth
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
              <form onSubmit={addData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                  <div className="row">
  
                    <div className="col-md-6 col-sm-12">
                    <label>Enter Trainer Name:</label>
                     <input className="form-control" type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> 
                    </div>
                    <div className="col-md-6 col-sm-12">
                       <label>Enter Trainer email:</label>
                       <input className="form-control" type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /> <br /> 
                    </div>
                  </div>
  
                  <label>Enter Profile Image:</label>
                  <input type="file" className="form-control" onChange={changeImage} /> <br />
  
                  <label>Enter Password:</label>
                  <input className="form-control" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} /> <br /> 
  
  
                  <label>Enter contact:</label>
                  <input className="form-control" pattern="^\d{10}$" minLength={10} maxLength={10}  type="text" value={contact} onChange={(e)=>{setcontact(e.target.value)}} /> <br /> 
  
                  <label>Enter gender:</label>
                  <input className="form-control" type="text" value={gender} onChange={(e)=>{setgender(e.target.value)}} /> <br /> 
  
  
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