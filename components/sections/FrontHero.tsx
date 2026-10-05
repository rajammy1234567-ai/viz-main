"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Bot,
  Brain,
  Cpu,
  CheckCircle2,
  Zap,
  Users,
  MessageCircle,
  UtensilsCrossed,
  Store,
  Layers,
  ChevronRight,
  Phone,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ShinyText,
  CountUp,
  TiltedCard,
  ClickSpark,
} from "@/components/animations";

export const heroShowcases = [
  {
    id: 0,
    vertical: "Restaurant & Cafe Setup",
    shortLabel: "Restaurant",
    icon: UtensilsCrossed,
    image: "/images/services/restaurant-setup.jpg",
    badge: "Turnkey Launch • 60–90 Days",
    badgeColor: "bg-orange-500 text-white",
    keyMetric: "150+ Outlets",
    metricSub: "Commercial Dining Outlets Launched",
    title: "Turnkey Kitchen & Restaurant Architecture",
    description: "Location scouting, commercial kitchen layout CAD, chef hiring, recipe SOPs & grand opening day.",
    deliverableChips: [
      "📐 Kitchen Zoning Blueprint",
      "👨‍🍳 Chef & Staff Recruited",
      "📜 FSSAI & Fire NOC Done",
    ],
    link: "/services#restaurant-setup",
    accentGlow: "from-orange-500 to-amber-500",
  },
  {
    id: 1,
    vertical: "Digital Marketing & Ads",
    shortLabel: "Marketing",
    icon: TrendingUp,
    image: "/images/services/digital-marketing.jpg",
    badge: "4.85x Audited ROAS",
    badgeColor: "bg-blue-600 text-white",
    keyMetric: "340+ Leads/Mo",
    metricSub: "Direct WhatsApp & Phone Walk-ins",
    title: "High-ROI Performance Ad Funnels",
    description: "Hyperlocal Meta & Google ad campaigns that drive real footfall, table reservations, and verified leads.",
    deliverableChips: [
      "🎯 Hyperlocal Meta & Google Ads",
      "📹 High-Converting Video Reels",
      "⚡ WhatsApp Instant Lead Bot",
    ],
    link: "/services#digital-marketing",
    accentGlow: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    vertical: "Franchise Expansion",
    shortLabel: "Franchise",
    icon: Store,
    image: "/images/services/franchise-consultancy.jpg",
    badge: "150+ Outlets Scaled",
    badgeColor: "bg-amber-600 text-white",
    keyMetric: "98.5%",
    metricSub: "Franchisee Network Retention",
    title: "Single Store to 10+ Multi-City Franchise Chain",
    description: "Franchise model blueprint, FOCO/FOFO legal agreements, vetted investor lead generation & audits.",
    deliverableChips: [
      "📋 Legal Franchise Agreements",
      "🤝 Vetted Investor Deal-Closing",
      "🏢 Turnkey Store Onboarding",
    ],
    link: "/services#franchise-consultancy",
    accentGlow: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    vertical: "Robotics & STEM Labs",
    shortLabel: "Robotics",
    icon: Bot,
    image: "/images/services/robotics-classes.jpg",
    badge: "Take-Home Hardware Kit",
    badgeColor: "bg-cyan-600 text-white",
    keyMetric: "100% Practical",
    metricSub: "Build Working 4WD Autonomous Rovers",
    title: "Hands-on Robotics & IoT Engineering",
    description: "Students assemble physical Arduino/ESP32 circuits, wire sensors, and code autonomous obstacle bots.",
    deliverableChips: [
      "📦 Arduino/ESP32 Kit Included",
      "🚗 Obstacle-Avoiding 4WD Bot",
      "🏆 STEM Project Certification",
    ],
    link: "/services#robotics-classes",
    accentGlow: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    vertical: "Luxury Brand Management",
    shortLabel: "Branding",
    icon: Sparkles,
    image: "/images/services/brand-management.jpg",
    badge: "Luxury Packaging & Identity",
    badgeColor: "bg-purple-600 text-white",
    keyMetric: "360° Identity",
    metricSub: "Packaging, Interiors & Launch PR",
    title: "Luxury Visual Identity & Store Experiences",
    description: "Gold-foil product packaging, architectural retail aesthetics, menus, and VIP grand launch activations.",
    deliverableChips: [
      "✨ Foil Embossed Packaging",
      "🏪 Store Interior Aesthetics",
      "📸 Influencer VIP Launch PR",
    ],
    link: "/services#brand-management",
    accentGlow: "from-purple-600 to-pink-500",
  },
  {
    id: 5,
    vertical: "AI & Tech Masterclass",
    shortLabel: "AI Classes",
    icon: Brain,
    image: "/images/services/ai-classes.jpg",
    badge: "GenAI & Prompt Mastery",
    badgeColor: "bg-indigo-600 text-white",
    keyMetric: "10x Productivity",
    metricSub: "Custom AI Agents & Automation",
    title: "Generative AI, ChatGPT & Agent Studio",
    description: "Practical AI mastery: prompt engineering, ChatGPT-4o workflows, Python for AI, and automated business agents.",
    deliverableChips: [
      "🧠 ChatGPT-4o & Claude Workflows",
      "🤖 Custom AI Agents & Chatbots",
      "⚡ Make.com / Zapier Automation",
    ],
    link: "/services#ai-classes",
    accentGlow: "from-indigo-600 to-purple-600",
  },
];

