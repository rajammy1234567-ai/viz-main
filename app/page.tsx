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
  ChevronRight,
  Building2,
  Rocket,
  Award,
} from "lucide-react";

export const metadata = {
  title: "VIZ Digital | Where Strategy Meets Innovation",
  description:
    "VIZ Digital helps businesses, entrepreneurs, and emerging brands turn ideas into strong, scalable, and sustainable ventures based in Zirakpur, Punjab.",
};

export default function Home() {
  const services = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: TrendingUp,
      badge: "Visibility & Growth",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Strategic marketing solutions that strengthen online visibility, build customer engagement, and support business growth.",
      features: [
        "Strategic online visibility & brand presence",
        "Targeted customer engagement systems",
        "Performance-driven growth campaigns",
      ],
      link: "/services#digital-marketing",
    },
    {
      id: "information-technology",
      title: "Information Technology",
      icon: Cpu,
      badge: "Tech Infrastructure",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description:
        "Technology consulting to help businesses choose digital infrastructure, applications, and solutions for efficient operations and long-term scalability.",
      features: [
        "Digital infrastructure & software selection",
        "Enterprise application consulting",
        "Operational efficiency & scalability",
      ],
      link: "/services#information-technology",
    },
    {
      id: "brand-management",
      title: "Brand Management & Branding",
      icon: Sparkles,
      badge: "Memorable Identity",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description:
        "We build brands that people remember. Complete customer experience from strategy and identity to promotion, activations, and management.",
      features: [
        "Brand strategy, positioning & visual identity",
        "Influencer & celebrity collaborations",
        "Store launches & brand activations",
      ],
      link: "/services#brand-management",
      highlight: "“We don’t just build brands. We create experiences around them.”",
    },
    {
      id: "franchise-consultancy",
      title: "Franchise Consultancy",
      icon: Store,
      badge: "Network Expansion",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      description:
        "End-to-end franchise consultancy and management, helping brands build franchise networks and convert opportunities into operational outlets.",
      features: [
        "Franchise lead generation & sales management",
        "Commercial discussion & agreement support",
        "Outlet setup, vendor & launch coordination",
      ],
      link: "/services#franchise-consultancy",
    },
    {
      id: "restaurant-setup",
      title: "Restaurant Set-Up Consultancy",
      icon: UtensilsCrossed,
      badge: "Concept to Opening Day",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      description:
        "Launching a restaurant takes the right concept, location, layout, kitchen, team, systems, and operational planning.",
      features: [
        "Concept development & business planning",
        "Location finalisation & kitchen planning",
        "Menu engineering, chef hiring & launch SOPs",
      ],
      link: "/services#restaurant-setup",
      highlight: "“We help transform an empty space into a professionally planned, market-ready restaurant.”",
    },
  ];

  const whyChooseUs = [
    {
      icon: Compass,
      title: "Strategic Thinking",
      description: "We focus on the bigger business picture, aligning every initiative with long-term commercial success.",
    },
    {
      icon: Layers,
      title: "Customized Solutions",
      description: "Recommendations are shaped around each client’s unique requirements, industry, and growth stage.",
    },
    {
      icon: Cpu,
      title: "Technology-Driven Approach",
      description: "We connect modern technology with business strategy to ensure streamlined operations and agility.",
    },
    {
      icon: Rocket,
      title: "End-to-End Perspective",
      description: "We support businesses from concept and branding to marketing, technology, and expansion.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-20 overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-12 sm:py-24 border-b border-slate-100 w-full max-w-full">
        {/* Subtle geometric background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-70" />
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
          <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
            {/* Location & Sector Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-blue-900 tracking-wide uppercase text-center truncate">
                VIZ Digital • Business Consulting • Zirakpur, Punjab
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Where Strategy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                Meets Innovation.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal px-2">
              VIZ Digital helps businesses, entrepreneurs, and emerging brands turn ideas into strong, scalable, and sustainable ventures.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-7 py-6 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-7 py-6 text-base font-semibold border-slate-300 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200"
                >
                  <span>Contact Us</span>
                </Button>
              </Link>
            </div>

            {/* Core Value Pillars Badge Strip */}
            <div className="pt-8 sm:pt-10 border-t border-slate-200/70 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-left">
              {[
                "Strategic Thinking",
                "Customized Solutions",
                "Technology-Driven",
                "End-to-End Support",
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-slate-200/60 text-xs font-semibold text-slate-700 shadow-xs overflow-hidden"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About VIZ Digital Snapshot Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
                About VIZ Digital
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Empowering Businesses to Transform Ideas into Sustainable Ventures
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Success requires more than a good idea. It requires the right strategy, technology, branding, marketing, and execution. VIZ Digital brings these elements together to provide consulting tailored to each client’s business goals.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our approach begins with understanding each client’s vision, challenges, market, and objectives. We combine business strategy, creative thinking, technology, and market understanding to develop practical solutions.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="rounded-xl px-6 py-5 font-semibold border-blue-200 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
                  >
                    <span>Read Our Story & Approach</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/clients">
                  <Button
                    variant="ghost"
                    className="rounded-xl px-5 py-5 font-semibold text-slate-600 hover:text-slate-900"
                  >
                    View Our Clients Page
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Card / Quote */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-orange-50/40 p-8 rounded-3xl border border-slate-200/80 shadow-soft space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Based in Zirakpur, Punjab
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Headquartered in Zirakpur, VIZ Digital serves businesses, entrepreneurs, and emerging brands locally and across regional markets with hands-on consulting and actionable growth advisory.
                </p>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-slate-800 text-sm italic font-medium shadow-xs">
                  “Your vision. Our expertise. A smarter path to growth.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80">
              Tailored Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Core Consulting Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore how VIZ Digital provides end-to-end guidance across marketing, technology, brand management, franchise growth, and restaurant setups.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-5">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-7 h-7" />
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

                    {/* Key points */}
                    <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {service.highlight && (
                      <p className="text-xs font-semibold text-orange-700 bg-orange-50/80 p-3 rounded-xl border border-orange-200/60 italic">
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
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Direct Consultation Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-card flex flex-col justify-between">
              <div className="space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full inline-block">
                  Have a specific goal?
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Custom Consulting Tailored to Your Growth
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Every business is unique. We customize strategies for entrepreneurs, established enterprises, and growing franchise concepts.
                </p>
                <div className="space-y-2 text-xs text-blue-100 pt-2">
                  <p>✓ Direct advisory from experienced consultants</p>
                  <p>✓ Transparent process from concept to execution</p>
                  <p>✓ Scalable systems designed for long-term viability</p>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="block w-full">
                  <Button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold py-6 rounded-xl shadow-md transition-all">
                    Schedule a Meeting
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VIZ Digital Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why VIZ Digital
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We bring strategy, technology, branding, and execution together under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:bg-white hover:shadow-soft transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Prominent Closing Line Quote */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-white to-orange-50 p-8 rounded-3xl border border-blue-100 text-center shadow-soft">
            <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              “Your vision. Our expertise. A smarter path to growth.”
            </p>
            <p className="text-sm text-slate-500 font-medium">
              VIZ Digital • Based in Zirakpur, Punjab
            </p>
          </div>
        </div>
      </section>

      {/* Our Clients Teaser Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Client & Brand Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Dedicated Support for Emerging Brands & Entrepreneurs
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
              We collaborate with businesses, entrepreneurs, and emerging brands to build strong foundations, scale franchise networks, and launch market-ready concepts.
            </p>

            <div className="pt-2">
              <Link href="/clients">
                <Button className="rounded-xl px-7 py-6 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <span>Visit Our Clients Page</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3.5 py-1.5 rounded-full inline-block">
                Start Your Journey With VIZ Digital
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Turn your business ideas into scalable reality.
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                Connect with our consulting team in Zirakpur, Punjab to discuss your business strategy, branding, digital technology, franchise, or restaurant goals.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 rounded-xl shadow-md text-base"
                  >
                    Contact Us Today
                  </Button>
                </Link>
                <a
                  href="tel:9876687109"
                  className="inline-flex items-center gap-2 bg-blue-500/30 hover:bg-blue-500/40 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
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
