import React from 'react'
import Image from 'next/image';
const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif font-semibold text-center text-gray-800 dark:text-white mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <Image
              src="/images/TLX_logo.png" // Replace with your actual image path
              alt="About Us"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
