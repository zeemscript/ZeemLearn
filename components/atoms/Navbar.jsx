"use client";
import Image from "next/image";
import Link from "next/link";
import Login from "@/app/login/Login";
import SignUp from "@/app/login/SignUp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/auth";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const user = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    router.push("/setup");
    setIsOpen(false);
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged Out successfully.");
    router.push("/");
  };

  return (
    <nav className="h-16 p-2 sm:p-4 flex justify-between items-center dark:bg-gray-900 dark:text-gray-100">
      <Link href="/" className="flex items-center">
        <Image
          alt="TLX Logo"
          src="/images/TLX_logo.png"
          width={70}
          height={40} // Increased height for better visibility
          className="object-contain" // Ensures the image fits within the specified dimensions
        />
      </Link>

      {user ? (
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
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
    </nav>
  );
};

export default Navbar;
