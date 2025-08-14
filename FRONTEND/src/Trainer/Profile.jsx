import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"

export default function Profile(){
    const[name,setname] = useState("")
    const[email,setemail]= useState("")
    const[contact,setcontact]=useState("")
    const[gender,setgender]=useState("")
    const[profile,setprofile]=useState([])
    const[id,setid]=useState("")

    

    useEffect(()=>{
        let data = {
            _id:sessionStorage.getItem("trainerId")
        }
        ApiServices.getSingleTrainerData(data)

        .then((res)=>{
            setname(res.data.data.name)
            setemail(res.data.data.email)
            setcontact(res.data.data.contact)
            setgender(res.data.data.gender)
            setprofile(res.data.data.profile)
            setid(res.data.data._id)
        })
    })
    console.log(BASE_IMAGE_URL+profile)

    return(
        <>
        <div className="container" style={{marginTop:'120px'}}>
            <div className="row">
                <div className="col-md-6 col-sm-12 mx-auto">
                <div className="card mx-auto" style={{ width: "25rem" }}>
                     <img className="card-img-top rounded-circle img-fluid mx-auto" style={{height:'200px',width:'200px'}} src={BASE_IMAGE_URL + profile } alt="Card image cap" />
                     <div className="card-body">
                       <h5 className="card-title text-left">Name : {name}</h5>
                       <h5 className="card-title text-left">Email : {email}</h5>
                       <h5 className="card-title text-left">Contact : {contact}</h5>
                       <h5 className="card-title text-left">Gender : {gender}</h5>
                    
                       <Link to={'/trainer/updateprofile/' + id}>
                       <button className="btn btn-success offset-4 mt-2">
                         Update Profile
                       </button>
                       </Link>
                     </div>
                  </div>
                </div>
            </div>
        </div>

        </>
    )
}