"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { register, loginWithGoogle } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Loader2, Key, Mail, EyeIcon, EyeOffIcon } from "lucide-react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = ({ onSuccess, setIsOpen }) => {
  const router = useRouter();
  const [showPswrd, setShowPswrd] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Input validation
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.warning("Please fill all input fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    setSubmit(true);

    try {
      await register(formData.email, formData.password);
      toast.success("Account created successfully");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Error signing up. Please try again.");
    } finally {
      setSubmit(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google successfully");
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full"
          value={formData.email}
          onChange={handleChange}
          icon={<Mail className="h-4 w-4" />}
        />
        <Input
          type={showPswrd ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="w-full"
          value={formData.password}
          onChange={handleChange}
          icon={
            <>
              {showPswrd ? (
                <EyeOffIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => setShowPswrd(false)}
                />
              ) : (
                <EyeIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => setShowPswrd(true)}
                />
              )}
              <Key className="h-4 w-4" />
            </>
          }
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={<Key className="h-4 w-4" />}
        />
        <Button type="submit" className="w-full">
          {submit ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Sign Up
        </Button>
      </form>
      <div className="flex items-center space-x-2">
        <hr className="flex-1" />
        <span>or</span>
        <hr className="flex-1" />
      </div>
      <Button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center space-x-2 mt-2"
      >
        <FcGoogle size={25} />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
};

export default SignUpPage;
