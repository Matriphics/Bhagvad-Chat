import Link from "next/link";

type Props = {
  number: number;
  name: string;
};

export default function ChapterCard({ number, name }: Props) {
  return (
    <Link
      href={`/chapters/${number}`}
      className="mx-auto block w-full max-w-sm rounded-2xl border border-sky-200 bg-sky-100 p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Chapter {number}</p>
      <h3 className="mt-2 text-base font-semibold text-slate-900">{name}</h3>
    </Link>
  );
}
