"use client";

import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

export default function Info({ id }) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center px-6 py-12 bg-gray-900 text-white"
    >
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto gap-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={"/images/bg-image.jpg"}
            alt="Our Mission"
            width={600}
            height={400}
            layout="intrinsic"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-serif font-light mb-4">
            Our Mission
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            At ZeemLearn, our mission is to revolutionize the way you learn
            online. We are dedicated to offering high-quality, engaging courses
            tailored to your needs. Our goal is to empower learners worldwide
            with the knowledge and skills necessary for success. By combining
            cutting-edge technology with expert instructors, we deliver
            impactful content that helps you thrive in today’s fast-paced world.
            Join us and take the next step in your learning journey.
          </p>
        </div>
      </div>
    </section>
  );
}
