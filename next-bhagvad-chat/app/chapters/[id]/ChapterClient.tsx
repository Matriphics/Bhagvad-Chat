"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { ApiChapter, ApiVerseView } from "@/lib/gitaApi";
import Link from "next/link";

type Props = {
  chapter: ApiChapter;
  verses: ApiVerseView[];
};

export default function ChapterClient({ chapter, verses }: Props) {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === "en";
  const chapterTitle = isEnglish ? chapter.translation : chapter.name;
  const chapterMeaning = isEnglish ? chapter.meaning?.en : chapter.meaning?.hi;
  const chapterSummary = isEnglish ? chapter.summary?.en : chapter.summary?.hi;

  return (
    <section className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/chapters" className="text-sm font-medium text-krishna-primary hover:underline">
          ← Back to Chapters
        </Link>
        <div className="inline-flex rounded-full border border-blue-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`rounded-full px-3 py-1 text-sm ${isEnglish ? "bg-blue-100 text-krishna-primary" : "text-slate-600"}`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("hi")}
            className={`rounded-full px-3 py-1 text-sm ${!isEnglish ? "bg-blue-100 text-krishna-primary" : "text-slate-600"}`}
          >
            हिंदी
          </button>
        </div>
      </div>

      <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-soft sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-krishna-primary sm:text-3xl">
          Chapter {chapter.chapter_number}: {chapterTitle || "Bhagavad Gita"}
        </h1>
        {chapterMeaning ? <p className="mt-3 text-sm font-medium text-slate-600">{chapterMeaning}</p> : null}
        <p className="mt-4 whitespace-pre-line leading-relaxed text-slate-700">{chapterSummary || "Summary unavailable."}</p>
      </article>

      <div className="space-y-4">
        {verses.length === 0 ? (
          <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-600">
              Verses are temporarily unavailable for this chapter. Please refresh in a moment.
            </p>
          </article>
        ) : null}
        {verses.map((verse) => (
          <article key={verse.verse} className="rounded-xl border border-blue-100 bg-white/90 p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-krishna-primary">
              Verse {chapter.chapter_number}.{verse.verse}
            </h2>
            <p className="mt-3 text-center text-lg leading-relaxed text-slate-900">{verse.sanskrit}</p>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-600">
                  {isEnglish ? "English Translation:" : "Hindi Translation:"}
                </p>
                <p className="mt-1 leading-relaxed text-slate-700">
                  {isEnglish ? verse.englishTranslation : verse.hindiTranslation}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-600">
                  {isEnglish ? "Explanation:" : "व्याख्या:"}
                </p>
                <p className="mt-1 whitespace-pre-line leading-relaxed text-slate-600">
                  {isEnglish ? verse.englishExplanation : verse.hindiExplanation}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

