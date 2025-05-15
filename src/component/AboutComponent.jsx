import React from "react";
import AboutSection from "./About";
import WhyChooseUs from "./WhyChooseUs";
import SafetyAndCertifications from "./SafetyAndCertification";
import Footer from "./Footer";

const AboutComponent = () => {
  return (
    <div>
      <AboutSection />
      <WhyChooseUs />
      <SafetyAndCertifications />
      <Footer />
    </div>
  );
};

export default AboutComponent;
