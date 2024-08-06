"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import SetupStage1 from "@/components/molecules/SetupStage1";
import SetupStage2 from "@/components/molecules/SetupStage2";
const Setup = () => {
  const [stage1, setStage1] = useState(false);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);
  const [skip, setSkip] = useState(false);

  const handleStage1Complete = () => {
    setStage1(true);
  };

  return (
    <>
      <div className="space-y-20">
        <div className="flex justify-center items-center pt-20">
          <Avatar
            size={40}
            className={`mx-4 ${stage1 ? "bg-green-500" : "bg-gray-500"}`}
          >
            <AvatarFallback>1</AvatarFallback>
          </Avatar>
          <Separator
            orientation="horizontal"
            className={`w-20 sm:w-60 h-1 mx-2 ${
              stage1 ? "bg-green-500" : "bg-gray-500"
            }`}
          ></Separator>

          <Avatar size={40} className="mr-4 bg-gray-500">
            <AvatarFallback>2</AvatarFallback>
          </Avatar>
          <Separator
            orientation="horizontal"
            className="w-20 sm:w-60 h-1 mx-2 bg-gray-500"
          ></Separator>

          <Avatar size={40} className="mx-2 bg-gray-500">
            <AvatarFallback>3</AvatarFallback>
          </Avatar>
        </div>
        {stage1 ? (
          <SetupStage2 />
        ) : (
          <SetupStage1 onStage1Complete={handleStage1Complete} />
        )}
      </div>
    </>
  );
};

export default Setup;
