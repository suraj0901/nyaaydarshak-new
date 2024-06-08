import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "NyaayDarshak",
  description: "NyaayDarshak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          lato.className,
          "flex flex-col min-h-screen bg-background antialiased"
        )}
      >
        <Toaster richColors position="top-center" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
