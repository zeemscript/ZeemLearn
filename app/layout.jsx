import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/AuthContext";
import "@/styles/globals.css";
import Navbar from "@/components/atoms/Navbar";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/atoms/Footer";
import ToTop from "@/components/atoms/ToTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeachLeadX",
  description: "Empowering Education, Inspiring Innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/layout.png" type="image/x-icon" />
      <body className={`${inter.className} "flex h-screen"`}>
        <AuthProvider>
          <NextTopLoader color="#00BFFF" showSpinner={false} />
          <Navbar />
          <main className="bg-white pt-10">
            {children}
            {/* <ToTop /> */}
          </main>
          <Footer />
          <Toaster richColors closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
