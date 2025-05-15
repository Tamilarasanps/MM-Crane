import React from "react";
import { motion } from "framer-motion";

const SafetyAndCertifications = () => {
  return (
    <section className="py-20 px-6 sm:px-16 bg-[#F1F1F1]" id="safety">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#A4282E]"
        >
          Safety and Certifications
        </motion.h2>

        {/* Safety Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Safety Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">🦺</div>
            <h3 className="text-xl font-semibold mb-4">OSHA Certified</h3>
            <p className="text-lg">
              Fully compliant with OSHA regulations to ensure safety on all our
              job sites.
            </p>
          </motion.div>

          {/* Safety Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-4">Regular Maintenance</h3>
            <p className="text-lg">
              Our equipment undergoes regular inspections to ensure it’s safe
              and operational.
            </p>
          </motion.div>

          {/* Safety Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-4">Certified Operators</h3>
            <p className="text-lg">
              All operators are fully trained, certified, and experienced in
              handling various crane types.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetyAndCertifications;
