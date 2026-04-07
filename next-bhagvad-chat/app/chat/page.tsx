"use client";

import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";
import { useLanguage } from "@/components/LanguageProvider";
import { useEffect, useMemo, useRef, useState } from "react";

type Msg = { id: number; role: "user" | "ai"; text: string };

const replies: Record<"en" | "hi", string[]> = {
  en: [
    "Krishna teaches steady action without attachment to outcomes. Focus on effort with a calm mind.",
    "Karma is conscious action aligned with dharma—do your duty, and surrender the result.",
    "When anger rises, pause, breathe, and return to clarity. Discipline of the mind is the path to peace.",
  ],
  hi: [
    "कृष्ण सिखाते हैं कि फल की आसक्ति छोड़कर कर्म करो। शांत मन से प्रयास पर ध्यान दो।",
    "कर्म का अर्थ है धर्म के अनुसार जागरूक कार्रवाई—कर्तव्य करो और परिणाम ईश्वर पर छोड़ दो।",
    "जब क्रोध उठे, ठहरो, श्वास लो और स्पष्टता में लौटो। मन का अनुशासन ही शांति का मार्ग है।",
  ],
};

const promptChips: Record<"en" | "hi", string[]> = {
  en: ["How to deal with anxiety?", "What is karma?", "How to control anger?"],
  hi: ["चिंता से कैसे निपटें?", "कर्म क्या है?", "क्रोध को कैसे नियंत्रित करें?"],
};

export default function ChatPage() {
  const { language } = useLanguage();
  const lang = language as "en" | "hi";

  const [messages, setMessages] = useState<Msg[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    setMessages((m) => [...m, { id: Date.now(), role: "user", text }]);
    setTimeout(() => {
      const pool = replies[lang];
      const reply = pool[Math.floor(Math.random() * pool.length)];
      setMessages((m) => [...m, { id: Date.now() + 1, role: "ai", text: reply }]);
    }, 750);
  };

  const welcomeTitle = useMemo(
    () => (lang === "en" ? "Seek Guidance from the Bhagavad Gita" : "भगवद गीता से मार्गदर्शन पाएँ"),
    [lang],
  );

  const welcomeSubtitle = useMemo(
    () => (lang === "en" ? "Ask anything about life, purpose, or dharma" : "जीवन, उद्देश्य या धर्म के बारे में कुछ भी पूछें"),
    [lang],
  );

  return (
    <section className="mx-auto max-w-3xl font-serif">
      <div className="rounded-3xl border border-blue-100 bg-white shadow-soft">
        <div className="border-b border-blue-100 px-6 py-5">
          <h2 className="text-2xl font-black tracking-tight text-krishna-primary">{lang === "en" ? "Chat" : "चैट"}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-700">{lang === "en" ? "Ask Krishna..." : "कृष्ण से पूछें..."}</p>
        </div>

        {messages.length === 0 ? (
          <div className="space-y-5 px-6 py-12 text-center">
            <h3 className="text-4xl font-black tracking-tight text-krishna-primary">{welcomeTitle}</h3>
            <p className="text-base font-semibold text-slate-700">{welcomeSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {promptChips[lang].map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-krishna-primary transition-all duration-200 hover:bg-blue-100"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-[62vh] space-y-3 overflow-y-auto px-6 py-6">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} role={msg.role} text={msg.text} />
            ))}
            <div ref={endRef} />
          </div>
        )}
      </div>

      <div className="sticky bottom-3 mt-4">
        <ChatInput placeholder={lang === "en" ? "Ask Krishna..." : "कृष्ण से पूछें..."} onSend={sendMessage} />
      </div>
    </section>
  );
}

