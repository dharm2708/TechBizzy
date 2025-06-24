import React from "react";
import "../styles/navBar.css";
const NavBar = () => {
  return (
    // navbar
    <div className="navbar">
      <div className="logo">Techbizzy</div>
      {/* hamburger */}
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
