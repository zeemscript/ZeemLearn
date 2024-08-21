import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" bg-blue-500 text-blue-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-[#113A69] mb-4 font-serif ">
            TeachLeadX
          </h2>
          <p className="mb-4">
            We provide the best services to help your business grow. Join us to
            experience top-notch solutions tailored to your needs.
          </p>
          <div className="flex items-center mb-2">
            <MdLocationOn className="mr-2 text-black" size={30} /> 1234 Business
            Street, City, Country
          </div>
          <div className="flex items-center mb-2">
            <FiPhone className="mr-2 text-black" size={20} /> +123-456-7890
          </div>
          <div className="flex items-center">
            <FiMail className="mr-2 text-black" size={20} /> info@yourbrand.com
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" passHref>
                <div className="hover:text-gray-900 cursor-pointer">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <div className="hover:text-gray-900 cursor-pointer">
                  About Us
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <div className="hover:text-gray-900 cursor-pointer">
                  Services
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <div className="hover:text-gray-900 cursor-pointer">
                  Contact
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <div className="hover:text-gray-900 cursor-pointer">Blog</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/web-development" passHref>
                <div className="hover:text-gray-900 cursor-pointer">
                  Web Development
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services/marketing" passHref>
                <div className="hover:text-gray-900 cursor-pointer">
                  Marketing
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services/consulting" passHref>
                <div className="hover:text-gray-900 cursor-pointer">
                  Consulting
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services/support" passHref>
                <div className="hover:text-gray-900 cursor-pointer">
                  Customer Support
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">
            Newsletter Signup
          </h3>
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates and offers
            directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-2/3 p-2 mb-2 sm:mb-0 sm:mr-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-10 border-t border-blue-400 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="https://facebook.com" passHref>
              <div className="hover:text-gray-900 cursor-pointer">
                <FaFacebookF size={25} />
              </div>
            </Link>
            <Link href="https://twitter.com" passHref>
              <div className="hover:text-gray-900 cursor-pointer">
                <FaTwitter size={25} />
              </div>
            </Link>
            <Link href="https://instagram.com" passHref>
              <div className="hover:text-gray-900 cursor-pointer">
                <FaInstagram size={25} />
              </div>
            </Link>
            <Link href="https://linkedin.com" passHref>
              <div className="hover:text-gray-900 cursor-pointer">
                <FaLinkedinIn size={25} />
              </div>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-md text-black font-serif">
            © {new Date().getFullYear()}{" "}
            <span className="text-md font-bold text-[#113A69] mb-4 font-serif px-1 ">
              TeachLeadX
            </span>
            {""}
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
