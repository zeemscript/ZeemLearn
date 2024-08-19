import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/atoms/Navbar";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeachLeadX",
  description: "Talk more, connect more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} "flex h-screen"`}>
        <NextTopLoader color="#30000" showSpinner={false} />
        <Navbar />
        <main className="bg-white ">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
