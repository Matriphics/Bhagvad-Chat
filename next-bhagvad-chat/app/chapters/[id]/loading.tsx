export default function ChapterLoading() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-md border border-blue-200 bg-white/95 px-3 py-2 text-sm text-krishna-primary shadow-soft transition-all duration-300 ease-out animate-[fadeIn_.25s_ease-out]">
      <span className="h-3 w-3 rounded-full border-2 border-blue-300 border-t-krishna-primary animate-spin" />
      <span className="tracking-wide">Loading...</span>
    </div>
  );
}

