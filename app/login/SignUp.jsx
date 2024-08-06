"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Key, Mail } from "lucide-react";

const SignUp = ({ onSuccess }) => {
  const router = useRouter();
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
    if (formData.password !== formData.confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }
    setSubmit(true);
    try {
      await register(formData.email, formData.password);
      toast.success("Account created successfully");
      onSuccess();
      router.push("/dashboard");
    } catch (error) {
      toast.error("Error Signing in.");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div className="space-y-2">
      <span className="flex justify-center items-center text-3xl text-">
        SignUp
      </span>
      <form onSubmit={handleSubmit} className="py-3">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="my-4"
          autocomplete="none"
          value={formData.email}
          onChange={handleChange}
          icon={<Mail className="h-4 w-4" />}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          autocomplete="none"
          className="my-4"
          value={formData.password}
          onChange={handleChange}
          icon={<Key className="h-4 w-4" />}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          autocomplete="none"
          className="my-4"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={<Key className="h-4 w-4" />}
        />
        <Button type="submit" variant="outline" className="my-4">
          {submit ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}{" "}
          SignUp
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
