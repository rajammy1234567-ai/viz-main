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
  Award,
  Bot,
  Brain,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  Zap,
  Boxes,
  Users,
  MessageCircle,
  Clock,
  Gauge,
  Activity,
  ChevronRight,
  Flame,
  UtensilsCrossed,
  Store,
  Building2,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BlurText,
  ShinyText,
  CountUp,
  TiltedCard,
  ClickSpark,
} from "@/components/animations";

export function FrontHero() {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate hero tabs every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => ((prev + 1) % 6) as 0 | 1 | 2 | 3 | 4 | 5);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white">
      {/* Interactive Micro Click Sparks */}
      <ClickSpark sparkColor="#2563EB" sparkCount={10} sparkRadius={24}>
        {/* Dynamic Glowing Background Orbs */}
        <div className="absolute top-10 left-1/4 w-[520px] h-[520px] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-slow -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[480px] h-[480px] bg-cyan-400/15 rounded-full blur-[130px] pointer-events-none animate-pulse-slow delay-1000 -z-10" />
        <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-subtle-pattern opacity-40 pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: All-Inclusive Value Proposition */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
              {/* Comprehensive Offering Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-white/95 border border-blue-200/90 shadow-sm backdrop-blur-md"
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 text-white text-[11px] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>360° Growth & Tech Ecosystem</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <ShinyText
                    text="Marketing • Restaurants • Franchises • Branding • IT • AI & Robotics"
                    color="#1e3a8a"
                    shineColor="#f97316"
                    speed={3}
                  />
                  <span className="hidden sm:inline text-slate-400">• Zirakpur, Punjab</span>
                </div>
              </motion.div>

              {/* Main Headline with BlurText */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black text-slate-900 tracking-tight leading-[1.08]">
                  <BlurText
                    text="Scaling Brands, Turnkey Restaurants &"
                    delay={50}
                    className="text-slate-900 inline-block mr-2"
                  />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 inline-block">
                    Future-Ready Tech.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Whether launching your first commercial restaurant, expanding a 10-outlet franchise chain, driving high-ROI Meta & Google ad funnels, or mastering hands-on AI and Robotics with take-home kits — VIZ Digital is North India&apos;s complete growth engine.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1"
              >
                <a href="#core-services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-2xl px-7 py-6 text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-2xl px-7 py-6 text-base font-bold border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-blue-400 transition-all flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    <span>Free Strategy Discovery Call</span>
                  </Button>
                </Link>
              </motion.div>

              {/* All Services Quick Navigation Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                  Quick Dive:
                </span>
                {[
                  { name: "Digital Marketing", href: "/services#digital-marketing", icon: TrendingUp },
                  { name: "Restaurant Setup", href: "/services#restaurant-setup", icon: UtensilsCrossed },
                  { name: "Franchise Expansion", href: "/services#franchise-consultancy", icon: Store },
                  { name: "Brand Management", href: "/services#brand-management", icon: Sparkles },
                  { name: "IT Systems", href: "/services#information-technology", icon: Cpu },
                  { name: "AI & Robotics", href: "#ai-robotics-classes", icon: Bot },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 shadow-xs transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* Verified Client Proof Strip with Real Photos */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <div className="relative w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200">
                    <Image
                      src="/images/clients/restaurant_client.jpg"
                      alt="The Spice Table Cafe Founder"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200">
                    <Image
                      src="/images/clients/retail_client.jpg"
                      alt="The Golden Thread Lifestyle Founder"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200">
                    <Image
                      src="/images/clients/healthcare_client.jpg"
                      alt="Sri Diagnostics Centre Director"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="font-extrabold text-xs text-slate-800 ml-1">
                      5.0 Verified Client Reviews
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-semibold">
                    1,000+ Real Business Founders & Learners in Tricity & Punjab
                  </p>
                </div>
              </div>

              {/* Relatable Live Performance Counters with CountUp */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0 text-left"
              >
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    <CountUp to={1000} suffix="+" duration={2} separator="," />
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Scaled Businesses
                  </div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-orange-600">
                    <CountUp to={150} suffix="+" duration={2.2} />
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Outlets & Franchises
                  </div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                    <CountUp to={4.8} prefix="" suffix="x" duration={2.4} />
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Average Ad ROAS
                  </div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-600">
                    <CountUp to={850} suffix="+" duration={2.5} />
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    AI & Robotics Learners
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Dynamic Interactive 5-Pillar Command Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <TiltedCard scaleOnHover={1.02} rotateAmplitude={6} glareOpacity={0.15}>
                {/* Ambient Backlight Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-orange-500 to-cyan-500 rounded-3xl blur-xl opacity-35 animate-pulse-slow" />

                <div className="relative bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl p-5 sm:p-6 overflow-hidden backdrop-blur-xl">
                  {/* Top 5 Service Tabs */}
                  <div className="flex items-center justify-between gap-1 pb-3 mb-3 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
                    <div className="flex gap-1">
                      {[
                        { id: 0, label: "Marketing", icon: TrendingUp, color: "text-emerald-400" },
                        { id: 1, label: "Restaurant", icon: UtensilsCrossed, color: "text-orange-400" },
                        { id: 2, label: "Franchise", icon: Store, color: "text-amber-400" },
                        { id: 3, label: "Branding", icon: Sparkles, color: "text-purple-400" },
                        { id: 4, label: "IT Systems", icon: Cpu, color: "text-indigo-400" },
                        { id: 5, label: "AI & Robotics", icon: Bot, color: "text-cyan-400" },
                      ].map((tab) => {
                        const Icon = tab.icon;
                        const isCurrent = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as 0 | 1 | 2 | 3 | 4 | 5)}
                            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                              isCurrent
                                ? "bg-slate-800 text-white shadow-sm border border-slate-700"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${tab.color}`} />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 shrink-0 pl-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Live Hub
                      </span>
                    </div>
                  </div>

                  {/* Auto-rotating Tab Progress Bar */}
                  <div className="w-full bg-slate-800/60 h-1 rounded-full overflow-hidden mb-4">
                    <motion.div
                      key={activeTab}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-400 rounded-full"
                    />
                  </div>

                  {/* Active Visual Mode Panels for ALL 5 VERTICALS */}
                  <div className="min-h-[340px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {/* TAB 0: DIGITAL MARKETING COMMAND CENTER */}
                      {activeTab === 0 && (
                        <motion.div
                          key="tab-marketing"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                                <Activity className="w-3 h-3" />
                                Meta & Google Ads Live Performance Engine
                              </span>
                              <p className="text-xs font-bold text-slate-200">
                                Tricity Multi-Outlet Restaurant & Retail Campaigns
                              </p>
                            </div>
                            <span className="text-[10px] font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                              Active
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2.5">
                            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-slate-400 block font-medium">ROAS (Return)</span>
                              <span className="text-xl font-black text-emerald-400 block">4.85x</span>
                              <span className="text-[9px] text-emerald-500 font-semibold">+38% vs Industry</span>
                            </div>

                            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-slate-400 block font-medium">Monthly Leads</span>
                              <span className="text-xl font-black text-blue-400 block">+342</span>
                              <span className="text-[9px] text-blue-400 font-semibold">Verified Enquiries</span>
                            </div>

                            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-slate-400 block font-medium">Cost / Lead</span>
                              <span className="text-xl font-black text-cyan-400 block">₹38</span>
                              <span className="text-[9px] text-cyan-500 font-semibold">-42% Acquisition</span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                            <div className="flex justify-between text-[11px] font-semibold text-slate-300">
                              <span>Ad Impressions (142.8K)</span>
                              <span className="text-emerald-400 font-bold">114 Walk-ins / Sales</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                              <div className="bg-blue-600 h-full w-[45%]" />
                              <div className="bg-indigo-500 h-full w-[35%]" />
                              <div className="bg-emerald-500 h-full w-[20%]" />
                            </div>
                            <p className="text-[10px] text-slate-400">
                              Targeting: Zirakpur, Chandigarh, Panchkula & Mohali Local Audiences
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* TAB 1: RESTAURANT & CAFE SET-UP CONSULTANCY */}
                      {activeTab === 1 && (
                        <motion.div
                          key="tab-restaurant"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                                <UtensilsCrossed className="w-3 h-3" />
                                Turnkey Restaurant Setup Blueprint
                              </span>
                              <p className="text-xs font-bold text-slate-200">
                                Concept to Opening Day Execution in 60–90 Days
                              </p>
                            </div>
                            <span className="text-[10px] font-extrabold bg-orange-950 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full">
                              Turnkey SOPs
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5">
                            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-slate-400 block font-medium">Commercial Kitchen</span>
                              <span className="text-sm font-bold text-white block">Equipment & Zoning</span>
                              <span className="text-[10px] text-orange-400 font-semibold">Vendor Sourcing Done</span>
                            </div>

                            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-slate-400 block font-medium">Culinary Team</span>
                              <span className="text-sm font-bold text-white block">Chef & Staff Hiring</span>
                              <span className="text-[10px] text-emerald-400 font-semibold">Recipe SOPs Set</span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                            <p className="font-bold text-white flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                              13-Point Turnkey Opening Checklist:
                            </p>
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                              Site Feasibility • Space Planning • Kitchen Layout • Menu Engineering • Staff Training • Opening Day Launch Event.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* TAB 2: FRANCHISE CONSULTANCY & SCALING */}
                      {activeTab === 2 && (
                        <motion.div
                          key="tab-franchise"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                                <Store className="w-3 h-3" />
                                Multi-City Franchise Expansion Hub
                              </span>
                              <p className="text-xs font-bold text-slate-200">
                                Single Location to 10+ Outlets Network
                              </p>
                            </div>
                            <span className="text-[10px] font-extrabold bg-amber-950 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                              North India
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                              <span className="text-lg font-black text-amber-400 block">150+</span>
                              <span className="text-[10px] text-slate-400">Outlets Scaled</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                              <span className="text-lg font-black text-emerald-400 block">98.5%</span>
                              <span className="text-[10px] text-slate-400">Success Rate</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                              <span className="text-lg font-black text-blue-400 block">Legal</span>
                              <span className="text-[10px] text-slate-400">Agreements</span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                            <p className="font-bold text-white flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                              End-to-End Franchise Blueprint:
                            </p>
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                              Franchise model design, investor lead generation, deal closing, outlet audits, and turnkey onboarding SOPs.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* TAB 3: BRAND MANAGEMENT & EXPERIENCE */}
                      {activeTab === 3 && (
                        <motion.div
                          key="tab-brand"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" />
                                Luxury Brand Identity & Store Launches
                              </span>
                              <p className="text-xs font-bold text-slate-200">
                                “We don’t just build logos. We create experiences.”
                              </p>
                            </div>
                            <span className="text-[10px] font-extrabold bg-purple-950 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full">
                              Omnichannel
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5">
                            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-slate-400 block font-medium">Visual Identity</span>
                              <span className="text-sm font-bold text-white block">Logo, Packaging & Store</span>
                              <span className="text-[10px] text-purple-400 font-semibold">Trademark & Guidelines</span>
                            </div>

                            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-slate-400 block font-medium">Activations</span>
                              <span className="text-sm font-bold text-white block">Celebrity & Influencers</span>
                              <span className="text-[10px] text-emerald-400 font-semibold">VIP Grand Launches</span>
                            </div>
                          </div>

                          <p className="text-[11px] text-slate-400 flex items-center gap-1.5 p-2 bg-slate-900 rounded-xl">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span>Comprehensive customer touchpoints: Physical packaging, interiors & digital footprint.</span>
                          </p>
                        </motion.div>
                      )}

                      {/* TAB 4: INFORMATION TECHNOLOGY & CLOUD SYSTEMS */}
                      {activeTab === 4 && (
                        <motion.div
                          key="tab-it-systems"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                                <Cpu className="w-3 h-3" />
                                Cloud POS, Multi-Branch ERP & Integrations
                              </span>
                              <p className="text-xs font-bold text-slate-200">
                                Restaurant Billing, Swiggy/Zomato Sync & Web Portals
                              </p>
                            </div>
                            <span className="text-[10px] font-extrabold bg-indigo-950 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                              99.98% Uptime
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                              <span className="text-lg font-black text-indigo-400 block">&lt;0.8s</span>
                              <span className="text-[10px] text-slate-400">POS Billing Speed</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                              <span className="text-lg font-black text-emerald-400 block">Zero</span>
                              <span className="text-[10px] text-slate-400">Order Drop Rate</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                              <span className="text-lg font-black text-cyan-400 block">Live Sync</span>
                              <span className="text-[10px] text-slate-400">KOT & Inventory</span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                            <p className="font-bold text-white flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                              Enterprise Business Tech Architecture:
                            </p>
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                              Multi-branch automated inventory, central financial dashboards, customer loyalty CRM, and custom high-speed web apps.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* TAB 5: AI & ROBOTICS ACADEMY */}
                      {activeTab === 5 && (
                        <motion.div
                          key="tab-ai-robotics"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                                <Bot className="w-3 h-3" />
                                VIZ Tech Academy • Zirakpur Lab
                              </span>
                              <p className="text-xs font-bold text-slate-200">
                                100% Practical AI Masterclasses & Robotics Labs
                              </p>
                            </div>
                            <span className="text-[10px] font-extrabold bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                              Kit Included
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5">
                            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-purple-400 block font-bold">Generative AI Lab</span>
                              <span className="text-xs font-semibold text-white block">ChatGPT-4o & Claude 3.5</span>
                              <span className="text-[9px] text-slate-400">Prompt Engineering & Agents</span>
                            </div>

                            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                              <span className="text-[10px] text-cyan-400 block font-bold">Robotics Hardware</span>
                              <span className="text-xs font-semibold text-white block">Arduino & ESP32 IoT</span>
                              <span className="text-[9px] text-emerald-400">Take-Home Kit Included</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-cyan-400" />
                              Free Weekend Demo Class Available
                            </span>
                            <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-md">
                              Motiaz Business Park
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Quick Card CTA */}
                    <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-300">
                          {activeTab === 0
                            ? "Scale Your Ad ROI"
                            : activeTab === 1
                            ? "Launch Your Restaurant"
                            : activeTab === 2
                            ? "Scale Your Franchise"
                            : activeTab === 3
                            ? "Build Iconic Branding"
                            : activeTab === 4
                            ? "Upgrade IT & POS Tech"
                            : "Join Next AI & Robotics Batch"}
                        </span>
                      </div>
                      <a
                        href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20consult%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 hover:opacity-95 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltedCard>

              {/* Floating Badge 1: Commercial Impact */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-blue-200/90 shadow-xl items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">
                    Turnkey Restaurant & Franchise
                  </p>
                  <p className="text-[10px] text-orange-700 font-bold">
                    150+ Outlets Across North India
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Verified Partner */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="hidden sm:flex absolute -top-5 -right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-200/90 shadow-xl items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">
                    High-Performance Marketing
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Meta & Google Ads Engine
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}
