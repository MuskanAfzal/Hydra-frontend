import React from "react";
import "./HydraFooter.css";

const HydraFooter = () => {
  return (
    <footer className="footer-container">
      {/* Background Wave Lines Behind Content */}
      <div className="footer-waves">
        <svg className="footer-wave wave-1" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerGradient1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#6B52A3" stopOpacity="0" />
              <stop offset="10%" stopColor="#6B52A3" stopOpacity="1" />
              <stop offset="90%" stopColor="#e1d6ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#e1d6ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 100 Q 200 0, 400 100 T 800 100 T 1000 100"
            stroke="url(#footerGradient1)"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>

        <svg className="footer-wave wave-2" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerGradient2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#e1d6ff" stopOpacity="0" />
              <stop offset="20%" stopColor="#e1d6ff" stopOpacity="1" />
              <stop offset="80%" stopColor="#6B52A3" stopOpacity="1" />
              <stop offset="100%" stopColor="#6B52A3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 150 Q 250 50, 500 150 T 1000 150"
            stroke="url(#footerGradient2)"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./images/Navbar-logo2.png" alt="Hydra Logo" />
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        <div className="footer-links">
          <ul>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TECHNOLOGIES</li>
            <li>HOW TO</li>
            <li>JOIN HYDRA</li>
          </ul>
          <div className="footer-divider"></div>
          <ul>
            <li>F.A.Q</li>
            <li>SITEMAP</li>
            <li>CONDITIONS</li>
            <li>LICENSES</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        <div className="footer-social">
          <p>SOCIALIZE WITH HYDRA</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
          <img src="./images//social-icons.png" alt="Hydra Logo" className="social-icons" />
          <button className="build-button">BUILD YOUR WORLD</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default HydraFooter;
