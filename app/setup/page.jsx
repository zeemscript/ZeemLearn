"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator"
import SetupStage1 from "@/components/molecules/SetupStage1";
import SetupStage2 from "@/components/molecules/SetupStage2";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const Setup = () => {
  const router = useRouter();
  const [stage, setStage] = useState(1);

  const handleStage1Complete = () => {
    setStage(2);
  };

  const handleStage2Complete = () => {
    toast.success("Setup Complete");
    router.push("/dashboard");
  };

  return (
    <div className="space-y-20">
      <div className="flex justify-center items-center pt-20">
        <Avatar
          size={40}
          className={`mx-4 ${stage >= 1 ? "bg-green-500" : "bg-gray-500"}`}
        >
          <AvatarFallback>1</AvatarFallback>
        </Avatar>
        <Separator
          orientation="horizontal"
          className={`w-20 sm:w-60 h-1 mx-2 ${
            stage >= 2 ? "bg-green-500" : "bg-gray-500"
          }`}
        />
        <Avatar
          size={40}
          className={`mx-4 ${stage >= 2 ? "bg-green-500" : "bg-gray-500"}`}
        >
          <AvatarFallback>2</AvatarFallback>
        </Avatar>
      </div>

      {stage === 1 && <SetupStage1 onStage1Complete={handleStage1Complete} />}
      {stage === 2 && <SetupStage2 onStage2Complete={handleStage2Complete} />}
    </div>
  
  );
};

export default Setup;
