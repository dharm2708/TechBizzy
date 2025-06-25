import React, { useState } from "react";
import "../styles/reviews.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Review = ({ avatars, review }) => {
  //hooks to change the state of avatars and the revuews
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [direction, setDirection] = useState("right");

  //Arrow functions to handle the avatars click and animate the review container
  const handleAvatarClick = (index) => {
    if (index !== activeIndex) {
      setDirection(index > activeIndex ? "right" : "left");
      setAnimate(false);

      setTimeout(() => {
        setActiveIndex(index);
        setAnimate(true);
      }, 300);
    }
  };
  //handle the slide next and previous of the reviews
  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection("left");
      setAnimate(false);
      setTimeout(() => {
        setActiveIndex((prev) => prev - 1);
        setAnimate(true);
      }, 300);
    }
  };

  const handleNext = () => {
    if (activeIndex < review.length - 1) {
      setDirection("right");
      setAnimate(false);
      setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
        setAnimate(true);
      }, 300);
    }
  };

  return (
    // main review
    <div className="testimonial-container">
      {/* avatars wrapper to wrap all avatars of the customers */}
      <div className="avatar-wrapper">
        {avatars.map((img, index) => (
          <div style={{ paddingTop: index % 2 == 0 ? "40px" : "0px" }}>
            <div
              key={index}
              className={`avatar ${activeIndex === index ? "ring-orange" : ""}`}
              onClick={() => handleAvatarClick(index)}
            >
              <img src={img} alt={`User ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      {/* reviews of the customers */}
      <div>
        <div className="cust-review-wrapper">
          {/* Left Arrow */}
          <GoArrowLeft className="svg-arrow" onClick={handlePrev} />

          {/* Review Content */}
          <div
            className={`review-container ${
              animate
                ? direction === "right"
                  ? "slide-in-right"
                  : "slide-in-left"
                : direction === "right"
                ? "slide-out-left"
                : "slide-out-right"
            }`}
          >
            <h3 className="cust-name">{review[activeIndex].name}</h3>
            <p className="cust-country">{review[activeIndex].country}</p>
            <p className="cust-text">{review[activeIndex].review}</p>
          </div>

          {/* Right Arrow */}
          <GoArrowRight className="svg-arrow" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Review;
