import logoImg from '../assets/logo.png';

export default function Navbar() {
    const handleSignUpClick = () => {
        alert('click on Get Started button');
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4" style={{ height: '90px' }}>
      <a href="/" className="navbar-brand d-flex align-items-center">
        <img
          src={logoImg}
          alt="Company Logo"
          className="me-2"
          style={{ width: '100%', height: '70px', marginLeft: "90px" }}
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end bg-white" id="navbarNav" style={{ marginRight: '80px' }}>
        <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link text-dark" href="#about-us">About Us</a></li>
          <li className="nav-item"><a className="nav-link text-dark" href="#features">Features</a></li>
          <li className="nav-item"><a className="nav-link text-dark" href="#more-option">More Option</a></li>
          <li className="nav-item"><a className="nav-link text-dark" href="#contact">Contact</a></li>
        </ul>
        <div className="ms-lg-3 d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
          <button className="btn btn-outline-danger">Log In</button>
          <button className="btn btn-danger" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

