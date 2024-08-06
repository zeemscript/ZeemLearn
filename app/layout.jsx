import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/atoms/Navbar";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZEEMCONNECT",
  description: "Talk more, connect more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} "flex h-screen"`}>
        <Navbar />
        <main className="flex-grow px-5 sm:px-3 pb-20 bg-white bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-full">
          {children}
        </main>
        <Toaster/>
      </body>
    </html>
  );
}
