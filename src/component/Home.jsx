import "./home.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import Popup from "./Popup";
import Thanks from "./Thanks";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formDataList, setFormDataList] = useState([{    firstName: "Aryan",
    lastName: "Lokhande",
    gender: "Male",
    languages: ["English", "Hindi"],
    email: "aryanlok2004@gmail.com",}]);

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
    <div className="home-wrapper container">
      {/* Top Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm px-3">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="logo" width="70px" className="me-2" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                More Option
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-danger px-4">Log In</button>
          <button className="btn btn-danger px-4">Sign Up</button>
        </div>
      </nav>

      {/* Center Text Section */}
      <div className="text-center py-4 main-heroarea">
        <h1 className="fw-bold display-5">
          Simplify Your Life with Our <br /> Todo App
        </h1>
        <p className="text-muted mt-3">
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
      <div className="d-flex flex-column flex-lg-row gap-4 align-items-center mt-5">
        <div className="home-left bg-danger text-white rounded p-4 flex-fill">
          <h2 className="fw-bold display-4">
            Organize.
            <br />
            Achieve.
            <br />
            Relax.
          </h2>
          <p className="mt-3">
            Turn clutter into clarity, chaos into control, and dreams into done.{" "}
            <br />
            Bold visions into market success.
          </p>
          <div className="mt-4">
            <button className="btn btn-light me-2">Get Started Today</button>
            <button className="btn btn-outline-light">Discover Features</button>
          </div>
        </div>

        <div className="home-right flex-fill text-center">
          <img
            src="/logos/google.png"
            alt="home"
            className="img-fluid rounded"
          />
          <p className="mt-3 mb-1 fw-bold">Freddie Halvorson</p>
          <p className="text-muted">Chief Productivity Enthusiast</p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="d-flex justify-content-around align-items-center mt-5 flex-wrap gap-4">
        <img src="/logos/google.png" alt="Google" height="30" />
        <img src="/logos/facebook.png" alt="Facebook" height="30" />
        <img src="/logos/youtube.png" alt="YouTube" height="30" />
        <img src="/logos/pinterest.png" alt="Pinterest" height="30" />
        <img src="/logos/twitch.png" alt="Twitch" height="30" />
      </div>

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
