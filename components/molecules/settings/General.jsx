"use client";import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const General = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", { email: user.email, username });
    try {
      const response = await axios.patch(
        "/api/usersinfo",
        { email: user.email, username } // Send email and username
      );
      console.log(response.data);
      toast.success("Profile updated successfully!");
      setUsername("")
    } catch (e) {
      console.log(e);
      toast.error("Oh no! Error editing info");
    }
  };


  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>
            Update your profile information such as your display name and email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              name="username"
              placeholder="User Name"
              onChange={handleChange}
              value={username}
            />
            <Button type="submit">Save</Button>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4"></CardFooter>
      </Card>
    </div>
  );
};

export default General;
