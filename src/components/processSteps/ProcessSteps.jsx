import React from "react";
import "./ProcessSteps.css";

const steps = [
  { number: "01", title: "3D Conception & Design" },
  { number: "02", title: "Interaction Design" },
  { number: "03", title: "VR World User Testing" },
  { number: "04", title: "Hydra VR Deploy" },
];

const ProcessSteps = () => {
  return (
    <div className="process-container">
      <svg
        className="wave-line"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        {/* Define the gradient with fading transparency */}
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#e1d6ff" stopOpacity="0" />{" "}
            {/* Fully transparent at the start */}
            <stop offset="10%" stopColor="#e1d6ff" stopOpacity="1" />{" "}
            {/* Fully visible after 10% */}
            <stop offset="90%" stopColor="#6B52A3" stopOpacity="1" />{" "}
            {/* Fully visible until 90% */}
            <stop offset="100%" stopColor="#6B52A3" stopOpacity="0" />{" "}
            {/* Fully transparent at the end */}
          </linearGradient>
        </defs>

        {/* Apply the gradient to the stroke */}
        <path
          d="M 0 100 Q 125 0, 250 100 T 500 100 T 750 100 T 1000 100"
          stroke="url(#waveGradient)" // Gradient with fading edges
          strokeWidth="10"
          fill="transparent"
        />
      </svg>

      <div className="process-steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="circle">
              <span>{step.number}</span>
            </div>
            <p className="step-text">
              <span className="arrow-step" id="arrow">
                →
              </span>
              <span className="step-title" id="step-text">
                {step.title}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
