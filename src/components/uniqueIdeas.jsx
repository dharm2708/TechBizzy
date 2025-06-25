import team from "../assets/images/team.jpg";
import React from "react";
import "../styles/uniqueIdeas.css";
import { GoArrowRight } from "react-icons/go";

// Content to display in the card of services
const services = [
  {
    title: "Branding and Identity Design",
    description:
      "Proficiency in creating memorable logos and recognizable visual brands.",
  },
  {
    title: "Website Design and Development",
    description:
      "Proficiency in creating memorable logos and recognizable visual brands.",
  },
  {
    title: "Advertising and Marketing Campaigns",
    description:
      "Proficiency in creating memorable logos and recognizable visual brands.",
  },
  {
    title: "Creative App development",
    description:
      "Proficiency in creating memorable logos and recognizable visual brands.",
  },
];
const UniqueIdeas = () => {
  return (
    <>
      {/* Heading */}
      <section className="hero-section">
        <div className="subtitle-line-wrapper">
          <p className="hero-subtitle">
            Professionals focused on helping your brand
            <br />
            grow and move forward.
          </p>
          <div className="horizontal-line"></div>
        </div>
        {/* Title */}
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-image">
              <img src={team} alt="Team" />
            </div>
            <div className="hero-titles">
              <h1>
                <span className="gray">Unique</span> Ideas
              </h1>
              <h1>
                <span className="white">For Your</span> Business
                <span className="dot">.</span>
              </h1>
            </div>
          </div>
          {/* button */}
          <button className="hero-button">
            <p>WHAT WE DO</p>
            <div className="arrow-circle">
              <GoArrowRight />
            </div>
          </button>
        </div>
        {/* services displayed */}
        <div className="services-wrapper">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="top-border"></div>
              <h3>
                {service.title.split(" and ").map((part, idx, arr) => (
                  <React.Fragment key={idx}>
                    {part}
                    {idx < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              <p className="description">
                {service.description || "Description coming soon."}
              </p>
              <div className="arrow-btn">
                <GoArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UniqueIdeas;
