import { Inter } from "next/font/google";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Chat APP",
  description: "Chatting Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex min-h-screen">
          <SideBar />
          <main className="flex-grow px-5 sm:px-3 pb-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
