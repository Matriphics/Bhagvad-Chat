import VerseCard from "@/components/VerseCard";

const verses = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    translation: "You have a right to perform your prescribed duties, but not to the fruits of your actions.",
  },
  {
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    translation: "Whenever dharma declines, I manifest Myself.",
  },
  {
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।",
    translation: "Lift yourself by your own mind, and do not degrade yourself.",
  },
];

export default function VersesPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h2 className="text-3xl font-bold text-krishna-primary">Verses</h2>
      <div className="space-y-4">
        {verses.map((verse) => (
          <VerseCard key={verse.sanskrit} sanskrit={verse.sanskrit} translation={verse.translation} />
        ))}
      </div>
    </section>
  );
}
