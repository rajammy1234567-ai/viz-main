import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Cpu,
  Sparkles,
  Store,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  Phone,
  MessageCircle,
  ShieldCheck,
  Building2,
  Rocket,
  Award,
  Star,
  Users,
  Bot,
  Brain,
} from "lucide-react";
import { FrontHero } from "@/components/sections/FrontHero";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { AllOfferingsShowcase } from "@/components/sections/AllOfferingsShowcase";
import { HappyFamiliesShowcase } from "@/components/sections/HappyFamiliesShowcase";
import { AiRoboticsClasses } from "@/components/sections/AiRoboticsClasses";
import { FAQ } from "@/components/sections/FAQ";
import { LocationSection } from "@/components/sections/Location";
import { ConsultingProcess } from "@/components/sections/ConsultingProcess";
import { SpotlightCard, ShinyText, BlurText } from "@/components/animations";

export const metadata = {
  title: "VIZ Digital | Digital Marketing, Restaurant Setup, Franchise & AI Classes | Zirakpur",
  description:
    "VIZ Digital is North India's 360° growth engine: High-ROI Digital Marketing, Turnkey Restaurant & Cafe Setup, Franchise Expansion, Luxury Branding, IT Systems, and AI & Robotics Masterclasses in Zirakpur, Punjab.",
};

