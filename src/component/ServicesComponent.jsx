import React from "react";
import ServicesSection from "./Services";
import FleetOverview from "./FleetOverView";
import ProjectGallery from "./ProjectAndGallery";
import Footer from "./Footer";

const ServicesComponent = () => {
  return (
    <div>
      <ServicesSection />
      <FleetOverview />
      <ProjectGallery />
      <Footer />
    </div>
  );
};

export default ServicesComponent;
