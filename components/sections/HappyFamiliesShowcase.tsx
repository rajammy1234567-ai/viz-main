"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Building,
  Quote,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  Award,
  UtensilsCrossed,
  ShoppingBag,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SpotlightCard,
  ShinyText,
  BlurText,
  CountUp,
} from "@/components/animations";

export interface FamilyStory {
  id: string;
  name: string;
  business: string;
  category: string;
  location: string;
  image: string;
  stats: string;
  statLabel: string;
  quote: string;
  details: string;
  rating: number;
  badge: string;
}

export const clientFamilies: FamilyStory[] = [
  {
    id: "spice-table",
    name: "The Sharma Family",
    business: "The Spice Table Cafe & Restaurant",
    category: "Restaurant & Hospitality",
    location: "Zirakpur & Mohali",
    image: "/images/clients/client_family_1.jpg",
    stats: "3 Outlets",
    statLabel: "Expanded in 14 Months",
    quote:
      "VIZ Digital guided us from an empty hall to a bustling, profitable 3-outlet dining chain. Their kitchen planning, menu engineering, and branding SOPs made all the difference for our family business.",
    details:
      "Complete restaurant setup, interior kitchen zoning, vendor negotiations, staff SOPs, and hyper-local brand launch marketing.",
    rating: 5,
    badge: "Verified Client Family",
  },
  {
    id: "golden-thread",
    name: "Aman & Simran Preet",
    business: "The Golden Thread Lifestyle",
    category: "Retail & Apparel Brand",
    location: "Chandigarh Sector 17 & Elante",
    image: "/images/clients/client_family_2.jpg",
    stats: "+320%",
    statLabel: "Footfall & Revenue Surge",
    quote:
      "Before VIZ Digital, we struggled with walk-ins and digital reach. Their branding repositioning, store aesthetic guidance, and targeted campaigns completely turned our retail dream into a thriving brand.",
    details:
      "Omnichannel retail strategy, customer experience design, digital visibility campaigns, and VIP customer retention architecture.",
    rating: 5,
    badge: "Verified Client Family",
  },
  {
    id: "sri-diagnostics",
    name: "Dr. Ramesh & Vikram Sethi Family",
    business: "Sri Diagnostics & Wellness Centre",
    category: "Healthcare & Diagnostics",
    location: "Panchkula & Zirakpur",
    image: "/images/clients/client_family_3.jpg",
    stats: "40,000+",
    statLabel: "Patients Served Annually",
    quote:
      "Our healthcare center needed sophisticated IT infrastructure and trustworthy regional branding. The VIZ Digital team delivered a scalable patient management system and stellar digital presence.",
    details:
      "Enterprise healthcare IT infrastructure, digital appointment booking platform, reputation management, and multi-location expansion consulting.",
    rating: 5,
    badge: "Verified Client Family",
  },
];

