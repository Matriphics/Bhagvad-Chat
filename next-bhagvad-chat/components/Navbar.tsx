"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Settings } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const links = [
    { href: "/", label: { en: "Home", hi: "होम" } },
    { href: "/chat", label: { en: "Chat", hi: "चैट" } },
    { href: "/chapters", label: { en: "Chapters", hi: "अध्याय" } },
    { href: "/daily-shloka", label: { en: "Daily Shloka", hi: "दैनिक श्लोक" } },
  ];

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* LOGO */}
        <Link href="/" className="text-lg font-bold text-blue-600">
          Bhagvad Chat
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-medium ${
                pathname === l.href
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-500"
              }`}
            >
              {l.label[language]}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border rounded-full text-blue-600"
          >
            {language === "en" ? "हिंदी" : "English"}
          </button>

          <Link href="/settings">
            <Settings className="h-5 w-5 text-blue-600" />
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition relative z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ✅ MOBILE DRAWER (FIXED + ANIMATED) */}
      <div
        className={`fixed inset-0 z-[998] md:hidden transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >

        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 will-change-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white p-5 shadow-xl z-[999] transform transition-transform duration-300 will-change-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* HEADER */}
          <div className="flex justify-between items-center mb-5">
            <span className="font-semibold text-blue-600">
              Bhagvad Chat
            </span>

            <button onClick={() => setOpen(false)}>
              <X className="h-5 w-5 text-blue-600" />
            </button>
          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 transition"
              >
                {l.label[language]}
              </Link>
            ))}
          </nav>

          {/* FOOTER */}
          <div className="mt-6 border-t pt-4 flex gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border rounded-full text-blue-600"
            >
              {language === "en" ? "हिंदी" : "English"}
            </button>

            <Link href="/settings" onClick={() => setOpen(false)}>
              <Settings className="h-5 w-5 text-blue-600" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}