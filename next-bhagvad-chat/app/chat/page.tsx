"use client";

import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";
import { useLanguage } from "@/components/LanguageProvider";
import { useEffect, useMemo, useRef, useState } from "react";
import { Menu } from "lucide-react";

type Msg = { id: number; role: "user" | "ai"; text: string };
type Chat = { id: number; title: string; messages: Msg[] };

export default function ChatPage() {
  const { language } = useLanguage();
  const lang = language as "en" | "hi";

  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const endRef = useRef<HTMLDivElement>(null);

  // load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("bhagvad-chats");
    if (stored) {
      const parsed = JSON.parse(stored);
      setChats(parsed);
      if (parsed.length) setActiveChatId(parsed[0].id);
    }
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem("bhagvad-chats", JSON.stringify(chats));
  }, [chats]);

  const activeChat = chats.find((c) => c.id === activeChatId);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages]);

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };
    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const sendMessage = (text: string) => {
    if (!activeChat) return;

    const userMsg: Msg = { id: Date.now(), role: "user", text };

    const updatedChats = chats.map((chat) =>
      chat.id === activeChat.id
        ? {
            ...chat,
            title: chat.messages.length === 0 ? text.slice(0, 20) : chat.title,
            messages: [...chat.messages, userMsg],
          }
        : chat
    );

    setChats(updatedChats);

    setTimeout(() => {
      const aiMsg: Msg = {
        id: Date.now() + 1,
        role: "ai",
        text:
          lang === "en"
            ? "Krishna teaches to act without attachment. Focus on your duty."
            : "कृष्ण सिखाते हैं कि फल की आसक्ति छोड़कर कर्म करो।",
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChat.id
            ? { ...chat, messages: [...chat.messages, aiMsg] }
            : chat
        )
      );
    }, 700);
  };

  const welcomeTitle = useMemo(
    () =>
      lang === "en"
        ? "Seek Guidance from the Bhagavad Gita"
        : "भगवद गीता से मार्गदर्शन पाएँ",
    [lang]
  );

  return (
    <div className="flex h-[100vh]">

      {/* SIDEBAR */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 overflow-hidden bg-slate-50 border-r`}
      >
        <div className="p-4 flex flex-col h-full">
          <button
            onClick={createNewChat}
            className="mb-4 rounded-lg bg-blue-600 text-white py-2"
          >
            + New Chat
          </button>

          <div className="flex-1 overflow-y-auto space-y-2">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`cursor-pointer rounded-lg p-2 text-sm ${
                  chat.id === activeChatId
                    ? "bg-blue-100"
                    : "hover:bg-blue-50"
                }`}
              >
                {chat.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex flex-col flex-1">

        {/* TOP BAR */}
        <div className="flex items-center gap-3 border-b p-3">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu />
          </button>
          <h2 className="font-semibold">Krishna AI</h2>
        </div>

        {/* CHAT AREA */}
        {!activeChat || activeChat.messages.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-center px-4">
            <div>
              <h3 className="text-3xl font-bold text-krishna-primary">
                {welcomeTitle}
              </h3>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-3">
            {activeChat.messages.map((msg) => (
              <ChatBubble key={msg.id} role={msg.role} text={msg.text} />
            ))}
            <div ref={endRef} />
          </div>
        )}

        {/* INPUT */}
        <div className="p-4 border-t">
          <ChatInput
            placeholder={
              lang === "en"
                ? "Ask Krishna..."
                : "कृष्ण से पूछें..."
            }
            onSend={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}