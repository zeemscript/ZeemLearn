"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { register, loginWithGoogle } from "@/lib/auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Key, Mail } from "lucide-react";
import { EyeIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";
const SignUp = ({ onSuccess, setIsOpen }) => {
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
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.warning("Please fill all input fields");
      setIsOpen(true);
      return;
    }


    if (formData.password !== formData.confirmPassword) {
      toast.warning("Passwords do not match");
      setIsOpen(true);
      return;
    }

    setSubmit(true);
    try {
      await register(formData.email, formData.password);
      toast.success("Account created successfully");
      onSuccess(); 
      router.push("/dashboard");
    } catch (error) {
      toast.error("Error Signing up.");
    } finally {
      setSubmit(false);
    }
  };

 const handleGoogleLogin = async () => {
   try {
     await loginWithGoogle();
     toast.success("User logged in with Google successfully");
     router.push("/dashboard");
   } catch (err) {
     toast.error(err.message);
   }
 };


  const handleShowPassword = () => setShowPswrd(true);
  const handleClosePassword = () => setShowPswrd(false);

  return (
    <div className="space-y-2">
      <span className="flex justify-center items-center text-3xl">SignUp</span>
      <form onSubmit={handleSubmit} className="py-3">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="my-4"
          autoComplete="none"
          value={formData.email}
          onChange={handleChange}
          icon={<Mail className="h-4 w-4" />}
        />
        <Input
          type={showPswrd ? "text" : "password"}
          name="password"
          placeholder="Password"
          autoComplete="none"
          className="my-4"
          value={formData.password}
          onChange={handleChange}
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
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          autoComplete="none"
          className="my-4"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={<Key className="h-4 w-4" />}
        />
        <Button type="submit" className="mt-4 w-full">
          {submit ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          SignUp
        </Button>
      </form>
      <div className="flex justify-center items-center space-x-2">
        <Separator className="w-1/2" />
        <span>or</span>
        <Separator className="w-1/2" />
      </div>
      <Button onClick={handleGoogleLogin} className="w-full space-x-2 mt-2">
        <FcGoogle size={25} /> Continue with Google
      </Button>
    </div>
  );
};

export default SignUp;
