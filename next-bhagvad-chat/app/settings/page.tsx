"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [time, setTime] = useState("07:00");

  return (
    <section className="mx-auto max-w-xl space-y-6 px-4 py-10 sm:px-6">
      <h2 className="text-3xl font-bold text-krishna-primary">Settings</h2>

      <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <p className="font-medium text-slate-700">Daily reminder</p>
          <button
            onClick={() => setDailyReminder((v) => !v)}
            className={`h-7 w-12 rounded-full p-1 transition ${dailyReminder ? "bg-krishna-primary" : "bg-slate-300"}`}
          >
            <span
              className={`block h-5 w-5 rounded-full bg-white transition ${dailyReminder ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
        </div>

        <div className="mt-5">
          <label htmlFor="reminder-time" className="mb-2 block text-sm text-slate-600">
            Reminder time
          </label>
          <input
            id="reminder-time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded-xl border border-blue-200 px-3 py-2"
          />
        </div>
      </div>
    </section>
  );
}
