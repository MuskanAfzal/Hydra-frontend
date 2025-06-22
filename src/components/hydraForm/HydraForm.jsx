// HydraForm.jsx
import React from "react";
import "./HydraForm.css";

const HydraForm = () => {
  return (
    <div id="join" className="form-container">
      <h2 className="form-title">JOIN HYDRA</h2>
      <div className="title-line"></div>
      <p className="form-subtitle">Let's Build Your VR Experience</p>
      
      <div className="input-group">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      
      <div className="input-group">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
      </div>
      
      <input type="text" placeholder="Subject" className="full-width" />
      <textarea placeholder="Tell Us Something..."></textarea>
      
      <button className="submit-button">SEND TO HYDRA</button>
    </div>
  );
};

export default HydraForm;
