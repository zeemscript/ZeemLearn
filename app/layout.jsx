import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/atoms/Navbar";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/atoms/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeachLeadX",
  description: "Empowering Education, Inspiring Innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} "flex h-screen"`}>
        <NextTopLoader color="#00BFFF" showSpinner={false} />
        <Navbar />
        <main className="bg-white ">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
