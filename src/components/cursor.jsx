import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/cursor.css";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      gsap.to("#cursor", {
        x: pageX - 10,
        y: pageY - 10,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="cursor"></div>;
};

export default Cursor;
