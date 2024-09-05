import React from 'react'
import { useAuth } from "@/lib/AuthContext";
import { toast } from "sonner";

const RouteProtector = ({children}) => {
  const { user } = useAuth();
  if (!user) {
    toast.error("You must be logged in to access this page.");
  } else {
    return children;
  }
  
}

export default RouteProtector;
