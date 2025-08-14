import { toast } from "react-toastify"
import { DotLoader } from "react-spinners"
import ApiServices from "../ApiServices/ApiServices"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function UserRegister() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [loading, setLoading] = useState(false)
    const nav = useNavigate()

    const addData = (e) => {
        e.preventDefault()
        let data = {
            name: name,
            email: email,
            password: password,
            contact: contact
        }

        setLoading(true) // Start loading
        ApiServices.UserRegister(data)
            .then((res) => {
                toast.success(res.data.message)
                setTimeout(() => {
                    nav('/Login')
                    setLoading(false)
                }, 3000)
            })
            .catch((err) => {
                toast.error(err.message)
                setLoading(false)
            })
    }

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
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">&gt;</a>
                        </li>
                        <li>
                            <a href="#" className="breadcrumb-item active">
                                USER REGISTER
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Contact content */}

            {/* Registration Form */}
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
                        }}>USER REGISTRATION</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <form onSubmit={addData} style={{
                            backgroundColor: '#f8f9fa',
                            padding: '25px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        required
                                        style={{
                                            padding: '10px',
                                            borderRadius: '4px',
                                            border: '1px solid #ced4da'
                                        }}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        style={{
                                            padding: '10px',
                                            borderRadius: '4px',
                                            border: '1px solid #ced4da'
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label mt-2">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    style={{
                                        padding: '10px',
                                        borderRadius: '4px',
                                        border: '1px solid #ced4da'
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label mt-2">Contact:</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    pattern="^\d{10}$"
                                    minLength={10}
                                    maxLength={10}
                                    required
                                    value={contact}
                                    onChange={(e) => { setContact(e.target.value) }}
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
                                {loading ? "Loading..." : "SignUp"}
                            </button>
                        </form>  <br /> <br /> <br />
                    </div>
                </div>
            </div>
                </>
            )}
        </>
    )
}
