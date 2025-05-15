import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 px-6 sm:px-16 bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Quick Links */}
        {/* <div className="flex justify-center gap-8 mb-8">
          <a href="#home" className="hover:text-[#D89C8B]">
            Home
          </a>
          <a href="#aboutus" className="hover:text-[#D89C8B]">
            About Us
          </a>
          <a href="#services" className="hover:text-[#D89C8B]">
            Services
          </a>
          <a href="#contact" className="hover:text-[#D89C8B]">
            Contact
          </a>
        </div> */}

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.facebook.com" className="hover:text-[#D89C8B]">
            <FaFacebook size={28} />
          </a>
          <a href="https://www.instagram.com" className="hover:text-[#D89C8B]">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.linkedin.com" className="hover:text-[#D89C8B]">
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">© 2025 MM-Crane. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
