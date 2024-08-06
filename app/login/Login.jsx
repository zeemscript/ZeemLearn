"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { login } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Key,Mail } from "lucide-react";

const Login = ({ onSuccess }) => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
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

  return (
    <div className="space-y-3">
      <span className="flex justify-center items-center text-3xl text-gradient-to-r from-violet-500 to-fuchsia-500">
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
          type="password"
          placeholder="Password"
          className="my-4"
          onChange={(e) => setPassword(e.target.value)}
          icon={<Key className="h-4 w-4" />}
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
