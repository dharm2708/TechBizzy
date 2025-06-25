import React from "react";
import HeroSection from "../components/heroSection";
import UniqueIdeas from "../components/uniqueIdeas";
import NavBar from "../components/navBar";
import Cursor from "../components/cursor";
import ProgressBar from "../components/scrollBar";
import ReviewCustomer from "../components/reviewCustomer";

const Home = () => {
  return (
    <>
      <ProgressBar />
      <Cursor />
      <NavBar />
      <HeroSection />
      <UniqueIdeas />
      <ReviewCustomer />
    </>
  );
};

export default Home;
