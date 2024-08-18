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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AtSign, Phone, ArrowBigRight } from "lucide-react";
import { toast } from "sonner";
import CountrySelector from "@/components/atoms/Countries";

const SetupStage1 = ({ onStage1Complete }) => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !phoneNumber || !country) {
      toast.error("Please fill all fields.");
      return;
    }
    toast.success("Profile setup submitted!");
    onStage1Complete();
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[450px] bg-gradient-to-r from-cyan-500 to-blue-500">
        <CardHeader>
          <CardTitle>Setup Your Profile</CardTitle>
          <CardDescription>
            Add your information so that people can know you better.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="name"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  icon={<AtSign className="h-4 w-4 text-gray-500" />}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  icon={<Phone className="h-4 w-4 text-gray-500" />}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <CountrySelector
                  onCountryChange={(value) => setCountry(value)}
                />
              </div>
            </div>
            <CardFooter className="flex justify-end pt-8">
              <Button
                type="submit"
                variant="secondary"
                className="px-4 py-2 text-sm flex space-x-2"
              >
                Next
                <ArrowBigRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SetupStage1;
