"use client";
import { useState } from "react";
import Link from "next/link";
import General from "@/components/molecules/settings/General";
import Support from "@/components/molecules/settings/Support";
import Security from "@/components/molecules/settings/Security";
import Advanced from "@/components/molecules/settings/Advanced";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))]  mt-20 flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link
              href="#"
              onClick={() => handleTabClick("general")}
              className={`font-semibold ${
                activeTab === "general" ? "text-primary" : ""
              }`}
            >
              General
            </Link>
            <Link href="#" onClick={() => handleTabClick("security")}>
              Security
            </Link>
            {/* <Link href="#" onClick={() => handleTabClick("integrations")}>
              Integrations
            </Link> */}
            <Link href="#" onClick={() => handleTabClick("support")}>
              Support
            </Link>
            {/* <Link href="#" onClick={() => handleTabClick("organizations")}>
              Organizations
            </Link> */}
            <Link href="#" onClick={() => handleTabClick("advanced")}>
              Advanced
            </Link>
          </nav>
          {activeTab === "general" && <General />}
          {activeTab === "support" && <Support />}
          {activeTab === "security" && <Security />}
          {activeTab === "advanced" && <Advanced />}

          {/* Add more components for other tabs as needed */}
        </div>
      </main>
    </div>
  );
}
