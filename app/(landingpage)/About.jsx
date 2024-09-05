import React from "react";
import Image from "next/image";

const About = ({ id }) => {
  return (
    <section id={id} className="bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center text-white mb-12 tracking-tight">
          About ZeemLearn
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-white text-lg leading-relaxed font-serif">
            <p className="mb-6">
              At <span className="font-semibold text-blue-400">ZeemLearn</span>,
              we specialize in connecting learners with the best courses across
              top global learning platforms. Our mission is to simplify the
              process of discovering high-quality educational programs that
              cater to the diverse needs of students, professionals, and
              lifelong learners.
            </p>
            <p className="mb-6">
              Whether you&apos;re looking to advance your career, gain new
              skills, or pursue personal growth, ZeemLearn ensures you find the
              right course tailored to your goals. Our platform offers
              personalized recommendations and guidance, making education more
              accessible, flexible, and aligned with your objectives.
            </p>
            <p className="mb-6">
              We partner with world-class educators and industry experts to
              bring you cutting-edge, relevant content that keeps you ahead of
              the curve. At ZeemLearn, learning is made easy, effective, and
              empowering. Join us today and unlock your full potential!
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
            <Image
              src="/images/zeemlearnlogo.png" // Replace with actual image path
              alt="About Us"
              width={600}
              height={450}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
