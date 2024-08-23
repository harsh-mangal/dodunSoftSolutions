import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 shadow-lg bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-teal-600">DODUN</h2>
            <p className="mb-2">GM Plaza - Best office space in Mohali</p>
            <p className="mb-2">Phase-7, Industrial Area, Sector 73</p>
            <p className="mb-2">Phone: +91 8968881110</p>
            <p>
              Email:{" "}
              <a
                href="mailto:dodunsoftsolutions@gmail.com"
                className="text-teal-500 hover:text-teal-400"
              >
                dodunsoftsolutions@gmail.com
              </a>
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-teal-600">
              Useful Links
            </h3>
            <ul>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-teal-600">
              Our Services
            </h3>
            <ul>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/WebDevelopment" className="relative group">
                  Web Development
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/graphicDesign" className="relative group">
                  Graphic Design
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/digitalMarketing" className="relative group">
                  Digital Marketing
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/WindowsDevelopment" className="relative group">
                  Windows Development
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DODUN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
