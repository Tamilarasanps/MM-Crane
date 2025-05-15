import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="py-20 px-6 sm:px-16 bg-[#A4282E]" id="contact">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-white"
        >
          Contact Us
        </motion.h2>

        {/* Contact Form */}
        <form className="w-full sm:w-1/2 mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-6 py-2 rounded-xl border border-[#A4282E] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-6 py-2 rounded-xl border border-[#A4282E] focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="px-6 py-2 rounded-xl border border-[#A4282E] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 text-lg font-semibold bg-[#D89C8B] text-white rounded-xl hover:bg-[#A4282E]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
