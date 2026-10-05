"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed,
  TrendingUp,
  Store,
  Bot,
  Brain,
  Sparkles,
  Cpu,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Eye,
  Layers,
  Zap,
  ShieldCheck,
  Star,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShinyText, SpotlightCard } from "@/components/animations";

export interface VisualPillar {
  id: string;
  name: string;
  shortName: string;
  icon: typeof UtensilsCrossed;
  image: string;
  badge: string;
  badgeColor: string;
  heroTag: string;
  oneLiner: string;
  beforeState: string;
  afterState: string;
  keyMetric: string;
  metricLabel: string;
  visualSteps: {
    num: string;
    title: string;
    desc: string;
  }[];
  tangibleDeliverables: string[];
  ctaLink: string;
  ctaText: string;
}

export const visualPillars: VisualPillar[] = [
  {
    id: "restaurant-setup",
    name: "Turnkey Restaurant & Cafe Set-Up",
    shortName: "Restaurant Setup",
    icon: UtensilsCrossed,
    image: "/images/services/restaurant-setup.jpg",
    badge: "Concept to Opening Day",
    badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
    heroTag: "150+ Outlets Launched Across North India",
    oneLiner: "Transforming empty commercial spaces into fully operational, packed dining destinations in 60–90 days.",
    beforeState: "Empty raw commercial hall with zero infrastructure",
    afterState: "Packed 120-seat dining room with working chef brigade",
    keyMetric: "60-90 Days",
    metricLabel: "Average Concept to Grand Opening",
    visualSteps: [
      {
        num: "01",
        title: "Site Scouting & CAD Layout",
        desc: "High-footfall location analysis & kitchen zoning blueprints.",
      },
      {
        num: "02",
        title: "Equipment & Chef Hiring",
        desc: "Commercial stainless steel setup & standardized recipes.",
      },
      {
        num: "03",
        title: "Licensing & Grand Launch",
        desc: "FSSAI, Fire NOC & high-visibility opening day marketing.",
      },
    ],
    tangibleDeliverables: [
      "Commercial Kitchen Blueprint CAD",
      "Executive Chef & Kitchen Staff Sourced",
      "Menu Engineering & Food-Cost Standard",
      "FSSAI, Fire & Health NOC Approvals",
      "Cloud POS & Kitchen Display Setup",
      "Opening Day Influencer & PR Launch",
    ],
    ctaLink: "/services#restaurant-setup",
    ctaText: "Explore Restaurant Setup",
  },
  {
    id: "digital-marketing",
    name: "High-ROI Digital Marketing & Ad Funnels",
    shortName: "Digital Marketing",
    icon: TrendingUp,
    image: "/images/services/digital-marketing.jpg",
    badge: "Performance & Footfall",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    heroTag: "4.85x Audited Ad ROAS Across Campaigns",
    oneLiner: "Hyperlocal Meta and Google ad funnels that fill tables, drive walk-ins, and deliver direct WhatsApp leads.",
    beforeState: "Empty store with unpredictable walk-ins & low reach",
    afterState: "340+ monthly qualified leads & steady walk-in traffic",
    keyMetric: "4.85x",
    metricLabel: "Average Verified Ad ROAS",
    visualSteps: [
      {
        num: "01",
        title: "Hyperlocal Ad Targeting",
        desc: "Reach ready-to-buy consumers within 3–15km radius.",
      },
      {
        num: "02",
        title: "Studio Ad Creatives & Reels",
        desc: "High-production video ads that stop the feed and drive action.",
      },
      {
        num: "03",
        title: "WhatsApp & CRM Funnel",
        desc: "Automated instant lead response converting chats into sales.",
      },
    ],
    tangibleDeliverables: [
      "Meta Instagram & Facebook Lead Ads",
      "Google Search & Performance Max Funnels",
      "Google Maps Top-3 Ranking Domination",
      "Automated WhatsApp Lead Capture Engine",
      "Live Cost-per-Lead & ROAS Dashboard",
      "Weekly Transparent Financial Reports",
    ],
    ctaLink: "/services#digital-marketing",
    ctaText: "Explore Marketing Funnels",
  },
  {
    id: "franchise-scaling",
    name: "Franchise Model Design & Multi-City Scaling",
    shortName: "Franchise Scaling",
    icon: Store,
    image: "/images/services/franchise-consultancy.jpg",
    badge: "150+ Outlets Network",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    heroTag: "From Single Store to 10+ City Outlets",
    oneLiner: "We turn proven regional outlets into investor-ready franchise systems with bulletproof SOPs and legal contracts.",
    beforeState: "Single successful outlet with owner tied to daily ops",
    afterState: "10+ outlet chain running on automated royalty SOPs",
    keyMetric: "150+",
    metricLabel: "Franchise Outlets Across North India",
    visualSteps: [
      {
        num: "01",
        title: "Franchise Model & Legal SOPs",
        desc: "FOCO/FOFO financial structure and airtight legal agreements.",
      },
      {
        num: "02",
        title: "Investor Lead Generation",
        desc: "Attracting and closing vetted high-net-worth investors.",
      },
      {
        num: "03",
        title: "Outlet Setup & Quality Audit",
        desc: "Turnkey onboarding, central supply chain & brand control.",
      },
    ],
    tangibleDeliverables: [
      "Franchise Information Memorandum (FIM)",
      "Standard Operating Procedures (SOP Manual)",
      "Legal Franchise Agreement Structuring",
      "Vetted Investor Lead Generation",
      "Supply Chain & Royalty Collection Setup",
      "Franchisee Training & Quality Audits",
    ],
    ctaLink: "/services#franchise-consultancy",
    ctaText: "Explore Franchise Scaling",
  },
  {
    id: "robotics-academy",
    name: "Hands-on Robotics & STEM Engineering Lab",
    shortName: "Robotics Labs",
    icon: Bot,
    image: "/images/services/robotics-classes.jpg",
    badge: "Take-Home Hardware Kit",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    heroTag: "100% Practical Hardware • Build Real Robots",
    oneLiner: "Every student receives a physical Arduino/ESP32 kit to wire circuits, code microcontrollers, and build autonomous rovers.",
    beforeState: "Theoretical book learning with zero practical hardware",
    afterState: "Student builds working obstacle-avoiding autonomous robot",
    keyMetric: "100%",
    metricLabel: "Hands-on Hardware Lab Experience",
    visualSteps: [
      {
        num: "01",
        title: "Kit Unboxing & Circuit Wiring",
        desc: "Hands-on breadboard wiring, sensors, motors & power logic.",
      },
      {
        num: "02",
        title: "Microcontroller C++ Coding",
        desc: "Programming Arduino and ESP32 to read sensor inputs.",
      },
      {
        num: "03",
        title: "Autonomous Rover Demo",
        desc: "Building obstacle-avoiding, Bluetooth & IoT smart machines.",
      },
    ],
    tangibleDeliverables: [
      "Take-Home Arduino & ESP32 Microcontroller Kit",
      "Ultrasonic, Infrared, Temperature & Gas Sensors",
      "4WD Smart Robotic Chassis & Motor Drivers",
      "Physical Breadboard & Jumper Wire Component Kit",
      "Project Certification & Working Codebase",
      "Weekend Demo Lab at Motiaz Business Park",
    ],
    ctaLink: "/services#robotics-classes",
    ctaText: "Explore Robotics Classes",
  },
  {
    id: "luxury-branding",
    name: "Luxury Brand Management & Store Identity",
    shortName: "Brand Management",
    icon: Sparkles,
    image: "/images/services/brand-management.jpg",
    badge: "Premium Visual Identity",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    heroTag: "Gold-Foil Packaging & High-End Retail Concepts",
    oneLiner: "We don't just design logos; we create memorable luxury packaging, store aesthetics, and VIP launch experiences.",
    beforeState: "Generic unbranded store lost in retail noise",
    afterState: "Iconic luxury brand with custom packaging & VIP following",
    keyMetric: "360°",
    metricLabel: "Complete Brand Ecosystem Design",
    visualSteps: [
      {
        num: "01",
        title: "Brand Strategy & Trademark",
        desc: "Premium positioning, color psychology & legal brand mark.",
      },
      {
        num: "02",
        title: "Luxury Packaging & Interior",
        desc: "Embossed boxes, high-end bags, menus & store aesthetics.",
      },
      {
        num: "03",
        title: "VIP Launch & Celebrity PR",
        desc: "Regional influencer activations & grand opening events.",
      },
    ],
    tangibleDeliverables: [
      "Complete Brand Identity & Typography System",
      "Custom Packaging, Bags & Label Specifications",
      "Store Interior Design Language & Signage",
      "Menu & Collateral Print Production Guidance",
      "Influencer & VIP Guest Opening Architecture",
      "Trademark Registration & IP Protection Assistance",
    ],
    ctaLink: "/services#brand-management",
    ctaText: "Explore Brand Management",
  },
  {
    id: "ai-academy",
    name: "AI & Generative Tech Masterclasses",
    shortName: "AI Masterclass",
    icon: Brain,
    image: "/images/services/ai-classes.jpg",
    badge: "GenAI & Prompt Mastery",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    heroTag: "ChatGPT-4o, Claude 3.5 & Custom AI Agents",
    oneLiner: "Practical, career-defining AI training. Learn prompt engineering, workflow automation, and how to build custom AI agents.",
    beforeState: "Spending 6 hours daily on repetitive business tasks",
    afterState: "Automated custom AI agent handling workflows in minutes",
    keyMetric: "10x",
    metricLabel: "Productivity Multiplier with AI Tools",
    visualSteps: [
      {
        num: "01",
        title: "LLM & Prompt Architecture",
        desc: "Chain-of-thought, persona prompting & GenAI mastery.",
      },
      {
        num: "02",
        title: "AI Automation Workflows",
        desc: "Connecting ChatGPT, Make.com & Zapier to automate tasks.",
      },
      {
        num: "03",
        title: "Custom AI Agents & Code",
        desc: "Python for AI, customer service bots & real portfolio.",
      },
    ],
    tangibleDeliverables: [
      "Mastery of ChatGPT-4o, Claude 3.5 & Midjourney",
      "No-Code AI Automation with Make.com & Zapier",
      "Custom Customer Support AI Chatbot Project",
      "Python for Machine Learning Foundations",
      "Hands-on Portfolio of Working AI Workflows",
      "Industry Recognized AI Specialist Certificate",
    ],
    ctaLink: "/services#ai-classes",
    ctaText: "Explore AI Classes",
  },
];

