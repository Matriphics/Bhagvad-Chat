"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function HeroSection() {
  const { language } = useLanguage();

  const images = ["/geeta1.png", "/geeta2.png", "/geeta3.png", "/geeta4.png"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="relative h-[420px] w-full overflow-hidden">

        {/* slider */}
        {images.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 will-change-opacity ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              priority={i === index}
              className="object-cover object-top"
            />
          </div>
        ))}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* content */}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-14 text-white">
            <div className="max-w-2xl">

            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {language === "en"
                ? "Krishna-inspired • Premium spiritual companion"
                : "कृष्ण-प्रेरित • प्रीमियम आध्यात्मिक साथी"}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Bhagvad Geeta
            </h1>

            <p className="mt-3 text-lg font-medium text-white/90">
              {language === "en"
                ? "Timeless wisdom for life, purpose, and dharma"
                : "जीवन, उद्देश्य और धर्म के लिए शाश्वत ज्ञान"}
            </p>

            <p className="mt-5 break-words text-sm leading-6 text-white/80 sm:text-base">
              {language === "en"
                ? "Bhagavad Gita is a sacred dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra, guiding humanity on duty, righteousness, and inner peace."
                : "भगवद गीता कुरुक्षेत्र के रणभूमि में श्रीकृष्ण और अर्जुन के बीच हुआ पवित्र संवाद है, जो कर्तव्य, धर्म और आंतरिक शांति का मार्ग दिखाता है।"}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <Link
                href="/chat"
                className="bg-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
              >
                {language === "en" ? "Start Chatting with Krishna" : "कृष्ण से चैट शुरू करें"}
              </Link>

              <Link
                href="/chapters"
                className="border border-white/40 px-6 py-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"
              >
                {language === "en" ? "Explore Chapters" : "अध्याय देखें"}
              </Link>

            </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}