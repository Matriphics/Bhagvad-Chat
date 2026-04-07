 "use client";

import { useLanguage } from "./LanguageProvider";

export default function MissionSection() {
  const { language } = useLanguage();
  return (
    <section className="mx-auto max-w-6xl py-2">
      <div className="rounded-3xl border border-orange-100 bg-gradient-to-r from-white via-blue-50/60 to-orange-50/70 p-8 shadow-soft">
        <h2 className="text-2xl font-extrabold text-krishna-primary">
          {language === "en" ? "Our Mission" : "हमारा मिशन"}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
          {language === "en"
            ? "To spread the timeless wisdom of Sanatan Dharma and make the teachings of the Bhagavad Gita accessible through modern technology."
            : "सनातन धर्म की शाश्वत बुद्धि को फैलाना और भगवद गीता की शिक्षाओं को आधुनिक तकनीक के माध्यम से सुलभ बनाना।"}
        </p>
      </div>
    </section>
  );
}

