import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../ApiServices/ApiServices";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";

export default function AddSyllabus() {
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [totalTopics, setTotalTopics] = useState("");
  const [syllabus, setSyllabus] = useState("");
  const [duration, setDuration] = useState("");
  
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const [data, setData] = useState([]);
  const[trainerdata,settrainerdata]=useState([])
  const trainerId = sessionStorage.getItem("trainerId")

  useEffect(()=>{
    ApiServices.getTrainerData()
    .then((res)=>{
      settrainerdata(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  useEffect(() => {
    ApiServices.getCourseData()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addData = (e) => {
    e.preventDefault();
    setLoading(true)
    let data = {
      courseId: courseId,
      trainerId:trainerId,
      title: title,
      totalTopics: totalTopics,
      syllabus: syllabus,
      duration: duration,
    };

    ApiServices.addSyllabus(data)
      .then((res) => {
        if(res.data.success===true){
          toast.success(res.data.message);
        setTimeout(() => {
          setLoading(false);
          nav("/trainer/ManageSyllabus");
        }, 2000);
        }
        else{
          toast.error(res.data.message)
          setTimeout(()=>{
            setLoading(false)
            setCourseId('')
            setTitle('')
            setTotalTopics('')
            setSyllabus('')
            setDuration('')
          },2000)
        }
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.errors);
      });
  };

  return (
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
        <>{/* Contact content */}
        <div className="contact-content-header py-5 mb-3" style={{ marginTop: "50px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="contact-content-holder text-center py-2 mb-4">
                  <h1 className="fs-3 fw-strong">Add Syllabus</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form
                  onSubmit={addData}
                  style={{
                    backgroundColor: "#8fbc8f",
                    padding: "30px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  className="rounded-2"
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label>Enter Course Id:</label>
                      <select required
                        className="form-control"
                        value={courseId}
                        onChange={(e) => {
                          setCourseId(e.target.value);
                        }}
                      >
                        <option>Select Course</option>
                        {data.map((el) => (
                          <option value={el._id} key={el._id}>
                            {el.name}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label>Enter Course Title:</label>
                      <input
                      required
                        className="form-control"
                        type="text"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>
  
                    <div className="col-md-12 col-sm-12 mb-3">
                    <label>Enter Trainer Id:</label>
                      <select
                      required
                        className="form-control"
                        value={trainerId}
                        onChange={(e) => {
                          setCourseId(e.target.value);
                        }}
                      >
                        <option>Select Trainer</option>
                        {trainerdata.map((el) => (
                          <option value={el._id} key={el._id}>
                            {el.name}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    <div className="col-md-12 col-sm-12 mb-3">
                      <label>Enter Total Topics:</label>
                      <input
                      required
                        className="form-control"
                        type="text"
                        value={totalTopics}
                        onChange={(e) => {
                          setTotalTopics(e.target.value);
                        }}
                      />
                    </div>
  
                    <div className="col-md-12 col-sm-12 mb-3">
                      <label>Enter Syllabus:</label>
                      <input
                      required
                        className="form-control"
                        type="text"
                        value={syllabus}
                        onChange={(e) => {
                          setSyllabus(e.target.value);
                        }}
                      />
                    </div>
  
                    <div className="col-md-12 col-sm-12 mb-3">
                      <label>Enter Duration:</label>
                      <input
                        required
                        className="form-control"
                        type="text"
                        value={duration}
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                      />
                    </div>
  
                    <div className="col-md-12 col-sm-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-warning w-50"
                        
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></>
      )}
    </>
  );
}
