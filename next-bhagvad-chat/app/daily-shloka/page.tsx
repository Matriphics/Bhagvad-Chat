export default function DailyShlokaPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
      <h2 className="text-3xl font-bold text-krishna-primary text-center">Daily Shloka</h2>
      <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-soft">
        <p className="text-center text-2xl font-semibold text-krishna-primary">
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
        </p>
        <p className="mt-5 text-center text-slate-700">
          Focus on your actions, not on outcomes. Let this verse guide your day with peace and dedication.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-krishna-primary to-blue-700 px-5 py-2 text-white">
            Reflect on this
          </button>
        </div>
      </div>
    </section>
  );
}
