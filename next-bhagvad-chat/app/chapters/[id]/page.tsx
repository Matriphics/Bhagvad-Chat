import { getChapter, getChapterVerses, type ApiChapter, type ApiVerseView } from "@/lib/gitaApi";
import { notFound } from "next/navigation";
import ChapterClient from "./ChapterClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ChapterDetailPage({ params }: PageProps) {
  const { id } = await params;
  const chapterId = Number(id);
  if (!chapterId || chapterId < 1 || chapterId > 18) notFound();

  let chapter: ApiChapter | undefined;
  let verses: ApiVerseView[] = [];

  try {
    chapter = await getChapter(chapterId);
  } catch {
    notFound();
  }
  if (!chapter) notFound();

  try {
    verses = await getChapterVerses(chapterId, chapter.verses_count);
  } catch {
    verses = [];
  }

  return <ChapterClient chapter={chapter} verses={verses} />;
}