export function FrontHero() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate hero showcases every 5.5 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroShowcases.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = heroShowcases[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/30 to-white w-full max-w-full">
      {/* Interactive Micro Click Sparks */}
      <ClickSpark sparkColor="#2563EB" sparkCount={10} sparkRadius={24} className="w-full max-w-full min-w-0 overflow-hidden">
        {/* Dynamic Ambient Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [contain:paint]">
          <div className="absolute top-10 left-1/4 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-blue-500/12 rounded-full blur-[80px] sm:blur-[130px] animate-pulse-slow" />
          <div className="absolute bottom-10 right-1/4 w-[220px] sm:w-[460px] h-[220px] sm:h-[460px] bg-orange-400/12 rounded-full blur-[80px] sm:blur-[130px] animate-pulse-slow delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full min-w-0">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full min-w-0">
            {/* Left Column: Clear Visual Proposition & Tangible Pillars */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left min-w-0 w-full max-w-full">
              {/* Comprehensive Ecosystem Badge */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 p-1.5 sm:py-1.5 sm:px-3 rounded-full bg-white/95 border border-blue-200/90 shadow-xs backdrop-blur-md max-w-full"
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 text-white text-[10px] sm:text-[11px] font-bold shrink-0">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>360° Growth & Tech Ecosystem</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-800 px-1">
                  Restaurants • Ads • Franchises • AI & Robotics • Zirakpur
                </span>
              </motion.div>

              {/* High-Impact Visual Headline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3 min-w-0 w-full max-w-full"
              >
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-black text-slate-900 tracking-tight leading-[1.14] break-words">
                  <span>See How We Build, </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 inline break-words">
                    Scale &amp; Launch Brands.
                  </span>
                </h1>
                <p className="text-xs sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 break-words">
                  Turnkey restaurant setup, multi-city franchise expansion, high-ROI ad funnels, and 100% hands-on AI & Robotics labs with hardware kits included.
                </p>
              </motion.div>

              {/* Visual 4-Pillar Pill Grid - Instant Clarity Without Walls of Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-xl mx-auto lg:mx-0 text-left"
              >
                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">Turnkey Restaurants</p>
                    <p className="text-[10px] text-orange-800 font-semibold truncate">Kitchen CAD to Launch</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">Performance Ads</p>
                    <p className="text-[10px] text-blue-800 font-semibold truncate">4.85x ROAS Funnels</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0">
                    <Store className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">Franchise Scaling</p>
                    <p className="text-[10px] text-amber-800 font-semibold truncate">150+ Outlets Network</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-cyan-50/80 border border-cyan-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">Robotics & AI Labs</p>
                    <p className="text-[10px] text-cyan-800 font-semibold truncate">Hardware Kit Included</p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1 w-full max-w-full min-w-0"
              >
                <a href="#visual-showcase" className="w-full sm:w-auto max-w-full block">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-2xl px-6 py-5 sm:py-6 text-xs sm:text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
                  >
                    <Eye className="w-4 h-4 shrink-0" />
                    <span>See Visual Deliverables</span>
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <a
                  href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20consult%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto max-w-full block"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-2xl px-5 py-5 sm:py-6 text-xs sm:text-base font-bold border-emerald-300 text-emerald-800 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </Button>
                </a>
              </motion.div>

              {/* Verified Client Social Proof with Real Photos */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 w-full max-w-full">
                <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                  <div className="relative w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200 shrink-0">
                    <Image
                      src="/images/clients/restaurant_client.jpg"
                      alt="The Spice Table Cafe Founder"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200 shrink-0">
                    <Image
                      src="/images/clients/retail_client.jpg"
                      alt="The Golden Thread Lifestyle Founder"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200 shrink-0">
                    <Image
                      src="/images/clients/healthcare_client.jpg"
                      alt="Sri Diagnostics Centre Director"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 shrink-0" />
                    ))}
                    <span className="font-extrabold text-xs text-slate-800 ml-1">
                      5.0 Verified Reviews
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold truncate">
                    1,000+ Business Founders & Learners in Tricity & Punjab
                  </p>
                </div>
              </div>

              {/* Live Performance Counters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left min-w-0 w-full"
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="text-lg sm:text-2xl font-black text-slate-900">
                    <CountUp to={1000} suffix="+" duration={2} separator="," />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 truncate">
                    Scaled Businesses
                  </div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-2.5 sm:pl-3 min-w-0">
                  <div className="text-lg sm:text-2xl font-black text-orange-600">
                    <CountUp to={150} suffix="+" duration={2.2} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 truncate">
                    Outlets Scaled
                  </div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-2.5 sm:pl-3 min-w-0">
                  <div className="text-lg sm:text-2xl font-black text-emerald-600">
                    <CountUp to={4.8} prefix="" suffix="x" duration={2.4} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 truncate">
                    Average ROAS
                  </div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-2.5 sm:pl-3 min-w-0">
                  <div className="text-lg sm:text-2xl font-black text-cyan-600">
                    <CountUp to={850} suffix="+" duration={2.5} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 truncate">
                    Robotics Learners
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Stunning Interactive Visual Showcase Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative w-full max-w-full min-w-0 mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <TiltedCard scaleOnHover={1.02} rotateAmplitude={4} glareOpacity={0.15} className="w-full max-w-full min-w-0">
                {/* Backlight Glow based on active vertical */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${current.accentGlow} rounded-3xl blur-xl opacity-30 animate-pulse-slow pointer-events-none transition-all duration-700`} />

                <div className="relative bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl w-full max-w-full min-w-0 flex flex-col">
                  {/* Top Bar with Live Indicator */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-900/90 text-xs">
                    <div className="flex items-center gap-2">
                      <CurrentIcon className="w-4 h-4 text-blue-400" />
                      <span className="font-extrabold text-white text-xs">{current.vertical}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        Live Showcase
                      </span>
                    </div>
                  </div>

                  {/* Main High-Impact Photography Stage */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={current.image}
                          alt={current.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        {/* Film Gradient for text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                        {/* Floating Category Pill */}
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md ${current.badgeColor}`}>
                            {current.badge}
                          </span>
                        </div>

                        {/* Floating Key Metric Pill */}
                        <div className="absolute top-3.5 right-3.5 z-10">
                          <div className="bg-slate-950/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-right shadow-md">
                            <span className="text-xs sm:text-sm font-black text-amber-300 block leading-tight">
                              {current.keyMetric}
                            </span>
                          </div>
                        </div>

                        {/* Bottom Overlay on Image: Title & Deliverable Chips */}
                        <div className="absolute bottom-3 left-3.5 right-3.5 z-10 space-y-2">
                          <h3 className="text-base sm:text-xl font-black text-white leading-tight drop-shadow-md">
                            {current.title}
                          </h3>

                          {/* 3 Tangible Deliverable Chips */}
                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {current.deliverableChips.map((chip, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] sm:text-[11px] font-bold text-slate-100 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 shadow-xs"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Auto-rotation Progress Line */}
                  <div className="w-full bg-slate-800 h-1 overflow-hidden">
                    <motion.div
                      key={activeTab}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{ duration: 5.5, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-400"
                    />
                  </div>

                  {/* Interactive Visual Thumbnail Strip - Directly click to see any vertical */}
                  <div className="p-3 bg-slate-950 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400 pb-2 px-1">
                      <span>Interactive Preview Strip</span>
                      <span className="text-blue-400">Click to switch visual</span>
                    </div>

                    <div className="grid grid-cols-6 gap-1.5 w-full">
                      {heroShowcases.map((tab) => {
                        const TabIcon = tab.icon;
                        const isCurrent = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`group relative rounded-xl overflow-hidden border p-1 text-center transition-all cursor-pointer flex flex-col items-center justify-between h-16 ${
                              isCurrent
                                ? "border-blue-500 ring-2 ring-blue-500/40 bg-slate-800"
                                : "border-slate-800 bg-slate-900/90 hover:border-slate-700 opacity-75 hover:opacity-100"
                            }`}
                          >
                            <div className="relative w-full h-8 rounded-lg overflow-hidden shrink-0">
                              <Image
                                src={tab.image}
                                alt={tab.shortLabel}
                                fill
                                sizes="60px"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-slate-950/30" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <TabIcon className="w-3.5 h-3.5 text-white drop-shadow" />
                              </div>
                            </div>
                            <span className="text-[9px] font-bold text-slate-200 truncate w-full pt-1 block leading-tight">
                              {tab.shortLabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quick Action Footer */}
                    <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <Link
                        href={current.link}
                        className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold transition-colors"
                      >
                        <span>Explore {current.shortLabel} Scope</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20consult%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Quick Chat</span>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </motion.div>
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}
