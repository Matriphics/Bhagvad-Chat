 "use client";

import { useLanguage } from "./LanguageProvider";

export default function MissionSection() {
  const { language } = useLanguage();
  return (
    <section className="w-full px-4 py-2 sm:px-6">
      <div className="rounded-3xl border border-sky-200 bg-sky-100 p-8 shadow-soft">
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

