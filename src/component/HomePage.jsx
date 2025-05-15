import React, { useEffect, useState } from "react";
import CraneImage from "../assets/crane.jpg"; // Replace with your crane image
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Relevant icons for contact
import { motion } from "framer-motion";
import AboutComponent from "./AboutComponent";
import ServicesSection from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import AboutSection from "./About";

const HomePage = () => {
  const [key, setKey] = useState(0);

  const companyName = "MM-Crane"; // Company Name

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Increment the key to re-trigger the page animation
  }, []); // This triggers only on initial load

  return (
    <>
      <section
        className="md:h-[660px] flex flex-col md:flex-row items-center justify-between bg-[#E1DDC6] text-[#A4282E] px-6 sm:px-16 py-16"
        id="Home"
        key={key} // This forces a re-render on key change, triggering animation each time
      >
        {/* === Left: Text Content === */}
        <div className="max-w-xl mt-12 md:mt-0 md:mr-12 flex flex-col items-start">
          {/* Company Name with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Welcome to{" "}
              <span className="text-black">
                {companyName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-semibold mb-6"
          >
            Providing Reliable Crane Services for Your Construction Needs
          </motion.h2>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#A4282E] mb-6"
          >
            At MM-Cranes, we specialize in crane rentals, heavy lifting, and
            transportation for construction, industrial, and infrastructure
            projects. Our expert team ensures safe, efficient, and timely
            services tailored to meet your specific needs.
          </motion.p>

          {/* Call-to-Action (CTA) Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="#services"
              className="bg-[#A4282E] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#D89C8B] transition duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>

          {/* === Social Links === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex gap-6 text-2xl mt-6"
          >
            <a
              href="https://www.linkedin.com/company/mm-cranes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D89C8B]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:info@mm-cranes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D89C8B]"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D89C8B]"
            >
              <FaPhoneAlt />
            </a>
          </motion.div>
        </div>

        {/* === Right: Image (Crane Image) === */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 md:mt-0"
        >
          <img
            src={CraneImage} // Replace with your crane image
            alt="MM-Cranes"
            className="h-[300px] w-[300px] rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </section>
      <AboutSection />
      <ServicesSection />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
