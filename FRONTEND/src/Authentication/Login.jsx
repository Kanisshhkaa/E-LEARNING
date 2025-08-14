import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { email, password };

    axios.post("http://localhost:3040/api/user/login", data)
      .then((res) => {
        if (res.data.success) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("name", res.data.data.name);
          sessionStorage.setItem("userId", res.data.data._id);
          sessionStorage.setItem("userType", res.data.data.userType);

          if (res.data.data.userType === 1) {
            toast.success(res.data.message, { position: 'top-center' });
            setTimeout(() => {
              nav("/admin");
              setLoading(false);
            }, 3000);
          } else if (res.data.data.userType === 2) {
            if (res.data.data.status === "Unblocked") {
              sessionStorage.setItem("trainerId", res.data.data.trainerId);
              toast.success(res.data.message, { position: 'top-center' });
              setTimeout(() => {
                nav("/trainer");
                setLoading(false);
              }, 3000);
            } else {
              sessionStorage.clear();
              toast.error("You need admin approval! Please wait for approval", { position: 'top-center' });
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }
          } else if (res.data.data.userType === 3) {
            sessionStorage.setItem("customerId", res.data.data.customerId);
            toast.success(res.data.message, { position: 'top-center' });
            setTimeout(() => {
              nav("/");
              setLoading(false);
            }, 3000);
          }
        } else {
          toast.error(res.data.message, { position: 'top-center' });
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message, { position: 'top-center' });
        setLoading(false);
      });
  };

  return (
    <>
      {loading?(
        <>
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
        </>
      ):(
        <>
        {/* Contact content */}
      <div className="contact-content-header py-5 mb-3" style={{ marginTop: '100px' }}>
        <div className="container">
          <ul className="breadcrumb">
            <li><a href="#">HOME</a></li>
            <li><a href="#">&gt;</a></li>
            <li><a href="#" className="breadcrumb-item active">LOGIN</a></li>
          </ul>
        </div>
      </div>

      {/* Login Form */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <h2 style={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              fontStyle: 'italic',
              marginTop: '-50px',
              color: '#333'
            }}>Login</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <form onSubmit={handleForm} style={{
              backgroundColor: '#f8f9fa',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ced4da'
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ced4da'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-warning"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: '#ffc107',
                  color: '#fff',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>  <br /> <br /> <br /> <br /> <br />
          </div>
        </div>
      </div>
        </>
      )}
    </>
  );
}
