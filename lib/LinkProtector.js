import React from "react";
import { useAuth } from "@/lib/AuthContext";
import { toast } from "sonner";
import Link from "next/link";

const LinkProtector = ({ children, href, ...props }) => {
  const { user } = useAuth();

  const handleLinkClick = (event) => {
    if (!user) {
      toast.error("You must be logged in to access this page.");
    }
  };

  if (user) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <span onClick={handleLinkClick} {...props} className="cursor-pointer">
        {children}
      </span>
    );
  }
};

export default LinkProtector;
