"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Whyus = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0">
          <Image
            src="/images/whyus.jpg" // Ensure this path is correct
            alt="World best professional"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Why Choose <span className="text-gray-900">ZeemLearn?</span>
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-800">
            <li className="font-medium">
              <span className="text-gray-900">Expert-Led Courses:</span>
              <p className="mt-1 text-gray-600">
                Learn from industry leaders and top educators who bring
                real-world experience to the classroom.
              </p>
            </li>
            <li className="font-medium">
              <span className="text-gray-900">Flexible Learning:</span>
              <p className="mt-1 text-gray-600">
                Study at your own pace, with access to courses anytime,
                anywhere, tailored to fit your schedule.
              </p>
            </li>
            <li className="font-medium">
              <span className="text-gray-900">Global Community:</span>
              <p className="mt-1 text-gray-600">
                Connect and collaborate with learners from around the world,
                sharing knowledge and insights.
              </p>
            </li>
            <li className="font-medium">
              <span className="text-gray-900">Career-Focused:</span>
              <p className="mt-1 text-gray-600">
                Acquire in-demand skills and knowledge to advance your career
                and open new opportunities.
              </p>
            </li>
            <li className="font-medium">
              <span className="text-gray-900">
                Join a Global Learning Community:
              </span>
              <p className="mt-1 text-gray-600">
                Whether you’re looking to upskill, reskill, or explore new
                passions, ZeemLearn provides the resources to help you succeed.
              </p>
            </li>
          </ul>
          <p className="text-lg text-gray-800 mt-6">
            Ready to start your learning journey? Explore the top courses from
            leading platforms on ZeemLearn and take the first step towards
            achieving your goals today!
          </p>
          <Button size="lg" className="mt-8 w-full bg-gray-900 text-white hover:bg-gray-200 transition-colors duration-300">
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
