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
          <main className="w-full min-h-[calc(100vh-68px)] px-0 pb-0 pt-0">{children}</main>
          <footer className="w-full bg-sky-900 text-white py-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <p className="text-base font-semibold">Bhagvad Chat footer placeholder: connect, learn, and grow with today's spiritual wisdom.</p>
              <p className="mt-3 text-sm text-sky-200">
                This is placeholder footer text to be updated later with links and details.
              </p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
