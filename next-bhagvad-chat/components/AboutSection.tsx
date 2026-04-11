 "use client";

import { useLanguage } from "./LanguageProvider";

export default function AboutSection() {
  const { language } = useLanguage();
  const items = [
    {
      title: language === "en" ? "Who is Krishna" : "कृष्ण कौन हैं",
      description:
        language === "en"
          ? "Shree Krishna is the Supreme guide and friend, teaching devotion, right action, and inner steadiness through dharma."
          : "श्रीकृष्ण परम मार्गदर्शक और मित्र हैं, जो भक्ति, उचित कर्म और धर्म के द्वारा मन की स्थिरता सिखाते हैं।",
    },
    {
      title: language === "en" ? "Who is Arjun" : "अर्जुन कौन हैं",
      description:
        language === "en"
          ? "Arjuna is a warrior facing doubt and responsibility. His questions mirror our own struggles with fear, duty, and purpose."
          : "अर्जुन एक योद्धा हैं जो संशय और जिम्मेदारी से जूझ रहे हैं। उनके प्रश्न हमारे भय, कर्तव्य और उद्देश्य जैसे संघर्षों को दर्शाते हैं।",
    },
    {
      title: language === "en" ? "What is Bhagavad Gita" : "भगवद गीता क्या है",
      description:
        language === "en"
          ? "A sacred conversation on the battlefield of Kurukshetra—revealing yoga, karma, bhakti, and the path to peace."
          : "कुरुक्षेत्र के रण में हुआ दिव्य संवाद—जो योग, कर्म, भक्ति और शांति का मार्ग बताता है।",
    },
  ];

  return (
    <section className="w-full px-4 py-2 sm:px-6">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-krishna-primary/70">
          {language === "en" ? "Why Bhagvad Chat" : "क्यों भगवद चैट"}
        </p>
        <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-krishna-primary sm:text-3xl">
          {language === "en" ? "Rooted in Wisdom, Built for Today" : "शाश्वत ज्ञान, आधुनिक अनुभव"}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-blue-100 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-extrabold text-krishna-primary">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-krishna-primary">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

