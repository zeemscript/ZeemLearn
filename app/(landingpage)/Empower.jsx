"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";

const Empower = ({ id }) => {
  return (
    <div id={id} className="bg-gray-100 py-16 px-8 sm:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl font-bold font-serif text-gray-800 mb-6">
          Discover New Horizons
        </h2>

        {/* Separator */}
        <Separator className="w-20 mx-auto bg-gray-900 h-1 mb-10" />

        {/* Paragraph */}
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
          Step into a world of limitless opportunities with{" "}
          <span className="font-semibold text-black font-serif">ZeemLearn</span>. We
          believe that every individual has the potential to grow, evolve, and
          lead in their field. By providing access to high-quality education and
          cutting-edge learning experiences, we empower you to embrace new
          challenges and unlock your true potential. Whether you’re starting a
          new journey or enhancing existing skills, ZeemLearn is here to guide
          you at every step.
        </p>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
          Our innovative platform connects you with world-class educators,
          mentors, and fellow learners, making it easy to explore new knowledge
          and build a future full of possibilities. With our flexible and
          dynamic learning pathways, we are committed to helping you reach new
          heights in your personal and professional journey.
        </p>
      </div>
    </div>
  );
};

export default Empower;
