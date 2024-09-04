"use clent";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center  mx-auto my-auto bg-hero bg-cover bg-center font-serif">
      <span className="flex flex-col text-4xl sm:text-6xl -pt-32 text-center font-serif text-white  justify-center items-center">
        Welcome to ZeemLearn
        <br />
        <span className="py-4">
          Empowering Education, Inspiring Innovation.
        </span>
      </span>
      <div>
        <Link href={"/dashboard"} className="flex text-center ">
          <Button size="lg" className="my-10 text-2xl py-4 hover:bg-slate-950">
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
