import React, { useEffect } from "react";
import HeroSection from "../components/heroSection";
import UniqueIdeas from "../components/uniqueIdeas";
import NavBar from "../components/navBar";
import Cursor from "../components/cursor";
import ProgressBar from "../components/scrollBar";
import ReviewCustomer from "../components/reviewCustomer";
import { smooth } from "../smooth";
import "../styles/home.css";
const Home = () => {
  useEffect(() => {
    smooth();
  }, []);
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ProgressBar />
          <Cursor />
          <NavBar />
          <HeroSection />
          <UniqueIdeas />
          <ReviewCustomer />
        </div>
      </div>
    </>
  );
};

export default Home;
