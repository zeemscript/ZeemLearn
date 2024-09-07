"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginPage from "@/components/atoms/Loginpage";
import SignUpPage from "@/components/atoms/SignUpPage";
import { House } from "lucide-react";

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      {/* Left Section: Form on top of background image for small screens */}
      <div className="relative flex items-center justify-center py-10 lg:px-20 bg-hero bg-cover bg-center lg:bg-none">
        <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
        {/* Overlay for better text readability */}
        <div className="relative z-10 mx-auto grid w-full max-w-md gap-6 p-6 bg-white/90 backdrop-blur-md shadow-lg rounded-lg border border-gray-200 md:max-w-lg lg:bg-white lg:p-0 lg:shadow-none">
          <div className="flex justify-center items-center mb-4">
            <Link
              href="/"
              className="flex items-center text-gray-700 hover:underline"
            >
              <House size={25} className="mr-2" /> Back To Landing Page
            </Link>
          </div>
          <div className="grid gap-6">
            {isLogin ? <LoginPage /> : <SignUpPage />}
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  onClick={handleToggle}
                  className="underline text-blue-500"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={handleToggle}
                  className="underline text-blue-500"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Image on larger screens */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/images/heroimg.jpg"
          alt="Background"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthContainer;
