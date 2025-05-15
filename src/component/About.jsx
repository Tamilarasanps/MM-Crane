import React from "react";
import { motion } from "framer-motion";
import { FaHammer, FaRegClock, FaHandshake } from "react-icons/fa"; // Add icons for the core values

const AboutSection = () => {
  return (
    <section
      className="py-20 px-6 sm:px-16 bg-[#D89C8B] text-white"
      id="Aboutus"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
        >
          About Us
        </motion.h2>

        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12 text-lg sm:text-xl leading-relaxed text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Who We Are
          </h3>
          <p className="max-w-3xl mx-auto">
            MM-Crane is a leading provider of professional crane services with
            over 15 years of experience in the industry. We specialize in
            providing heavy lifting, crane rental, and transportation services
            for the construction and industrial sectors. Our team is committed
            to ensuring safe, reliable, and efficient solutions for your project
            needs.
          </p>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16 text-lg sm:text-xl leading-relaxed text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Our Mission
          </h3>
          <p className="max-w-3xl mx-auto">
            Our mission is to provide our clients with exceptional crane
            services while maintaining the highest standards of safety and
            professionalism. We are dedicated to ensuring that every project is
            completed on time, within budget, and without compromising quality.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {/* Core Value 1 */}
          <div className="p-6 bg-white text-[#A4282E] rounded-xl shadow-lg">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-4"
            >
              <FaHammer />
            </motion.div>
            <h4 className="text-xl font-semibold mb-4">Safety First</h4>
            <p className="text-base">
              We prioritize safety in everything we do, ensuring our workers and
              clients are protected at all times.
            </p>
          </div>

          {/* Core Value 2 */}
          <div className="p-6 bg-white text-[#A4282E] rounded-xl shadow-lg">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-4"
            >
              <FaRegClock />
            </motion.div>
            <h4 className="text-xl font-semibold mb-4">Timely Service</h4>
            <p className="text-base">
              We understand the importance of deadlines. Our team ensures that
              your project is completed on time, every time.
            </p>
          </div>

          {/* Core Value 3 */}
          <div className="p-6 bg-white text-[#A4282E] rounded-xl shadow-lg">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-4"
            >
              <FaHandshake />
            </motion.div>
            <h4 className="text-xl font-semibold mb-4">Reliability</h4>
            <p className="text-base">
              Our team is reliable and trustworthy, ensuring that we exceed
              client expectations with every service provided.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="bg-[#A4282E] text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-[#D89C8B] transition duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
