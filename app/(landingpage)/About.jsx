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
              At ZeemLearn, we specialize in helping learners find the best
              courses across top global learning platforms. Our mission is to
              simplify the process of discovering high-quality, relevant
              educational programs that meet the diverse needs of students,
              professionals, and lifelong learners. Whether you&pos;re seeking
              to enhance your career, develop new skills, or pursue personal
              growth, ZeemLearn connects you to the right course at the right
              time.
            </p>
            <p>
              ZeemLearn is committed to making education more accessible,
              flexible, and tailored to your goals. We partner with leading
              online platforms to bring you a curated selection of courses
              developed by industry experts and world-class educators, ensuring
              that you receive up-to-date, practical knowledge aligned with the
              latest industry trends.
            </p>
            <p className="mb-4">
              Our user-friendly platform allows you to explore courses across
              multiple subjects, compare options, and choose the best fit for
              your schedule and learning style. We believe that education is a
              powerful tool for transformation, and we strive to empower
              learners by offering personalized recommendations and guidance.
              <br />
              Join us at ZeemLearn and discover a smarter way to learn. Whether
              you&apos;re advancing your career or exploring new passions, we
              help you find the perfect course to achieve your goals.
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
