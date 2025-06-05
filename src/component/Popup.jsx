import "../styles/Popup.css";

export default function Popup({
  onClose,
  onFormSubmit,
  formData,
  setFormData,
  formDataList,
  setFormDataList,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Push new entry to parent list
    setFormDataList([...formDataList, formData]);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      languages: [],
      email: "",
    });
    console.log(formData);
    // Show thank you popup
    onFormSubmit();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          x
        </button>
        <h3>Get Started Today!</h3>
        <p>Fill in your details and take control of your tasks.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }                
              />
            </div>
          </div>

          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                required
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />{" "}
              Female
            </label>
          </div>

          <label>Language</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="English"
                checked={formData.languages.includes("English")}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({
                    ...formData,
                    languages: formData.languages.includes(value)
                      ? formData.languages.filter((lang) => lang !== value)
                      : [...formData.languages, value],
                  });
                }}
              />
              English
            </label>

            <label>
              <input
                type="checkbox"
                value="Hindi"
                checked={formData.languages.includes("Hindi")}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({
                    ...formData,
                    languages: formData.languages.includes(value)
                      ? formData.languages.filter((lang) => lang !== value)
                      : [...formData.languages, value],
                  });
                }}
              />
              Hindi
            </label>

            <label>
              <input
                type="checkbox"
                value="Marathi"
                checked={formData.languages.includes("Marathi")}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({
                    ...formData,
                    languages: formData.languages.includes(value)
                      ? formData.languages.filter((lang) => lang !== value)
                      : [...formData.languages, value],
                  });
                }}
              />
              Marathi
            </label>
          </div>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <div className="terms">
            <label>
              <input type="checkbox" /> I agree to the{" "}
              <span className="highlight">terms and conditions</span>
            </label>
          </div>

          <button type="submit" className="btn-submit">
            Done
          </button>
        </form>
      </div>
    </div>
  );
}
