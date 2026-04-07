import ChapterCard from "@/components/ChapterCard";
import { getAllChapters } from "@/lib/gitaApi";

export default async function ChaptersPage() {
  const chapters = await getAllChapters();

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-krishna-primary">Chapters</h2>
        <p className="mt-2 text-slate-600">Explore all 18 chapters of the Bhagavad Gita.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.chapter_number} number={chapter.chapter_number} name={chapter.translation} />
        ))}
      </div>
    </section>
  );
}
