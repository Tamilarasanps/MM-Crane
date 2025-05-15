import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with email handling logic (e.g., EmailJS, backend API)
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#E1DDC6] via-[#D89C8B] to-[#A4282E] text-white py-16 px-6 sm:px-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Contact Us</h2>
        <p className="text-gray-100 mb-10">
          Let's collaborate or just say hello! We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-100 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#A4282E] text-white border border-[#D89C8B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D89C8B]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-100 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#A4282E] text-white border border-[#D89C8B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D89C8B]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-100 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#A4282E] text-white border border-[#D89C8B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D89C8B]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#D89C8B] hover:bg-[#A4282E] text-white font-semibold px-6 py-2 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
