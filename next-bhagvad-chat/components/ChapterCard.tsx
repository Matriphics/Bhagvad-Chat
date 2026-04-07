import Link from "next/link";

type Props = {
  number: number;
  name: string;
};

export default function ChapterCard({ number, name }: Props) {
  return (
    <Link
      href={`/chapters/${number}`}
      className="block rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <p className="text-sm font-semibold text-krishna-accent">Chapter {number}</p>
      <h3 className="mt-2 text-lg font-semibold text-krishna-primary">{name}</h3>
    </Link>
  );
}
