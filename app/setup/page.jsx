"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SetupStage1 from "@/components/molecules/SetupStage1";

const Setup = () => {
  return (
    <>
      <div className="space-y-20">
        <div className="flex justify-center items-center pt-20">
          <Avatar size={40} className="mx-4">
            <AvatarFallback >1</AvatarFallback>
          </Avatar>
          <Separator
            orientation="horizontal"
            className="w-20 sm:w-60 h-1 mx-2"
          ></Separator>

          <Avatar size={40} className="mr-4">
            <AvatarFallback >2</AvatarFallback>
          </Avatar>
          <Separator
            orientation="horizontal"
            className="w-20 sm:w-60 h-1 mx-2"
          ></Separator>

          <Avatar size={40} className="mx-2">
            <AvatarFallback >3</AvatarFallback>
          </Avatar>
        </div>
     <SetupStage1/>
      </div>
    </>
  );
};

export default Setup;
