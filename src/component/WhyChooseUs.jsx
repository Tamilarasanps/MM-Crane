import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section
      className="py-20 px-6 sm:px-16 bg-[#F1F1F1] text-[#A4282E]"
      id="whychooseus"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12"
        >
          Why Choose Us?
        </motion.h2>

        {/* Unique Selling Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* USPs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Availability</h3>
            <p className="text-lg mb-4">
              We're available around the clock to ensure your project runs
              smoothly, regardless of time or urgency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">🏗️</div>
            <h3 className="text-2xl font-semibold mb-4">Large Fleet</h3>
            <p className="text-lg mb-4">
              We own a diverse fleet of cranes and heavy equipment, ensuring we
              have the right tool for any job.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-[#A4282E] mb-4">🔒</div>
            <h3 className="text-2xl font-semibold mb-4">Safety First</h3>
            <p className="text-lg mb-4">
              Our team is fully trained and certified, ensuring safe and
              compliant operations at all times.
            </p>
          </motion.div>
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold text-[#A4282E] mb-6">
            Our Trust Signals
          </h3>
          <div className="flex justify-center gap-8">
            {/* Certifications & Affiliations */}
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
              <div className="text-5xl text-[#A4282E] mb-4">🏅</div>
              <h4 className="text-xl font-semibold mb-2">OSHA Certified</h4>
              <p className="text-lg">
                Fully OSHA-compliant, guaranteeing top-tier safety protocols on
                every project.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
              <div className="text-5xl text-[#A4282E] mb-4">🔧</div>
              <h4 className="text-xl font-semibold mb-2">Industry Awards</h4>
              <p className="text-lg">
                Awarded for excellence in crane services and safe operations
                year after year.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Customer Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <h3 className="text-3xl font-semibold text-[#A4282E] mb-6">
            What Our Clients Say
          </h3>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <p className="text-lg italic mb-4">
                "MM-Crane provided outstanding service for our construction
                site. Their team was professional, punctual, and kept safety top
                of mind."
              </p>
              <p className="text-xl font-semibold">John D., Project Manager</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <p className="text-lg italic mb-4">
                "The crane rental was seamless, and the equipment was top-notch.
                They handled the job flawlessly, even under tight deadlines."
              </p>
              <p className="text-xl font-semibold">Sara M., Site Supervisor</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <p className="text-lg italic mb-4">
                "Highly recommend MM-Crane for any lifting needs. The service
                was efficient and the crew was fantastic."
              </p>
              <p className="text-xl font-semibold">Liam K., Contractor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
