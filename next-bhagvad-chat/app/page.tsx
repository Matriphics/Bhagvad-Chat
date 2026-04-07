import AboutSection from "@/components/AboutSection";
import CardGrid from "@/components/CardGrid";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";

export default function HomePage() {
  return (
    <div className="space-y-8 pb-10 sm:space-y-12">
      <HeroSection />
      <section className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-white/80 p-4 shadow-soft sm:p-6">
        <AboutSection />
      </section>
      <section className="mx-auto max-w-6xl rounded-3xl border border-orange-100 bg-gradient-to-br from-blue-50/70 to-orange-50/70 p-4 shadow-soft sm:p-6">
        <MissionSection />
      </section>
      <section className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-white/80 p-4 shadow-soft sm:p-6">
        <CardGrid />
      </section>
    </div>
  );
}
