import AboutSection from "@/components/AboutSection";
import CardGrid from "@/components/CardGrid";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";

export default function HomePage() {
  return (
    <div className="space-y-0 pb-0">
      <HeroSection />
      <section className="w-full bg-sky-50 py-10 sm:py-16">
        <AboutSection />
      </section>
      <section className="w-full bg-sky-900 text-white py-10 sm:py-16">
        <MissionSection />
      </section>
      <section className="w-full bg-sky-50 py-10 sm:py-16">
        <CardGrid />
      </section>
    </div>
  );
}
