import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Layers,
  Cpu,
  Rocket,
  ArrowRight,
  Target,
  Eye,
  CheckCircle2,
  Building,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { SpotlightCard, ShinyText, BlurText } from "@/components/animations";

export const metadata = {
  title: "About Us | VIZ Digital - Business Consulting & Growth Solutions",
  description:
    "Learn about VIZ Digital, a premium business consulting and growth solutions company based in Zirakpur, Punjab. We help businesses turn ideas into sustainable ventures.",
};

export default function AboutPage() {
  const whyPoints = [
    {
      title: "Strategic Thinking",
      description: "We focus on the bigger business picture.",
      icon: Compass,
      tag: "Vision & Execution",
    },
    {
      title: "Customized Solutions",
      description: "Recommendations are shaped around each client’s requirements.",
      icon: Layers,
      tag: "Tailored Advisory",
    },
    {
      title: "Technology-Driven Approach",
      description: "We connect modern technology with business strategy.",
      icon: Cpu,
      tag: "Modern Scalability",
    },
    {
      title: "End-to-End Perspective",
      description: "We support businesses from concept and branding to marketing, technology, and expansion.",
      icon: Rocket,
      tag: "Full-Cycle Support",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-20 overflow-x-hidden w-full max-w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              <ShinyText
                text="About VIZ Digital"
                color="#1d4ed8"
                shineColor="#f97316"
                speed={3}
                className="text-xs font-bold tracking-wider uppercase"
              />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              <BlurText
                text="A Smarter Path to"
                delay={60}
                className="text-slate-900 inline-block mr-2"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500">
                Business Growth
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Based in Zirakpur, Punjab, VIZ Digital bridges the gap between ambitious business vision and practical commercial execution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Intro Block */}
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Turning Ideas into Strong, Scalable, and Sustainable Ventures
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                VIZ Digital is a premium business consulting and growth solutions company based in Zirakpur, Punjab. We help businesses, entrepreneurs, and emerging brands transform ideas into strong, scalable, and sustainable ventures.
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Success requires more than a good idea. It requires the right strategy, technology, branding, marketing, and execution. VIZ Digital brings these elements together to provide consulting tailored to each client’s business goals.
              </p>
            </div>

            {/* Approach and Vision Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Our Approach */}
              <SpotlightCard
                spotlightColor="rgba(37, 99, 235, 0.08)"
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft space-y-5 hover:border-blue-400 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Approach</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Our approach begins with understanding each client’s vision, challenges, market, and objectives. We combine business strategy, creative thinking, technology, and market understanding to develop practical solutions.
                </p>
              </SpotlightCard>

              {/* Our Vision */}
              <SpotlightCard
                spotlightColor="rgba(249, 115, 22, 0.08)"
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft space-y-5 hover:border-orange-400 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Our vision is to become a trusted consulting partner for businesses and entrepreneurs by delivering innovative strategies, premium solutions, and meaningful business value.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Why VIZ Digital */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Core Strengths
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Why VIZ Digital
              </h2>
              <p className="text-slate-600 text-base">
                Four foundational pillars that guide our consulting practice:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <SpotlightCard
                    key={idx}
                    spotlightColor="rgba(37, 99, 235, 0.08)"
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-soft space-y-4 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </SpotlightCard>
                );
              })}
            </div>

            {/* Closing Line Callout */}
            <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-blue-200 shadow-card text-center space-y-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                “Your vision. Our expertise. A smarter path to growth.”
              </p>
              <p className="text-slate-500 text-sm">
                VIZ Digital • Zirakpur, Punjab
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Ready to Discuss Your Business Goals?
            </h2>
            <p className="text-slate-600 text-base">
              Reach out to our consulting team today for a tailored discussion about your venture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <Button variant="outline" className="rounded-xl px-7 py-6 font-semibold border-slate-300 text-slate-800 hover:bg-slate-50">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="rounded-xl px-7 py-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
