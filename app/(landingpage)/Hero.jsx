"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import LinkProtector from "@/lib/LinkProtector";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-hero bg-cover bg-center text-white px-4 md:px-8">
      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-semibold tracking-wide font-serif py-6">
        Unlock Your Learning Potential
      </h1>

      {/* Subtext */}
      <p className="py-4 text-lg sm:text-2xl md:text-3xl text-center font-light max-w-4xl">
        Connecting You with the Best Courses Across Top Learning Platforms.
      </p>

      {/* Button */}
      <div className="mt-8">
        <LinkProtector href="/dashboard" className="text-center">
          <Button
            size="lg"
            className="px-9 py-3 text-lg md:text-xl font-semibold bg-gray-900 hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-xl"
          >
            Get Started
          </Button>
        </LinkProtector>
      </div>
    </div>
  );
};

export default Hero;
