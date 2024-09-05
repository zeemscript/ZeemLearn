"use client";

import { useState } from "react";
import Image from "next/image";
import LoginPage from "@/components/atoms/LoginPage";
import SignUpPage from "@/components/atoms/SignUpPage";

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-4">
            {isLogin ? <LoginPage /> : <SignUpPage />}
          </div>
          <div className="mt-4 text-center text-sm">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <button onClick={handleToggle} className="underline">
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={handleToggle} className="underline">
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/images/bg-image.jpg"
          alt="Background"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default AuthContainer;
