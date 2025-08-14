import { useState } from "react"
import ApiServices from "../ApiServices/ApiServices"
import { toast } from "react-toastify"

export default function Contact(){

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[subject,setsubject]=useState("")
  const[message,setmessage]=useState("")
  const addData=(e)=>{
          e.preventDefault()
          let data = {
            name:name,
            email:email,
            subject:subject,
            message:message
          }
          
  
          ApiServices.addQueries(data)
                  .then((res)=>{
                      toast.success(res.data.message)
                  })
                  .catch((err)=>{
                      toast.error(err.message)
                  })
      }
    return(
        <>
        <>
  {/*Contact content*/}
  <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">&gt;</a>
        </li>
        <li>
          <a href="#" className="breadcrumb-item active">
            CONTACT
          </a>
        </li>
      </ul>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-content-holder text-center py-2 mb-4">
            <h1 className="fs-3 fw-strong">Contact Us</h1>
            <h2 className="fs-6 fw-normal">
              Get in touch with us for more information about our courses
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.32351653855!2d77.56655534610272!3d12.92921149244515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15986765d7d9%3A0xbba2fea7014e5087!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1739268348349!5m2!1sen!2sin"
            style={{padding:'0px -30px'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        </div>
      </div>
    </div>
  </div>
  {/*Contact content*/}
  <div className="conatiner">
    <div className="row mb-2">
      <div className="col-md-6 col-sm-12">
        <h2 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Contact Us</h2>
        <div className="data" style={{display:'flex',justifyContent:'center',alignItems:'center',color:'grey'}}>
        <p>Feel Free to use the form and drop us an email. <br />Old-Fashioned Phone calls work to....</p>
        </div>
        <div className="iconsContainer" style={{display:'flex',justifyContent:'left',alignItems:'center',marginLeft:'120px'}}>
          <i className="bi bi-telephone me-2 text-danger" style={{fontSize:'1.4rem'}}></i> 
          9876543218
        </div>

        <div className="iconsContainer" style={{display:'flex',justifyContent:'left',alignItems:'center',marginLeft:'120px'}}>
          <i className="bi bi-envelope me-2 text-danger" style={{fontSize:'1.4rem'}}></i> 
          contact@codesphere.com
        </div>

        <div className="iconsContainer" style={{display:'flex',justifyContent:'left',alignItems:'center',marginLeft:'120px'}}>
          <i className="bi bi-geo-alt-fill me-2 text-danger" style={{fontSize:'1.4rem'}}></i> 
          Jaynagar, Bangalore ,Karnatka , India.
        </div>
        
      </div>
      <div className="col-md-6 col-sm-12 bg-light rounded-2 form-data">
      <form onSubmit={addData} className="form">
          <div className="row">
            <div className="col-md-6 coll-12 mt-3">
              <i className="fas fa-user" aria-hidden="true" />
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                required=""
                value={name} onChange={(e)=>{setname(e.target.value)}}
              />
            </div>
            <div className="col-md-6 col-12 mt-sm-3 mt-3">
              <i className="fas fa-envelope" aria-hidden="true" />
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                value={email} onChange={(e)=>{setemail(e.target.value)}}
                required=""
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <i className="fas fa-sticky-note" aria-hidden="true" />
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                value={subject} onChange={(e)=>{setsubject(e.target.value)}}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <i className="fa fa-commenting" aria-hidden="true" />
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <input
                type="text"
                placeholder="Message"
                value={message} onChange={(e)=>{setmessage(e.target.value)}}
                className="form-control"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row mt-2 text-center">
            <div className="col-md-12 mt-2">
            <button className="btn btn-success" type="submit">
                Send Message
            </button>
            </div>
          </div>{" "}
          
      </form> <br />
      </div>
    </div>  <br /> <br />
  </div>


</>

        </>
    )
}