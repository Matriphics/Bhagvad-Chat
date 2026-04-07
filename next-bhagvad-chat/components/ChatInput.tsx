"use client";

import { SendHorizonal } from "lucide-react";
import { FormEvent, useState } from "react";

type Props = {
  placeholder?: string;
  onSend: (value: string) => void;
};

export default function ChatInput({ placeholder = "Ask Krishna...", onSend }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 rounded-2xl border border-blue-100 bg-white p-2 shadow-soft">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        maxLength={500}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        className="w-full rounded-xl px-3 py-2 outline-none"
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-krishna-primary to-blue-700 px-4 text-white transition hover:opacity-95"
      >
        <SendHorizonal className="h-4 w-4" />
      </button>
    </form>
  );
}
