"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "hi";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("bhagvad-language");
    if (stored === "en" || stored === "hi") {
      setLanguage(stored);
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        localStorage.setItem("bhagvad-language", next);
        setLanguage(next);
      },
      toggleLanguage: () =>
        setLanguage((prev) => {
          const next = prev === "en" ? "hi" : "en";
          localStorage.setItem("bhagvad-language", next);
          return next;
        }),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
