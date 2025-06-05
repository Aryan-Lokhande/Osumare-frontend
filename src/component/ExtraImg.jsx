import uncoverImg from "../assets/uncoverImg.jpg";
import "../styles/extraImg.css"; 

export default function ExtraImg() {
  return (
    <div className="container hero-section2">
      <div className="row align-items-center">
        <div className="col-md-6 mb-3 mb-md-0">
          <img src={uncoverImg} alt="Mobile app preview" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Start Organizing Your Life Today</h2>
          <p>
            Join us now and transform your productivity with our intuitive to-do list platform!
          </p>
          <div className="d-flex ">
            <button className="btn btn-danger ">Sign Up</button>
            <button className="btn btn-outline-danger ">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

 