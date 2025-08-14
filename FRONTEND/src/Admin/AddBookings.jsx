import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../ApiServices/ApiServices";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";

export default function AddBookings() {
  const [courseId, setcourseId] = useState("");
  const [customerId, setcustomerId] = useState("");
  const [status, setstatus] = useState("");

  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const [coursedata, setcoursedata] = useState([]);
  const [customerdata, setcustomerdata] = useState([]);

  useEffect(() => {
    ApiServices.getCourseData()
      .then((res) => {
        setcoursedata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    ApiServices.getUserRegister()
      .then((res) => {
        setcustomerdata(res.data.data);
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
      customerId: customerId,
      status:status
    };


    ApiServices.addBookings(data)
      .then((res) => {
        if(res.data.success===true){
          toast.success(res.data.message);
        setTimeout(() => {
            
            nav("/admin/ManageBookings");
            setLoading(false)
          }, 2000);
        }
        else{
          toast.error(res.data.message)
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
  <>
      {/* Contact content */}
      <div
        className="contact-content-header py-5 mb-3"
        style={{ marginTop: "50px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="contact-content-holder text-center py-2 mb-4">
                <h1 className="fs-3 fw-strong">Add Bookings</h1>
                <h2 className="fs-6 fw-normal"></h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <form
                onSubmit={addData}
                style={{
                  backgroundColor: "#8fbc8f",
                  padding: "30px 30px",
                  borderRadius: "10px",
                }}
              >
                <div className="row mb-3">
                  <div className="col-md-12">
                    <label className="form-label">Enter Course Id:</label>
                    <select
                      className="form-control"
                      value={courseId}
                      onChange={(e) => {
                        setcourseId(e.target.value);
                      }}
                    >
                      <option>Select Course</option>
                      {coursedata.map((el) => (
                        <option key={el._id} value={el._id}>
                          {el.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-12">
                    <label className="form-label">Enter Customer Id:</label>
                    <select
                      className="form-control"
                      value={customerId}
                      onChange={(e) => {
                        setcustomerId(e.target.value);
                      }}
                    >
                      <option>Select Customer</option>
                      {customerdata.map((el) => (
                        <option key={el._id} value={el._id}>
                          {el.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-12">
                        <label>Status</label>
                        <input type="text" className="form-control" value={status} onChange={(e)=>{setstatus(e.target.value)}} />
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-warning w-50"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
 )}
    </>
  );
}
