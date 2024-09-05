"use client";

import React from "react";
import LoginPage from "@/components/atoms/LoginPage";
import SignUpPage from "@/components/atoms/SignUpPage";

const AuthContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-hero bg-cover bg-center min-h-screen">
      {/* Login Section */}
      <div className="flex-1 max-w-sm p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <LoginPage />
      </div>
      {/* Sign Up Section */}
      <div className="flex-1 max-w-sm p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <SignUpPage />
      </div>
    </div>
  );
};

export default AuthContainer;
