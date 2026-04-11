import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Shree Krishna",
    description: "The eternal guide of dharma, devotion, and inner peace.",
    href: "/chat",
    src: "/krishna.png",
  },
  {
    title: "Shree Radha Rani",
    description: "Pure love and devotion—bhakti in its highest form.",
    href: "/chat",
    src: "/Radha.png",
  },
  {
    title: "Arjun",
    description: "Courage in confusion—learning right action through Krishna.",
    href: "/chapters",
    src: "/Arjun.png",
  },
  {
    title: "Shree Hari",
    description: "The preserver—compassion, protection, and divine balance.",
    href: "/daily-shloka",
    src: "/hari.png",
  },
  {
    title: "Coming Soon 1",
    description: "Reserved card for upcoming spiritual features and content.",
    href: "/shop",
    src: "/geeta1.png",
  },
  {
    title: "Coming Soon 2",
    description: "Reserved card for upcoming spiritual features and content.",
    href: "/contact",
    src: "/geeta2.png",
  },
  {
    title: "Coming Soon 3",
    description: "Reserved card for upcoming spiritual features and content.",
    href: "/chapters",
    src: "/geeta3.png",
  },
  {
    title: "Coming Soon 4",
    description: "Reserved card for upcoming spiritual features and content.",
    href: "/chat",
    src: "/geeta4.png",
  },
];

export default function CardGrid() {
  return (
    <section className="w-full px-4 py-2 sm:px-6">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-wide text-krishna-primary/80">Our Range</p>
        <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-krishna-primary">Explore Divine Companions</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 w-full bg-slate-50">
              <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-extrabold text-krishna-primary">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

