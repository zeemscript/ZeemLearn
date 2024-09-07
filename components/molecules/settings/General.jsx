"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";
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
  const id = user._id;
  const [form, setFormData] = useState({
    username: "",
    profilepic: null,
  });

 const handleChange = (event) => {
   const { name, value, files } = event.target;
   if (name === "profilepic" && files.length > 0) {
     setFormData((prevFormData) => ({ ...prevFormData, profilepic: files[0] }));
   } else {
     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
   }
 };


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("id", id); // Add the user's id
  formData.append("username", form.username); // Add the username
  if (form.profilepic) {
    formData.append("profilepic", form.profilepic); // Add the profile picture file
  }

  try {
    const response = await axios.put("/api/usersinfo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
    toast.success("Profile updated successfully!");
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
              placeholder="User Name"
              onChange={handleChange}
              value={user ? user.username : ""}
            />
            <Input
              type="file"
              placeholder="Profile Picture"
              onChange={handleChange}
              value={user ? user.profilepic : ""}
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
