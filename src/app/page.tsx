import HeroSection from "@/components/home/hero";
import SkillsSection from "@/components/home/skills";
import FeaturedProjectsSection from "@/components/home/featured-projects";
import ContactCtaSection from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ContactCtaSection />
    </div>
  );
}
