"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/AuthContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LineChart,
  House,
  PanelLeft,
  Search,
  LayoutDashboard,
  LogOut,
  Settings,
  CircleHelp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashNavbar = () => {
  const { user } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      toast.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <header className="fixed w-full  z-10 flex h-20 items-center gap-4 border-b bg-gray-900 px-4 ">
        <Sheet className="bg-gray-900">
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs bg-gray-900">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center">
                <Image
                  alt="zeemlearn Logo"
                  src="/images/zeemlearnlogo.png"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </Link>

              <Link
                href="/"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <House className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex">
          <Link href="/" className="flex items-center">
            <Image
              alt="zeemlearn Logo"
              src="/images/zeemlearnlogo.png"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              {user && user.photoURL ? (
                <Image
                  src={user.photoURL}
                  width={36}
                  height={36}
                  alt={user.displayName}
                  className="overflow-hidden rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-900" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LayoutDashboard size={20} className="mr-2" />
              <Link href="/dashboard"> Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex">
                <Settings size={20} className="mr-2" />
                <Link href="/dashboard/settings">Settings</Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CircleHelp size={20} className="mr-2" />
              Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut size={20} className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  );
};

export default DashNavbar;
