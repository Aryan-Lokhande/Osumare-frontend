import "./home.css";
import trust from "../assets/trust.png";
import man from "../assets/homeImg.png";
import { useState } from "react";
import Popup from "./Popup";
import Thanks from "./Thanks";
import TestimonialSection from "./TestimonialSection";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formDataList, setFormDataList] = useState([
    {
      firstName: "Aryan",
      lastName: "Lokhande",
      gender: "Male",
      languages: ["English", "Hindi"],
      email: "aryanlok2004@gmail.com",
    },
  ]);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleFormSubmit = () => {
    setShowPopup(false);
    setShowThankYou(true);
  };
  const handleCloseThankYou = () => setShowThankYou(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    languages: [],
    email: "",
  });

  return (
    <div className="home-wrapper container-fluid">
      {/* Center Text Section */}
      <div className="hero-section">
        <div className="text-center py-4 main-heroarea hero-section">
          <h1 className="fw-bold display-5 ">
            Simplify Your Life with Our <br /> Todo App
          </h1>
          <p className="text-muted mt-3 hero-subtext ">
            Stay organized and boost your productivity with our intuitive todo
            website. <br />
            Experience a modern approach to task management that fits your
            lifestyle.
          </p>
          <div className="mt-4">
            <button className="btn btn-danger me-3" onClick={handleOpenPopup}>
              Get started
            </button>

            <button className="btn btn-outline-secondary">Learn more</button>
          </div>
        </div>

        {/* Red Box and home Image */}
        <div className="container py-5 heroSplitSection">
          <div className="row align-items-stretch no-gutter">
            {/* Left Side */}
            <div className="col-md-8 d-flex herobox">
              <div className="hero-left w-100">
                <h1 className="hero-heading">
                  Organize.
                  <br />
                  Achieve.
                  <br />
                  Relax.
                </h1>
                <p className="hero-description">
                  Turn clutter into clarity, chaos into control, and dreams into
                  done.
                  <strong> Bold</strong> visions into market success
                </p>
                <div className="hero-buttons mt-4 d-flex gap-3 flex-wrap">
                  <button className="btn btn-dark rounded-pill px-4">
                    Get Started Today
                  </button>
                  <button className="btn btn-light rounded-pill px-4">
                    Discover Features
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="hero-card position-relative rounded-4 overflow-hidden shadow">
                {/* Overlay */}
                <div className="hero-overlay position-absolute top-0 start-0 p-3 text-white z-2">
                  <h5>Your Tasks.</h5>
                  <h3>Our Tools.</h3>
                </div>

                {/* Image */}
                <img
                  src={man}
                  alt="Hero Illustration"
                  className="hero-image w-100 h-auto"
                />

                {/* Footer */}
                <div className="hero-card-footer position-absolute bottom-0 start-0 w-100 d-flex align-items-center justify-content-between p-3 bg-dark bg-opacity-50 text-white z-2">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="https://dummyimage.com/40x40/000/fff&text=L"
                      alt="logo"
                      className="logo rounded-circle"
                    />
                    <div>
                      <h6 className="mb-0">Freddie Halvorson</h6>
                      <small>Chief Productivity Enthusiast</small>
                    </div>
                  </div>
                    <i class="fa-solid fa-circle-play icon-large"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="d-flex justify-content-around align-items-center mt-5 flex-wrap gap-4">
          <img
            src={trust}
            alt="logo"
            className="img-fluid w-100 h-100 object-fit-contain"
          />
        </div>
      </div>
      {/* testimonial */}
      {<TestimonialSection/>}
      <br />
      {/* displaytable */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((entry, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                {entry.firstName} {entry.lastName}
              </td>
              <td>{entry.gender}</td>
              <td>{entry.languages.join(", ")}</td>
              <td>{entry.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <Popup
          onClose={handleClosePopup}
          onFormSubmit={handleFormSubmit}
          setFormData={setFormData}
          setFormDataList={setFormDataList}
          formData={formData}
          formDataList={formDataList}
        />
      )}

      {showThankYou && <Thanks onClose={handleCloseThankYou} />}
    </div>
  );
}
