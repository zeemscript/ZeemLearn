"use client";
import Image from "next/image";

const ContactUs = ({id}) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center justify-center min-h-screen bg-blue-500 px-4 sm:py-0 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full mx-auto">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/work.png"
            alt="Contact Us"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            We would love to hear from you! Please fill out the form below and
            we will get back to you as soon as possible.
          </p>
          <form>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
