"use client";
import React from "react";
const Suscribe = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white py-10 px-4 sm:px-0">
        <h2 className="font-extrabold text-4xl sm:text-6xl mb-6 text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
          Get the latest updates and offers.
        </p>
        <form className="w-full max-w-md" noValidate={true}>
          <div className="flex items-center border-b border-gray-900 py-2">
            <input
              type="email"
              name="email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter your email"
              aria-label="Email"
              required
            />
            <button
              type="submit"
              className="flex-shrink-0  hover:bg-gray-900 hover:text-white border-gray-700 hover:border-gray-600 text-sm border-2 text-black py-1 px-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Suscribe;
