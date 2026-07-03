import { useState } from "react";
import BodySection from "./sections/BodySection";
import HeaderSection from "./sections/HeaderSection";

const HomePage = () => {
  return (
    <div className=" h-screen overflow-hidden">
      <HeaderSection />
      <BodySection />
    </div>
  );
};

export default HomePage;
