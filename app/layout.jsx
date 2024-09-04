import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import ToTop from "@/components/atoms/ToTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZeemLearn",
  description: "Empowering Education, Inspiring Innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/layout.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className} "flex h-screen"`}>
        <AuthProvider>
          <NextTopLoader color="#00BFFF" showSpinner={false} />
          <main className="bg-white">
            {children}
            <ToTop />
          </main>
          <Toaster richColors closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