export function HappyFamiliesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const current = clientFamilies[activeTab];

  return (
    <section className="py-16 sm:py-28 relative overflow-hidden [overflow-x:clip] bg-gradient-to-b from-white via-slate-50/60 to-white w-full max-w-full isolate">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [contain:paint]">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full min-w-0">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs max-w-full">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse shrink-0" />
            <ShinyText
              text="1,000+ Happy Customer Families"
              color="#1e3a8a"
              shineColor="#f97316"
              speed={3}
              className="text-xs font-bold tracking-wider uppercase"
            />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight break-words">
            <BlurText
              text="Real Families. Real Businesses."
              delay={80}
              className="text-slate-900 inline sm:block"
            />
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-600 inline sm:block mt-1">
              Unstoppable Growth.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From family-owned restaurants and flagship lifestyle boutiques to multi-outlet healthcare centers, see how over 1,000+ customer families have partnered with VIZ Digital to build sustainable commercial empires.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="w-full max-w-full overflow-x-auto no-scrollbar scroll-touch pb-2 mb-8 sm:mb-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 min-w-max px-2">
            {clientFamilies.map((fam, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={fam.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isActive ? "bg-orange-400 animate-pulse" : "bg-slate-300"
                    }`}
                  />
                  <span>{fam.name}</span>
                  <span className="text-[11px] opacity-75 font-normal hidden md:inline">
                    • {fam.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Family Card with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid lg:grid-cols-12 gap-0 relative w-full max-w-full"
          >
            {/* Left: Authentic Real Client Photo with Verified Proof Badge */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[440px] lg:min-h-[480px] w-full overflow-hidden group bg-slate-950 min-w-0">
              <div className="relative w-full h-full min-h-[320px] sm:min-h-[440px] lg:min-h-[480px]">
                <Image
                  src={current.image}
                  alt={`${current.name} - ${current.business}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle gradient scrim overlays for contrast and text clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 flex flex-wrap items-center justify-between z-10 gap-2">
                  <div className="bg-slate-900/85 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-[11px] sm:text-xs font-bold text-white">
                      Verified Client Partner
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-orange-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-orange-400/30 shadow-lg truncate max-w-[160px] sm:max-w-none">
                    {current.category}
                  </span>
                </div>

                {/* Bottom Verified Client Details on Photo */}
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 z-10 space-y-2 sm:space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-300 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{current.location}</span>
                    </div>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white drop-shadow-md">
                      {current.business}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                      Client: <span className="text-white font-bold">{current.name}</span>
                    </p>
                  </div>

                  {/* Metric Strip on Photo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15">
                      <span className="text-[9px] sm:text-[10px] text-slate-300 block">Verified Outcome</span>
                      <span className="font-black text-emerald-400 text-xs sm:text-sm">{current.stats} {current.statLabel}</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15">
                      <span className="text-[9px] sm:text-[10px] text-slate-300 block">Consulting Scope</span>
                      <span className="font-bold text-blue-300 text-xs sm:text-sm">Turnkey Growth Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Success Story Narrative & Metrics */}
            <div className="lg:col-span-6 p-4 sm:p-8 lg:p-12 flex flex-col justify-between space-y-5 sm:space-y-6 min-w-0 w-full max-w-full">
              <div className="space-y-6">
                {/* Header with Category and Rating */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60">
                    {current.category}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-bold text-amber-900 ml-1">
                      5.0 Verified Review
                    </span>
                  </div>
                </div>

                {/* Big Metric Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-orange-50/60 border border-slate-200/80 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block leading-none">
                      {current.stats}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 mt-1 block">
                      {current.statLabel}
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pl-6 border-l-4 border-blue-600">
                  <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-3" />
                  <p className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
                    “{current.quote}”
                  </p>
                </div>

                {/* Consulting Scope */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Consulting Provided by VIZ Digital:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {current.details}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <Link href="/clients" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-xl px-5 py-5 text-xs sm:text-sm font-semibold border-slate-300 text-slate-800 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
                  >
                    <span>View All 1,000+ Client Stories</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto rounded-xl px-6 py-5 text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20">
                    Scale Your Family Business
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Social Proof Counter Strip */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto w-full min-w-0">
          {[
            {
              icon: Users,
              num: 1000,
              suffix: "+",
              separator: ",",
              label: "Happy Customer Families",
              sub: "Across Punjab & India",
            },
            {
              icon: Building,
              num: 150,
              suffix: "+",
              label: "Franchise & Retail Outlets",
              sub: "Launched & Operating",
            },
            {
              icon: Award,
              num: 99.2,
              suffix: "%",
              label: "Client Retention Rate",
              sub: "Long-Term Partnerships",
            },
            {
              icon: TrendingUp,
              num: 150,
              prefix: "₹",
              suffix: "Cr+",
              label: "Client GMV Generated",
              sub: "Proven Commercial Value",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(37, 99, 235, 0.12)"
                className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-soft transition-all duration-300 text-center space-y-1 sm:space-y-1.5 group min-w-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <CountUp
                    to={stat.num}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    separator={stat.separator}
                    duration={2.2}
                  />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                  {stat.sub}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
