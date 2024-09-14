"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
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
  const email = user.email;
  const [username, setUsername] = useState("");
  const [change, setChange] = useState(false);

  useEffect(() => {
    console.log(user.email);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/usersinfo?email=${email}`);
        setUsername(response.data.username);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChange(true);
    console.log("Submitting:", { email, username });
    try {
      const response = await axios.patch("/api/usersinfo", {
        email,
        username,
      });
      console.log(response.data);
      toast.success("Profile updated successfully!");
      setChange(false);
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
            <Button
              type="submit"
              disabled={change}
              className={change ? "opacity-50 cursor-not-allowed" : ""}
            >
              Save
            </Button>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4"></CardFooter>
      </Card>
    </div>
  );
};

export default General;
