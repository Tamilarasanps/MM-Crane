import React from "react";
import { motion } from "framer-motion";

const ProjectGallery = () => {
  return (
    <section className="py-20 px-6 sm:px-16  bg-[#E1DDC6]" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#A4282E]"
        >
          Our Recent Projects
        </motion.h2>

        {/* Project Categories */}
        <div className="flex justify-center gap-8 mb-8">
          <button className="px-6 py-2 text-lg font-semibold bg-[#A4282E] text-white rounded-xl hover:bg-[#D89C8B]">
            Construction
          </button>
          <button className="px-6 py-2 text-lg font-semibold bg-[#A4282E] text-white rounded-xl hover:bg-[#D89C8B]">
            Industrial
          </button>
          <button className="px-6 py-2 text-lg font-semibold bg-[#A4282E] text-white rounded-xl hover:bg-[#D89C8B]">
            Infrastructure
          </button>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src="project-image.jpg"
              alt="Project 1"
              className="h-56 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Construction Site</h3>
            <p className="text-lg">
              Completed a large-scale construction project using our tower
              cranes.
            </p>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src="project-image-2.jpg"
              alt="Project 2"
              className="h-56 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Heavy Lifting</h3>
            <p className="text-lg">
              Lifting heavy machinery and equipment for industrial clients.
            </p>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src="project-image-3.jpg"
              alt="Project 3"
              className="h-56 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Infrastructure Work</h3>
            <p className="text-lg">
              Specialized in large infrastructure projects requiring precise
              crane operations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
