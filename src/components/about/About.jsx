import React from 'react';
import './About.css';

export default function About() {
  return (
    <div id="about" className="about-section"> {/* <- Added id="about" and changed class to className */}
      <div className="about-image">
        <img src="/images/Screenshot_2024-12-25_211727-removebg-preview.png" alt="VR Headset" />
      </div>
      <div className="about-content">
        <h2>About</h2>
        <h3>Hydra VR</h3>
        <p>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
          Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet.
        </p>
        <button className="about-button">Let’s Get In Touch</button>
      </div>
    </div>
  );
}
