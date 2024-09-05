// components/Login.js

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { login, loginWithGoogle } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Loader2, Key, Mail, EyeIcon, EyeOffIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPswrd, setShowPswrd] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please fill all inputs");
      return;
    }
    setSubmit(true);
    try {
      await login(email, password);
      toast.success("Logged in successfully");
      router.push("/dashboard");
    } catch (e) {
      toast.error(e.message);
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
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          className="w-full"
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="h-4 w-4" />}
        />
        <Input
          type={showPswrd ? "text" : "password"}
          placeholder="Password"
          className="w-full"
          onChange={(e) => setPassword(e.target.value)}
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
        <Button type="submit" className="w-full">
          {submit ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Login
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

export default LoginPage;
