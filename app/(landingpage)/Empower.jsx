import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Empower = ({ id }) => {
  return (
    <div id={id}>
      <div className="bg-white mt-8 mx-6 sm:mx-10 my-4 text-lg font-light text-gray-700 leading-relaxed">
        <span className="text-4xl sm:text-5xl font-serif font-thin">
          Empower Yourself.
        </span>
        <Separator className="w-80 bg-black my-2" />
        <p className="px-0 sm:px-10 py-4">
          We believe that education is the key to a better world, through
          education everyone can be empowered. Innovation, technology and
          creative collaboration with knowledge experts worldwide are the
          features of our commitment to delivering global access to education.
          Our services and products deliver freedom to learn and the tools to
          succeed - enabling employers, learners, instructors and employees to
          empower themselves and others. By doing so, we also actively make the
          UN’s Sustainable Development Goals a reality.
        </p>
      </div>
    </div>
  );
};

export default Empower;
