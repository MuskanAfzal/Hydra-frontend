import React from 'react';
import './About.css';
import aboutData from '../../aboutData.json'; // adjust path if needed

export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-image">
        <img src={aboutData.image} alt="VR Headset" />
      </div>
      <div className="about-content">
        <h2>About</h2>
        <h3>{aboutData.heading}</h3>
        <p>{aboutData.description}</p>
        <button className="about-button">Let’s Get In Touch</button>
      </div>
    </div>
  );
}
