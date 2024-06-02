import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Navbar from "./Navbar";

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
          "min-h-screen flex flex-col bg-background antialiased"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
