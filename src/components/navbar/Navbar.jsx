import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./images/Navbar-logo.png" alt="Hydra Logo" />
      </div>
      <nav className="nav">
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#technologies">TECHNOLOGIES</a>
        <a href="#how-to">HOW TO</a>
      </nav>
      <div className="buttons">
        <button className="contact-us">CONTACT US</button>
        <button className="join-hydra">JOIN HYDRA</button>
      </div>
    </header>
  );
};

export default Navbar;
