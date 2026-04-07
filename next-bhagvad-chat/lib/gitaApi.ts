export type ApiChapter = {
  chapter_number: number;
  verses_count: number;
  name: string;
  translation: string;
  transliteration: string;
  meaning: { en: string; hi: string };
  summary: { en: string; hi: string };
};

export type ApiVerseRaw = {
  verse: number;
  slok: string;
  prabhu?: { et?: string; ec?: string };
  siva?: { et?: string; ec?: string };
  purohit?: { et?: string };
  adi?: { et?: string };
  rams?: { ht?: string; hc?: string };
  tej?: { ht?: string };
  chinmay?: { hc?: string };
};

export type ApiVerseView = {
  verse: number;
  sanskrit: string;
  englishTranslation: string;
  hindiTranslation: string;
  englishExplanation: string;
  hindiExplanation: string;
};

const BASE = "https://vedicscriptures.github.io";

async function fetchJson<T>(url: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  const res = await fetch(url, {
    next: { revalidate: 86400 },
    signal: controller.signal,
  }).finally(() => clearTimeout(timeout));

  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json() as Promise<T>;
}

export async function getAllChapters() {
  return fetchJson<ApiChapter[]>(`${BASE}/chapters`);
}

export async function getChapter(chapterId: number) {
  return fetchJson<ApiChapter>(`${BASE}/chapter/${chapterId}`);
}

function normalizeVerse(v: ApiVerseRaw): ApiVerseView {
  return {
    verse: v.verse,
    sanskrit: v.slok,
    englishTranslation: v.prabhu?.et || v.siva?.et || v.purohit?.et || v.adi?.et || "Translation unavailable.",
    hindiTranslation: v.rams?.ht || v.tej?.ht || "हिंदी अनुवाद उपलब्ध नहीं है।",
    englishExplanation: v.prabhu?.ec || v.siva?.ec || "Explanation unavailable.",
    hindiExplanation: v.rams?.hc || v.chinmay?.hc || "हिंदी व्याख्या उपलब्ध नहीं है।",
  };
}

export async function getChapterVerses(chapterId: number, verseCount: number) {
  const rawVersesSettled = await Promise.allSettled(
    Array.from({ length: verseCount }, (_, i) => fetchJson<ApiVerseRaw>(`${BASE}/slok/${chapterId}/${i + 1}`)),
  );

  const rawVerses = rawVersesSettled
    .filter((result): result is PromiseFulfilledResult<ApiVerseRaw> => result.status === "fulfilled")
    .map((result) => result.value);

  return rawVerses.map(normalizeVerse);
}

