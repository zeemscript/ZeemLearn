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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AtSign } from "lucide-react";
import { Phone } from "lucide-react";
import CountrySelector from "@/components/atoms/Countries";
import { ArrowBigRight } from "lucide-react";

const SetupStage1 = () => {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center ">
      <Card className="w-[450px] bg-gradient-to-r from-cyan-500 to-blue-500">
        <CardHeader>
          <CardTitle>Setup Your Profile</CardTitle>
          <CardDescription>
            Add your informations so that people can know you better.
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
                  onChange={(e) => setUsername(e.target.value)}
                  icon={<AtSign className="h-4 w-4 text-gray-500" />}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Phone Number</Label>
                <Input
                  id="phone number"
                  placeholder="phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  icon={<Phone className="h-4 w-4 text-gray-500" />}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Country</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue
                      placeholder="Select"
                      onChange={(e) => {
                        const countryCode = e.target.value;
                        const countryName = countryList()
                          .getData()
                          .find((option) => option.value === countryCode).label;
                        setCountry(countryName);
                      }}
                    />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <CountrySelector />
                  </SelectContent>
                </Select>
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
