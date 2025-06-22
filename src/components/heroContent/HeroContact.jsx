import React from "react";
import "./HeroContact.css"; // Import the CSS file for styling

const HeroContact = () => {
  return (
    <div id="contact" className="hero-contact">
      <div className="hero-item">
        <div className="icon">
          <img src="/images/location-icon.png" alt="Location Icon" />
        </div>
        <div>
          <h3>Pay Us a Visit</h3>
          <p>Union St, Seattle, WA 98101, United States</p>
        </div>
      </div>
      <div className="hero-item">
        <div className="icon">
          <img src="/images/call-icon.png" alt="Call Icon" />
        </div>
        <div>
          <h3>Give Us a Call</h3>
          <p>(110) 1111-1010</p>
        </div>
      </div>
      <div className="hero-item">
        <div className="icon">
          <img src="/images/message-icon.png" alt="Email Icon" />
        </div>
        <div>
          <h3>Send Us a Message</h3>
          <p>Contact@HydraVTech.com</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
