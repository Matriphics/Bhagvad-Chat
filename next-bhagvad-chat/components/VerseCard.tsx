type Props = {
  sanskrit: string;
  translation: string;
};

export default function VerseCard({ sanskrit, translation }: Props) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <p className="text-lg font-semibold text-krishna-primary">{sanskrit}</p>
      <p className="mt-3 text-sm text-slate-700">{translation}</p>
    </div>
  );
}
