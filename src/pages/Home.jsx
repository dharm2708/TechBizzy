import { lazy } from "react";
const HeroSection = lazy(() => import("../components/heroSection"));
const UniqueIdeas = lazy(() => import("../components/uniqueIdeas"));
const ReviewCustomer = lazy(() => import("../components/reviewCustomer"));
const Home = () => {
  return (
    <>
      <HeroSection />
      <UniqueIdeas />
      <ReviewCustomer />
    </>
  );
};

export default Home;
