import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Services } from "@/components/sections/Services";
import { PortfolioScroll } from "@/components/sections/PortfolioScroll";
import { LightHero } from "@/components/sections/LightHero";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { LocationSection } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedWork />
      <Services />
      <PortfolioScroll />
      <LightHero />
      <FAQ />
      <Contact />
      <LocationSection />
    </div>
  );
}
