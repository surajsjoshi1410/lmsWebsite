import React from "react";
import "./AboutPlatform.css";
import { useNavigate } from "react-router-dom";
import "../../../App.css";

function AboutPlatform() {
  const navigate = useNavigate();

  return (
    <div className="about-platform-section">
      <div className="about-platform-container">
        <div className="about-platform-video">
          <div className="video-content">
            <h3>How HubSpot works</h3>
            <div className="video-play-icon">
              <button>
                <span>▶</span>
              </button>
            </div>
          </div>
        </div>
        <div className="about-platform-text">
          <h2>What is The Topper's Academy?</h2>
          <p>
            HubSpot is an AI-powered customer platform with all the software,
            integrations, and resources you need to connect your marketing,
            sales, and customer service. HubSpot’s connected platforms enable
            you to grow your business faster by focusing on what matters most:
            your customers.
          </p>
          <p>
            Get a demo to learn about our premium software, or get started with
            our full suite of free tools and upgrade as you grow.
          </p>
          <div className="about-platform-buttons">
            <button className="demo-button">Join </button>
            <button
              className="start-button"
              onClick={() => navigate("/signupStudent")}
            >
              Create Custom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPlatform;
