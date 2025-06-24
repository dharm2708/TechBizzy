import React from "react";
import "../styles/heroSection.css";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import NavBar from "./navBar";

const HeroSection = () => {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className="hero">
      {/* Content */}
      <div className="content">
        <h1>
          <span className="bold">Crafting</span> Your <br />
          <span className="bold">Online</span> Identity
        </h1>
        <p className="subtext">
          Pioneering IT solutions, unmatched excellence. Elevate your <br />
          digital presence with our cutting-edge technology and expertise.
        </p>
        {/* button */}
        <div className="button-row">
          <div className="buttons">
            <button className="btn-orange">
              <p>WHAT WE DO </p>
              <span className="arrow-orange">
                <GoArrowRight />
              </span>
            </button>
            <button className="btn-dark">
              <p> VIEW WORKS </p>
              <span className="arrow-dark">
                <GoArrowRight />
              </span>
            </button>
          </div>
          {/* Scroll Down Button */}
          <div className="scroll-container" onClick={{ handleClick }}>
            <div className="circle-text">
              <svg viewBox="0 0 100 100" className="text-circle">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fontSize="10" fill="white">
                  <textPath href="#circlePath" startOffset="0%">
                    - SCROLL DOWN - SCROLL DOWN
                  </textPath>
                </text>
              </svg>
              <div className="center-circle">
                <span className="arrow">
                  <GoArrowDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Label */}
      <div className="vertical-text">HOMEPAGE</div>
    </section>
  );
};

export default HeroSection;
