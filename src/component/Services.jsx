import React from "react";
import { motion } from "framer-motion";
// import { FaTruckMoving, FaTools, FaRig } from "react-icons/fa"; // Correct imports
import { GiCrane } from "react-icons/gi"; // Alternative crane icon from 'gi' set

const ServicesSection = () => {
  return (
    <section
      className="py-20 px-6 sm:px-16 bg-[#E1DDC6] text-[#A4282E]"
      id="services"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-16"
        >
          Our Services
        </motion.h2>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 - Crane Rentals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">
              <GiCrane /> {/* Use GiCrane if FaCrane is unavailable */}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Crane Rentals</h3>
            <p className="text-lg mb-4">
              We offer a variety of cranes for rent, suited for different
              lifting capacities and project needs. Whether you need a mobile
              crane, tower crane, or crawler crane, we've got you covered.
            </p>
            <a
              href="#contact"
              className="inline-block text-white bg-[#A4282E] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#D89C8B] transition duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Service 2 - Heavy Equipment Transport */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">
              <GiCrane /> {/* Use GiCrane if FaCrane is unavailable */}
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Heavy Equipment Transport
            </h3>
            <p className="text-lg mb-4">
              We provide reliable and secure transport solutions for heavy
              equipment. Our fleet of specialized vehicles can handle oversized
              loads, ensuring safe delivery to your job site.
            </p>
            <a
              href="#contact"
              className="inline-block text-white bg-[#A4282E] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#D89C8B] transition duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Service 3 - Site Preparation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">
              <GiCrane /> {/* Use GiCrane if FaCrane is unavailable */}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Site Preparation</h3>
            <p className="text-lg mb-4">
              Our team specializes in site preparation, including clearing,
              leveling, and grading, to ensure a solid foundation for your
              construction projects.
            </p>
            <a
              href="#contact"
              className="inline-block text-white bg-[#A4282E] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#D89C8B] transition duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Service 4 - Rigging Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">
              <GiCrane /> {/* Use GiCrane if FaCrane is unavailable */}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Rigging Services</h3>
            <p className="text-lg mb-4">
              We offer professional rigging services for lifting and moving
              heavy machinery, equipment, and structural components, ensuring
              smooth and safe operations.
            </p>
            <a
              href="#contact"
              className="inline-block text-white bg-[#A4282E] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#D89C8B] transition duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Service 5 - Lifting and Hoisting */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">
              <GiCrane />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Lifting and Hoisting
            </h3>
            <p className="text-lg mb-4">
              Our expert team provides safe and efficient lifting and hoisting
              services, including crane hoisting and rigging for various
              industrial applications.
            </p>
            <a
              href="#contact"
              className="inline-block text-white bg-[#A4282E] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#D89C8B] transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
