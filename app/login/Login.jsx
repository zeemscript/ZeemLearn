"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { login } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Key, Mail } from "lucide-react";
import { EyeIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";

const Login = ({ onSuccess, setIsOpen }) => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPswrd, setShowPswrd] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please fill all inputs");
      setIsOpen(true); 
      return;
    }
    setSubmit(true);
    try {
      await login(email, password);
      toast.success("Logged in successfully");
      onSuccess();
      router.push("/dashboard");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSubmit(false);
    }
  };

  const handleShowPassword = () => setShowPswrd(true);
  const handleClosePassword = () => setShowPswrd(false);

  return (
    <div className="space-y-3">
      <span className="flex justify-center items-center text-3xl text-gradient-to-r from-violet-500 to-red-500">
        Login
      </span>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          className="my-4"
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="h-4 w-4" />}
        />
        <Input
          type={showPswrd ? "text" : "password"}
          placeholder="Password"
          className="my-4"
          onChange={(e) => setPassword(e.target.value)}
          icon={
            <>
              {showPswrd ? (
                <EyeOffIcon className="h-5 w-5" onClick={handleClosePassword} />
              ) : (
                <EyeIcon className="h-5 w-5" onClick={handleShowPassword} />
              )}
              <Key className="h-4 w-4" />
            </>
          }
        />
        <Button type="submit" variant="outline" className="my-4">
          {submit ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
