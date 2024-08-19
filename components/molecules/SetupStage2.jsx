"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";

const SetupStage2 = ({ onStage2Complete }) => {
  const [image, setImage] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!image || !agreed) {
      toast.error("Please upload a profile picture and agree to the terms.");
      return;
    }
    onStage2Complete();
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>Setup Your Profile</CardTitle>
          <CardDescription>Please complete your profile setup.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I agree to the terms and rules and regulation.</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full">
            <Check className="mr-2 h-4 w-4" /> Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  
  );
};

export default SetupStage2;
