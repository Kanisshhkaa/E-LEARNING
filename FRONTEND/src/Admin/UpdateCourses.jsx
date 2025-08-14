/* eslint-disable no-extra-boolean-cast */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices";
import { useNavigate, useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";

export default function AddCategories() {
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [image, setimage] = useState({});
    const [imageName, setimageName] = useState("");
    const [previousImage, setpreviousImage] = useState([]);
    const [description, setdescription] = useState("");
    const [categoryId, setcategoryId] = useState("");
    
    const [loading, setLoading] = useState(false);
    const [mydata, setmydata] = useState([]);
    const nav = useNavigate();
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        ApiServices.getCategoryData()
            .then((res) => {
                setmydata(res.data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []); // Add dependency array to avoid infinite loop

    useEffect(() => {
        let data = {
            _id: id
        };
        console.log(data);
        ApiServices.getSingleCourseData(data)
            .then((res) => {
                setname(res.data.data.name);
                setprice(res.data.data.price);
                setdescription(res.data.data.description);
                setcategoryId(res.data.data.categoryId); // Set the categoryId
                setpreviousImage(res.data.data.image);
            });
    }, [id]);

    const changeImage = (e) => {
        setimage(e.target.files[0]);
        setimageName(e.target.value);
    };

    const updateData = (e) => {
        e.preventDefault();
        setLoading(true)
        let data = new FormData();
        data.append("name", name);
        if (!!imageName) {
            data.append("image", image);
        }
        data.append("_id", id);
        data.append("description", description);
        data.append("price", price);
        data.append("categoryId", categoryId);

        console.log("Submitting data :", Object.fromEntries(data));

        ApiServices.updateCourses(data)
            .then((res) => {
                toast.success(res.data.message);
                console.log(res.data.error);

                setTimeout(() => {
                    setLoading(false);
                    nav("/admin/ManageCourses");
                }, 2000);
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
             {/*Contact content*/}
             <div className="contact-content-header py-5 mb-3" style={{ marginTop: '50px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="contact-content-holder text-center py-2 mb-4">
                                <h1 className="fs-3 fw-strong">Update Courses</h1>
                                <h2 className="fs-6 fw-normal">
                                    Top Courses for Career Growth
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={updateData} style={{ backgroundColor: '#8fbc8f', padding: '30px 30px' }} className="rounded-2">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <label>Enter Course Name:</label>
                                        <input required className="form-control" type="text" value={name} onChange={(e) => { setname(e.target.value) }} /> <br />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <label>Enter Course Price:</label>
                                        <input required className="form-control" type="number" value={price} onChange={(e) => { setprice(e.target.value) }} /> <br />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <label>Enter Description:</label>
                                        <input required className="form-control" type="text" value={description} onChange={(e) => { setdescription(e.target.value) }} /> <br />
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <label>Enter Category Id:</label>
                                        <select required className="form-control" value={categoryId} onChange={(e) => { setcategoryId(e.target.value) }}>
                                            <option value="">Select Category</option>
                                            {
                                                mydata.map((el) => (
                                                    <option key={el._id} style={{ color: 'black' }} value={el._id}>{el.categoryName}</option>
                                                ))
                                            }
                                        </select> <br />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Previous Image:</label>
                                    <img src={BASE_IMAGE_URL + previousImage} height={'200PX'} alt="" />
                                </div> <br />

                                <label>Enter Image:</label>
                                <input className="form-control" type="file" onChange={changeImage} /> <br />

                                <button type="submit" className="btn btn-warning offset-md-3 w-50" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Save</button>
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