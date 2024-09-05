import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import ToTop from "@/components/atoms/ToTop";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ZeemLearn",
  description:
    "ZeemLearn connects learners with the best courses from top global platforms. Discover flexible, high-quality education tailored to your needs.",
  openGraph: {
    title: "ZeemLearn - Unlock Your Learning Potential",
    description:
      "Connecting You with the Best Courses Across Top Learning Platforms.",
    url: "https://zeemlearn.vercel.app", 
    type: "website",
    images: [
      {
        url: "https://zeemlearn.vercel.app/apple-icon.png", 
        width: 1200,
        height: 630,
        alt: "ZeemLearn Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeemLearn - Unlock Your Learning Potential",
    description:
      "Connecting You with the Best Courses Across Top Learning Platforms.",
    images: ["https://zeemlearn.vercel.app/apple-icon.png"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/layout.png"
          type="image/x-icon"
        />
      </head>
      <body className={`${inter.className} `}>
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
