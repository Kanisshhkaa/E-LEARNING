import { useEffect, useState } from "react";
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices";
import { toast } from "react-toastify";
import { Link} from "react-router-dom";
import React from 'react';
import { loadStripe } from "@stripe/stripe-js";

export default function Premium_Courses() {
  const [mydata, setmydata] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 // const [loading, setloading] = useState("");
  //const nav = useNavigate();
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    ApiServices.getCourseData()
      .then((res) => {
        console.log(res.data.data);
        setmydata(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCourses(mydata);
    } else {
      const filtered = mydata.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchQuery, mydata]);

  const addBookingData = (courseId, price) => {
    let data = {
      customerId: sessionStorage.getItem("customerId"),
      courseId: courseId
    };

    ApiServices.addBookings(data)
      .then((res) => {
        toast.success(res.data.message);
        sessionStorage.setItem("bookingDetails", JSON.stringify(data));
        makePayment(courseId, price);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const makePayment = async (courseId, price) => {
    const stripe = await loadStripe("pk_test_51R7XJKRoF1SYIkBCkidKyJ8ySK3FdxWBRFyBgp8g81FWce7KbHmMEOMOhhd1bBSpY0M0NjdVDXN6dg9IDfzb4gks00YEkv5eup");

    try {
      const token = sessionStorage.getItem("token");
      const customerId = sessionStorage.getItem("customerId");

      if (!token || !customerId) {
        toast.error("Authentication required. Please log in.");
        return;
      }

      const bookingDetails = { customerId, courseId, price };
      const response = await fetch("http://localhost:3040/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": token
        },
        body: JSON.stringify(bookingDetails),
      });

      const session = await response.json();

      if (session.id) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        toast.error("Failed to retrieve Stripe session ID.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed: " + error.message);
    }
  };

  return (
    <>
      <header className="main-header py-5 border-bottom" style={{ marginTop: '50px' }}>
        <div className="container">
          <ul className="breadcrumb">
            <li><a href="#">HOME</a></li>
            <li><a href="#">&gt;</a></li>
            <li><a href="#">COURSES</a></li>
          </ul>
          <div className="row align-items-center gx-md-3">
            <div className="col-md-6">
              <div className="home-header-text-holder pe-md-5">
                <h1 className="fs-3 fw-normal">Top Courses for Career Growth</h1>
                <hr style={{ width: 150 }} />
                <h2 className="fs-5 fw-light text-secondary">
                  Explore courses in IT, development, design, and more. Invest in
                  your future with high-quality online learning.
                </h2>
                <hr style={{ width: 150 }} />
                <p className="small">Features included:</p>
                <ul className="list-unstyled small text-secondary">
                  <li>✔ Full lifetime access</li>
                  <li>✔ Access on mobile and TV</li>
                  <li>✔ Certificate of completion</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-header-image-holder">
                <img
                  src="/images/pic-10.jpg"
                  style={{ width: 480, height: "auto" }}
                  className="rounded img-fluid shadow-sm"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search bar */}
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            /> 
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <section className="premium-course py-5 border-bottom">
  <div className="container mt-3">
    <div className="row justify-content-center">
      <div className="col-12 d-flex flex-wrap justify-content-center">
        {filteredCourses.length === 0 ? (
          <div className="text-center mt-5">
            <h5 className="text-muted">No related courses available.</h5>
          </div>
        ) : (
          filteredCourses.map((el) => (
            <div className="card me-3 mb-3" style={{ width: "22rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={el._id}>
              <img src={BASE_IMAGE_URL + el.image} height={'200px'} className="card-img-top img-fluid" alt={el.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">
                  <small>{el.description}</small>
                  <p>Rs.{el?.price}/-</p>
                </p>
                <div className="col-12">
                  <Link to={'/viewSyllabus/' + el._id}>
                    <button className="btn btn-sm btn-warning rounded shadow-sm small d-inline-flex align-item-center">
                      View Syllabus
                    </button>
                  </Link>
                  {token && (
                    <button onClick={() => addBookingData(el._id, el.price)} className="btn btn-sm btn-success rounded ms-4 shadow-sm small d-inline-flex align-item-center">
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
</section>

    </>
  );
}
