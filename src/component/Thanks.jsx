import "../styles/Popup.css";

export default function Thanks({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container text-center">
        <i className="fas fa-heart" style={{ fontSize: '50px', color: 'red' }}></i>
        <h3 className='py2'>Thank you for connect with us.</h3>
        <p>Our team will contacting with you soon</p>
        <button className="btn-submit" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}
