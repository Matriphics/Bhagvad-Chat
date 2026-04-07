import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bhagvad Chat",
  description: "Modern spiritual chat app inspired by Krishna wisdom",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-68px)] max-w-6xl px-4 pb-8 pt-0">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