export default function Home() {
  const services = [
    {
      id: "digital-marketing",
      title: "Digital Marketing & Performance",
      icon: TrendingUp,
      badge: "Lead Gen & Walk-Ins",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "High-performance Meta & Google ad funnels that multiply online visibility, local customer footfall, and measurable revenue ROI.",
      features: [
        "Hyperlocal targeted customer acquisition campaigns",
        "Performance marketing & ROI-driven ad management (4.8x avg ROAS)",
        "Brand reputation & Google Business top ranking",
      ],
      link: "/services#digital-marketing",
    },
    {
      id: "restaurant-setup",
      title: "Restaurant & Cafe Set-Up Consultancy",
      icon: UtensilsCrossed,
      badge: "Concept to Opening Day",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      description:
        "Launching a restaurant requires the exact formula: prime location selection, commercial kitchen zoning, chef hiring, and operational SOPs.",
      features: [
        "Location scouting, site feasibility & layout zoning",
        "Commercial kitchen equipment sourcing & vendor coordination",
        "Menu engineering, chef trials & grand launch events",
      ],
      link: "/services#restaurant-setup",
      highlight: "“Transforming empty commercial spaces into packed, profitable restaurants.”",
    },
    {
      id: "franchise-consultancy",
      title: "Franchise Consultancy & Scaling",
      icon: Store,
      badge: "Multi-City Expansion",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      description:
        "End-to-end franchise blueprinting and management, helping founders scale single-location concepts into 10+ outlet multi-city franchise chains.",
      features: [
        "Franchise model design & legal agreement structuring",
        "Qualified investor lead generation & deal closing",
        "Franchisee outlet onboarding, auditing & launch SOPs",
      ],
      link: "/services#franchise-consultancy",
    },
    {
      id: "brand-management",
      title: "Brand Management & Branding",
      icon: Sparkles,
      badge: "Premium Visual Identity",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description:
        "We build iconic brands people remember. Comprehensive customer experience from trademark strategy and interior identity to VIP store launches.",
      features: [
        "Brand strategy, positioning & luxury visual identity",
        "Interior design themes & store packaging concepts",
        "Celebrity & regional influencer store activations",
      ],
      link: "/services#brand-management",
      highlight: "“We don’t just build logos. We create unforgettable customer experiences.”",
    },
    {
      id: "information-technology",
      title: "Information Technology & Systems",
      icon: Cpu,
      badge: "Enterprise Tech Stack",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description:
        "End-to-end technology consulting to help family businesses and enterprises choose POS systems, custom software, CRM, and cloud infrastructure.",
      features: [
        "Custom web applications & mobile booking platforms",
        "POS, ERP & inventory automation software",
        "Enterprise cloud scalability & cybersecurity",
      ],
      link: "/services#information-technology",
    },
    {
      id: "ai-classes",
      title: "Artificial Intelligence (AI) Classes",
      icon: Brain,
      badge: "GenAI & Prompt Mastery",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description:
        "Practical Artificial Intelligence masterclasses. Learn ChatGPT-4o, Claude 3.5, Prompt Engineering, Python for AI, and real-world business automation.",
      features: [
        "Prompt Engineering, LLMs & custom AI agent development",
        "Machine Learning with Python & Scikit-learn algorithms",
        "Hands-on project portfolio & certified credentials",
      ],
      link: "/services#ai-classes",
      highlight: "“Equipping modern learners and businesses with cutting-edge AI capabilities.”",
    },
    {
      id: "robotics-classes",
      title: "Hands-on Robotics & STEM Labs",
      icon: Bot,
      badge: "Hardware Kit Included",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      description:
        "100% practical robotics engineering. Every student receives a take-home Arduino/ESP32 kit to build obstacle-avoiding bots, IoT, and autonomous rovers.",
      features: [
        "Take-home microcontrollers, sensors & motor driver kits",
        "Arduino, ESP32 IoT & Raspberry Pi robotics programming",
        "Classes for School Students (Ages 8+), Teens & College Engineers",
      ],
      link: "/services#robotics-classes",
      highlight: "“From breadboards and sensors to autonomous robots built with your own hands.”",
    },
  ];

  const whyChooseUs = [
    {
      icon: Compass,
      title: "Strategic Commercial Clarity",
      description: "We don't do guesswork. Every initiative is backed by financial modeling, competitor analysis, and long-term viability.",
    },
    {
      icon: Layers,
      title: "Turnkey Execution",
      description: "From government permits and kitchen vendors to software installation and opening day marketing, we handle the heavy lifting.",
    },
    {
      icon: Cpu,
      title: "Modern Tech Integration",
      description: "We modernize traditional family businesses with automated inventory, cloud POS, and customer loyalty engines.",
    },
    {
      icon: Rocket,
      title: "Proven Franchise Scaling",
      description: "We specialize in taking regional hits and expanding them into 10+ franchise outlet chains across North India.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-full">
      {/* Dynamic Front Hero with 1,000+ Happy Families */}
      <FrontHero />

      {/* Infinite Brand Marquee */}
      <BrandMarquee />

      {/* Core Consulting & Growth Services Section - Prominently Placed First */}
      <section id="core-services" className="py-20 sm:py-28 bg-white border-y border-slate-100 relative overflow-hidden scroll-mt-20">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80">
              <ShinyText
                text="Complete Growth & Innovation Architecture"
                color="#1d4ed8"
                shineColor="#f97316"
                speed={3}
                className="text-xs font-bold tracking-wider uppercase"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              What We Provide: Core Growth & Tech Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              From launching turnkey cafes and building multi-city franchise networks to high-ROI digital marketing, branding, IT, and hands-on AI & Robotics masterclasses.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <SpotlightCard
                  key={service.id}
                  spotlightColor="rgba(37, 99, 235, 0.09)"
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full"
                >
                  <div className="space-y-5">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${service.badgeColor}`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 pt-3 border-t border-slate-100">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs font-semibold text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {service.highlight && (
                      <p className="text-xs font-semibold text-orange-800 bg-orange-50/90 p-3 rounded-xl border border-orange-200/80 italic">
                        {service.highlight}
                      </p>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Explore Service Roadmap</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </SpotlightCard>
              );
            })}

            {/* Custom Advisory Highlight Card */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/15 text-blue-200 px-3.5 py-1 rounded-full inline-block border border-white/10">
                  Custom Strategic Advisory
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Have an Ambitious Business Vision?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every business is unique. We tailor our consulting scope to your stage — whether starting from scratch, fixing operational leaks, or preparing for high-speed franchise rollout.
                </p>
                <div className="space-y-2 text-xs text-slate-200 pt-2 font-medium">
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Direct advisory with senior leadership
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Transparent milestones & actionable SOPs
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Dedicated local team based in Zirakpur
                  </p>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <Link href="/contact" className="block w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 rounded-2xl shadow-lg shadow-blue-600/30 transition-all text-sm">
                    Schedule Free Discovery Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Complete Solutions Blueprint - All 6 Core Pillars Deep-Dive */}
      <AllOfferingsShowcase />

      {/* Real Commercial Transformations & 1,000+ Happy Customer Families */}
      <HappyFamiliesShowcase />

      {/* Hands-On AI & Robotics Academy Section */}
      <AiRoboticsClasses />

      {/* 4-Step Consulting Process Roadmap */}
      <ConsultingProcess />

      {/* Why VIZ Digital Section */}
      <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why 1,000+ Founders Choose VIZ Digital
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We merge commercial strategy, technology, branding, and local operational execution under one unified umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(249, 115, 22, 0.08)"
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 space-y-4 group h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Prominent Quote Card */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-white to-orange-50 p-8 sm:p-10 rounded-3xl border border-blue-200/70 text-center shadow-soft space-y-2">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              “Your vision. Our expertise. A smarter path to commercial growth.”
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">
              VIZ Digital • Headquartered in Zirakpur, Punjab • Serving Emerging Brands
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Corporate Location & Headquarters */}
      <LocationSection />

      {/* Bottom CTA Banner */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3.5 py-1.5 rounded-full inline-block">
                Start Your Journey With VIZ Digital
              </span>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                Turn your business ideas into scalable reality.
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                Connect with our consulting team in Zirakpur, Punjab to discuss your business strategy, branding, digital technology, franchise, or restaurant goals.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 rounded-2xl shadow-md text-base"
                  >
                    Contact Us Today
                  </Button>
                </Link>
                <a
                  href="tel:9876687109"
                  className="inline-flex items-center gap-2 bg-blue-500/30 hover:bg-blue-500/40 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-2xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 98766 87109</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
