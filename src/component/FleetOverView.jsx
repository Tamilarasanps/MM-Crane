import React from "react";
import { motion } from "framer-motion";

const FleetOverview = () => {
  return (
    <section className="py-20 px-6 sm:px-16  bg-[#E1DDC6]" id="fleet">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#A4282E]"
        >
          Our Fleet of Cranes
        </motion.h2>

        {/* Filters */}
        <div className="flex justify-center gap-8 mb-8">
          <button className="px-6 py-2 text-lg font-semibold bg-[#A4282E] text-white rounded-xl hover:bg-[#D89C8B]">
            Mobile Cranes
          </button>
          <button className="px-6 py-2 text-lg font-semibold bg-[#A4282E] text-white rounded-xl hover:bg-[#D89C8B]">
            Tower Cranes
          </button>
          <button className="px-6 py-2 text-lg font-semibold bg-[#A4282E] text-white rounded-xl hover:bg-[#D89C8B]">
            Heavy Lifting Equipment
          </button>
        </div>

        {/* Fleet Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Crane Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src="crane-image.jpg"
              alt="Mobile Crane"
              className="h-56 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mobile Crane</h3>
            <p className="text-lg">
              Suitable for construction, heavy lifting, and site transport
              projects.
            </p>
          </motion.div>

          {/* Crane Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src="crane-image-2.jpg"
              alt="Tower Crane"
              className="h-56 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tower Crane</h3>
            <p className="text-lg">
              Ideal for high-rise construction projects and heavy material
              lifting.
            </p>
          </motion.div>

          {/* Crane Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src="crane-image-3.jpg"
              alt="Heavy Lifting Crane"
              className="h-56 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Heavy Lifting Crane</h3>
            <p className="text-lg">
              Capable of handling the most demanding lifting tasks in any
              industrial setting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FleetOverview;