export function VisualShowcase() {
  const [activeId, setActiveId] = useState<string>("restaurant-setup");
  const activePillar = visualPillars.find((p) => p.id === activeId) || visualPillars[0];
  const Icon = activePillar.icon;

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-b border-slate-200/80 relative overflow-hidden [overflow-x:clip] w-full max-w-full isolate">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [contain:paint]">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full min-w-0">
        {/* Section Header - Crystal Clear Visual Promise */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200/90 shadow-xs">
            <Eye className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <ShinyText
              text="Visual Proof & Tangible Deliverables"
              color="#1d4ed8"
              shineColor="#f97316"
              speed={3}
              className="text-[11px] sm:text-xs font-bold tracking-wider uppercase"
            />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight break-words">
            See Exactly What We Build For You
          </h2>

          <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto break-words leading-relaxed">
            No endless walls of text. Look directly at the real blueprints, commercial kitchens, multi-store franchise networks, ad funnels, and take-home robotics kits we deliver.
          </p>
        </div>

        {/* Interactive Visual Category Selector Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-6 w-full max-w-full [contain:paint]">
          <div className="flex items-center gap-2 min-w-max p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80">
            {visualPillars.map((pillar) => {
              const PIcon = pillar.icon;
              const isSelected = activeId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveId(pillar.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-white text-slate-900 shadow-md shadow-slate-200/80 border border-slate-200 scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  <PIcon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isSelected ? "text-blue-600" : "text-slate-400"
                    }`}
                  />
                  <span>{pillar.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Visual Stage - High-Impact Two-Column Deliverables Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mt-4 sm:mt-6 bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/90 shadow-xl overflow-hidden w-full min-w-0"
          >
            <div className="grid lg:grid-cols-12 gap-0 w-full min-w-0">
              {/* Left Column: High-Impact Visual Photo Stage */}
              <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[440px] lg:min-h-[520px] bg-slate-900 overflow-hidden flex flex-col justify-between p-5 sm:p-7 group">
                <Image
                  src={activePillar.image}
                  alt={activePillar.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Visual Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                {/* Top Badges */}
                <div className="relative z-10 flex items-start justify-between gap-2">
                  <span
                    className={`text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-md bg-white/95 border ${activePillar.badgeColor}`}
                  >
                    {activePillar.badge}
                  </span>

                  <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[10px] sm:text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verified Deliverable</span>
                  </div>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="relative z-10 space-y-3 pt-12">
                  <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] sm:text-xs font-bold shadow-sm">
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{activePillar.heroTag}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug drop-shadow-md">
                    {activePillar.name}
                  </h3>

                  <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed drop-shadow">
                    {activePillar.oneLiner}
                  </p>

                  {/* Impact Metric Bar */}
                  <div className="pt-2 flex items-center gap-3">
                    <div className="bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-xl">
                      <span className="text-lg sm:text-2xl font-black text-amber-300 block">
                        {activePillar.keyMetric}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-slate-300 block">
                        {activePillar.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Architecture Breakdown (No Fluff) */}
              <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 sm:space-y-8 bg-white min-w-0">
                {/* 3-Step Visual Blueprint Pipeline */}
                <div className="space-y-3 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      3-Step Execution Pipeline
                    </span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      Turnkey Process
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full min-w-0">
                    {activePillar.visualSteps.map((step, idx) => (
                      <div
                        key={step.num}
                        className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 relative group/step hover:border-blue-300 hover:bg-blue-50/40 transition-colors min-w-0"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-md">
                            STEP {step.num}
                          </span>
                          {idx < 2 && (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 hidden sm:block -mr-1" />
                          )}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 pt-1 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tangible What You Walk Away With Grid */}
                <div className="space-y-3 min-w-0">
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Tangible Deliverables You Receive</span>
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full min-w-0">
                    {activePillar.tangibleDeliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs font-bold text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="break-words leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before vs After Visual Snapshot */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-orange-50/70 via-slate-50 to-blue-50/70 border border-slate-200/90 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600">
                    Real Transformation Snapshot
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-start gap-1.5 bg-white/80 p-2 rounded-xl border border-red-200/60">
                      <span className="text-[10px] font-black text-red-600 uppercase shrink-0">
                        Before:
                      </span>
                      <span className="text-slate-600 text-[11px] leading-tight">
                        {activePillar.beforeState}
                      </span>
                    </div>

                    <div className="flex items-start gap-1.5 bg-white/90 p-2 rounded-xl border border-emerald-200/70 shadow-2xs">
                      <span className="text-[10px] font-black text-emerald-600 uppercase shrink-0">
                        After:
                      </span>
                      <span className="text-slate-800 text-[11px] font-semibold leading-tight">
                        {activePillar.afterState}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100">
                  <Link href={activePillar.ctaLink} className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20">
                      <span>{activePillar.ctaText}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Button>
                  </Link>

                  <a
                    href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20am%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold px-4 py-3 rounded-xl transition-colors text-xs text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Visual Quick-Grid of All 6 Deliverables at a Glance */}
        <div className="mt-10 sm:mt-14">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Quick Visual Jump • Click to Preview Any Core Vertical
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full min-w-0">
            {visualPillars.map((item) => {
              const PIcon = item.icon;
              const isCurrent = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative rounded-2xl overflow-hidden border p-2.5 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-36 sm:h-40 ${
                    isCurrent
                      ? "border-blue-600 ring-2 ring-blue-600/30 shadow-lg bg-blue-50/40"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className="relative h-20 w-full rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 bg-white/95 p-1 rounded-md text-blue-600 shadow-xs">
                      <PIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="pt-2 min-w-0">
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 truncate leading-snug group-hover:text-blue-600">
                      {item.shortName}
                    </p>
                    <p className="text-[9px] text-slate-500 truncate font-semibold">
                      {item.keyMetric} {item.metricLabel.split(" ")[0]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
