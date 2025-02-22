import React from "react";
import "./HeroHeader.css"; // Import the CSS file

const HeroHeader = () => {
  return (
    <section className="hero-header">
      {/* Background Wave Lines */}
      <div className="hero-waves">
        <svg className="hero-wave hero-wave-1" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#6B52A3" stopOpacity="0" />
              <stop offset="10%" stopColor="#6B52A3" stopOpacity="1" />
              <stop offset="90%" stopColor="#e1d6ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#e1d6ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 200 Q 200 0, 400 100 T 800 100 T 1000 100"
            stroke="url(#heroGradient1)"
            strokeWidth="8"
            fill="transparent"
          />
        </svg>

        <svg className="hero-wave hero-wave-2" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGradient2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#e1d6ff" stopOpacity="0" />
              <stop offset="20%" stopColor="#e1d6ff" stopOpacity="1" />
              <stop offset="80%" stopColor="#6B52A3" stopOpacity="1" />
              <stop offset="100%" stopColor="#6B52A3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 150 Q 250 50, 500 150 T 1000 150"
            stroke="url(#heroGradient2)"
            strokeWidth="8"
            fill="transparent"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          <span><span className="highlight">Dive</span> Into The Depths</span> <br />
          <span>Of <span className="highlight">Virtual Reality</span></span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisi tincidunt eget.
          Lectus mauris eros in vitae.
        </p>
        <button className="cta-button">
          Build Your World <span className="arrow">&rarr;</span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img src="./images/HeroHeaderPic.jpg" alt="Virtual Reality" />
      </div>
    </section>
  );
};

export default HeroHeader;
