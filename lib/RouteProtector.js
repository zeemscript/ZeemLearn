"use client";
import { useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RouteProtector = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("You must be logged in to access this page.");
      router.push("/signin");
    }
  }, [user, loading, router]);

  if (loading) return null;

  return user ? children : null;
};

export default RouteProtector;
