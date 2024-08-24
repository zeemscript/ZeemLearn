"use client";
import Image from "next/image";
import Link from "next/link";
import Login from "@/app/login/Login";
import SignUp from "@/app/login/SignUp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LogOut, Menu } from "lucide-react";
import { logout } from "@/lib/auth";
import { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    router.push("/dashboard");
    setIsOpen(false);
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="h-16 p-2 sm:p-4 flex justify-between items-center bg-white w-full  fixed z-10">
      <Link href="/" className="flex items-center">
        <Image
          alt="TLX Logo"
          src="/images/TLX_logo.png"
          width={100}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex md:gap-6">
        <Link
          href="/"
          className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href={"#aboutus"}
          className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="#courses"
          className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
        >
          Courses
        </Link>
        {user && user.uid === "pHCSnMCuHgZvOJev1oGHvovlhXJ3" && (
          <Link
            href="/admin"
            className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
          >
            Admin Dashboard
          </Link>
        )}
        <Link
          href="#vision"
          className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
        >
          Our Vision
        </Link>
        <Link
          href="/blogs"
          className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          href="#contact"
          className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>

      {/* Desktop Login/Logout Button */}
      {user ? (
        <Button
          className="hidden sm:flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="hidden sm:flex bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Login
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome to TeachLeadX.</DialogTitle>
              <DialogDescription>
                {isLogin ? (
                  <Login onSuccess={handleClose} setIsOpen={setIsOpen} />
                ) : (
                  <SignUp onSuccess={handleClose} setIsOpen={setIsOpen} />
                )}
                <Button
                  className="text-gray-600 dark:text-gray-400 dark:hover:text-cyan-300"
                  onClick={handleToggleForm}
                  variant="link"
                >
                  {isLogin
                    ? "Don't have an account? Signup"
                    : "Already have an account? Login"}
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" onClose={() => setIsOpen(false)}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              <Link
                href="/"
                className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href={"#aboutus"}
                className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
              >
                About
              </Link>
              {user && user.uid === "pHCSnMCuHgZvOJev1oGHvovlhXJ3" && (
                <Link
                  href="/admin"
                  className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
                >
                  Admin Dashboard
                </Link>
              )}
              <Link
                href="#courses"
                className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
              >
                Courses
              </Link>
              <Link
                href="#vision"
                className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
              >
                Our Vision
              </Link>
              <Link
                href="/blogs"
                className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-lg font-light hover:font-normal text-black hover:text-blue-500 font-serif transition-colors duration-200"
              >
                Contact Us
              </Link>
              {user ? (
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              ) : (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                    Login
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Welcome to TeachLeadX.</DialogTitle>
                      <DialogDescription>
                        {isLogin ? (
                          <Login
                            onSuccess={handleClose}
                            setIsOpen={setIsOpen}
                          />
                        ) : (
                          <SignUp
                            onSuccess={handleClose}
                            setIsOpen={setIsOpen}
                          />
                        )}
                        <Button
                          className="text-gray-600 dark:text-gray-400 dark:hover:text-cyan-300"
                          onClick={handleToggleForm}
                          variant="link"
                        >
                          {isLogin
                            ? "Don't have an account? Signup"
                            : "Already have an account? Login"}
                        </Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
