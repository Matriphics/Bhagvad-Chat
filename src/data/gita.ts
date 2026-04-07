export type Verse = {
  id: number;
  sanskrit: string;
  translation: string;
};

export type Chapter = {
  id: number;
  title: string;
  summary: string;
  verses: Verse[];
};

export const chapters: Chapter[] = Array.from({ length: 18 }).map((_, index) => {
  const chapterNumber = index + 1;
  return {
    id: chapterNumber,
    title: `Chapter ${chapterNumber}`,
    summary:
      chapterNumber === 1
        ? "Arjuna's grief and confusion on the battlefield."
        : chapterNumber === 2
          ? "Krishna introduces wisdom of the Self and duty."
          : "Teachings on yoga, devotion, and righteous action.",
    verses: [
      {
        id: 1,
        sanskrit: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।",
        translation: "In the field of dharma, gathered for battle...",
      },
      {
        id: 2,
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
        translation: "You have a right to action alone, never to its fruits.",
      },
      {
        id: 3,
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।",
        translation: "Whenever dharma declines, I manifest Myself.",
      },
    ],
  };
});

export const dailyShloka = {
  reference: "Bhagavad Gita 2.47",
  sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
  translation:
    "Focus on your actions, not on the outcomes. Let this guide your day with calm effort.",
};

export const sampleCitedResponses = [
  {
    question: "How can I stay calm in pressure?",
    answer:
      "Krishna advises steady action without attachment to results. Practice focused effort and surrender anxiety over outcomes.",
    citations: ["2.47", "6.5"],
  },
  {
    question: "How do I handle self-doubt?",
    answer:
      "The Gita teaches that confusion fades through discipline, reflection, and devotion to a higher purpose.",
    citations: ["4.39", "18.58"],
  },
];
