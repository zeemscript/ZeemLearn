import React from 'react'
import Image from 'next/image';
const About = ({id}) => {
  return (
    <section id={id} className="bg-gray-900 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-serif font-semibold text-center text-white mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 text-white text-lg font-serif  pt-1 sm:pt-4">
            <p className="mb-4">
               At ZeemLearn, we are committed to empowering learners
              worldwide through accessible, flexible, and high-quality
              education. Founded by Dr. Kalu Thankgod Ugochukwu, ZeemLearn
              serves as a global platform for open online courses, designed to
              meet the diverse needs of students, professionals, and lifelong
              learners. Our mission is to bridge the educational gap by
              providing comprehensive, innovative, and tailored learning
              experiences that foster personal and professional growth.
            </p>
            <p>
              We believe in the transformative power of education and strive to
              create opportunities for learners to excel in their chosen fields.
              Our courses are developed by industry experts and seasoned
              educators, ensuring that each program is relevant, engaging, and
              aligned with the latest trends and advancements.
            </p>
            <p className="mb-4">
              Whether you&amp;re looking to advance your career, acquire new
              skills, or explore new interests, ZeemLearn offers a dynamic
              learning environment that adapts to your pace and schedule. Join
              us at ZeemLearn and take the next step in your educational
              journey with a community that values excellence, inclusivity, and
              lifelong learning.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <Image
              src="/images/zeemlearnlogo.png" // Replace with your actual image path
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
