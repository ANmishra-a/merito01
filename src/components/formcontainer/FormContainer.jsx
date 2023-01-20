import React, { useState, useEffect } from "react";
import "./form.css";
function FormContainer() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBackground, setSetShowBackground] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="form_main_container">
      {screenWidth > 900 ? (
        <div className="form_left_container">
          <img
            loading="lazy"
            src="https://academy.merito.in/wp-content/uploads/2022/12/Ebook-e1672386646372.jpeg"
            alt="ebook 12 Tips to Crack Your Job Interview"
          />
        </div>
      ) : (
        ""
      )}
      <div className="form_right_container">
        <div className="form_heading">
          <p className="form_heading_p">
            Sign up and get a FREE copy of our eBook on
            <span>12 Tips to Crack Your Job Interview</span> in your inbox.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <button className="signUp_btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormContainer;
