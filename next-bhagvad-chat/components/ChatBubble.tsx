type Props = {
  role: "user" | "ai";
  text: string;
};

export default function ChatBubble({ role, text }: Props) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
          isUser
            ? "bg-gradient-to-r from-krishna-primary to-blue-700 text-white"
            : "bg-krishna-aiBubble text-slate-800 border border-blue-100"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
