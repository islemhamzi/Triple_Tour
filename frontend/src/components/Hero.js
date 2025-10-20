import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="hero-video">
        <source src="/videos/tunisia-hd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered overlay block */}
      <div className="hero-overlay">
        <h1>Travel Tunisia</h1>
        <p>Discover your journey</p>
        <button
          className="discover-btn"
          onClick={() =>
            document
              .getElementById("multi-day-tours")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Discover Your Journey
        </button>
      </div>

      {/* Optional dark gradient overlay for better text visibility */}
      <div className="hero-gradient"></div>
    </div>
  );
};

export default Hero;
