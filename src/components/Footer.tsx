import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-6 lg:space-y-0">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-16 text-sm">
            {/* Column 1 */}
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="font-semibold text-gray-800 mb-2">Company Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="font-semibold text-gray-800 mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookies</a></li>
                <li><a href="#" className="hover:text-blue-500">License</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="font-semibold text-gray-800 mb-2">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="font-semibold text-gray-800 mb-2">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
                <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/3 mt-6 lg:mt-0">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4 w-full flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300 sm:rounded-l-md sm:w-3/4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 sm:rounded-r-md sm:w-1/4"
              >
                Subscribe
              </button>
              <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
                Stay updated with our latest news.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
