"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  UtensilsCrossed,
  Store,
  Sparkles,
  Cpu,
  Bot,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Users,
  MapPin,
  Zap,
  ChevronRight,
  MessageCircle,
  Phone,
  FileText,
  Compass,
  Layers,
  Check,
  Flame,
  Activity,
  Boxes,
} from "lucide-react";
import { SpotlightCard, ShinyText, BlurText, CountUp } from "@/components/animations";
import { Button } from "@/components/ui/button";

export function AllOfferingsShowcase() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: "Digital Marketing",
      shortTitle: "Marketing & Ads",
      icon: TrendingUp,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      accentGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      headline: "Performance Marketing & Customer Footfall Funnels",
      badge: "High-ROI Growth Engine",
      description:
        "We turn online attention into paying customers. Hyper-local Meta and Google ad campaigns optimized for verified phone enquiries, table bookings, and retail footfall across Zirakpur, Chandigarh, and Pan-India.",
      stats: [
        { label: "Average Ad ROAS", value: "4.85x", subtext: "Audited ROI" },
        { label: "Cost Per Qualified Lead", value: "₹38", subtext: "-42% vs Industry" },
        { label: "Verified Monthly Leads", value: "+340", subtext: "Per Business" },
      ],
      roadmapTitle: "Proven Performance Marketing Architecture",
      roadmap: [
        {
          step: "01",
          title: "Hyperlocal Audience Targeting",
          desc: "Pinpoint ad delivery within 3-15km radius of your business in Tricity and Punjab to capture ready-to-buy consumers.",
        },
        {
          step: "02",
          title: "High-Converting Ad Creatives & Reels",
          desc: "Studio-quality food, product, and brand videos designed to stop the scroll and trigger immediate bookings or purchases.",
        },
        {
          step: "03",
          title: "Automated WhatsApp & CRM Funnel",
          desc: "Instant automated WhatsApp replies and CRM lead integration so customer enquiries are converted within 2 minutes.",
        },
        {
          step: "04",
          title: "Weekly Transparent ROI Dashboards",
          desc: "Real-time cost-per-lead, conversion rates, and revenue attribution with zero hidden agency fees.",
        },
      ],
      deliverables: [
        "Meta Ads (Instagram & Facebook Lead + Conversion Campaigns)",
        "Google Search, Performance Max & Maps Ranking",
        "Google My Business (GMB) Top 3 Local Pack Domination",
        "WhatsApp Business Automation & CRM Lead Pipeline",
      ],
      link: "/services#digital-marketing",
      ctaText: "Discuss Your Marketing Campaign",
    },
    {
      id: 1,
      title: "Restaurant & Cafe Setup",
      shortTitle: "Restaurant Setup",
      icon: UtensilsCrossed,
      color: "text-orange-600 bg-orange-50 border-orange-200",
      accentGradient: "from-orange-600 via-amber-600 to-red-500",
      headline: "Turnkey Restaurant & Cafe Launch in 60–90 Days",
      badge: "150+ Outlets Launched",
      description:
        "From an empty commercial hall to a bustling, profitable dining destination. We manage prime location selection, commercial kitchen zoning, equipment procurement, head chef hiring, menu engineering, and grand opening marketing.",
      stats: [
        { label: "Outlets Launched", value: "150+", subtext: "Across North India" },
        { label: "Concept to Launch", value: "60-90", subtext: "Days Average" },
        { label: "Kitchen Efficiency", value: "100%", subtext: "Zero Equipment Waste" },
      ],
      roadmapTitle: "60-90 Day Milestone Execution Path",
      roadmap: [
        {
          step: "01",
          title: "Location Scouting & Feasibility",
          desc: "Footfall analytics, parking feasibility, demographic purchasing power assessment, and lease negotiation.",
        },
        {
          step: "02",
          title: "Kitchen Layout & Equipment Zoning",
          desc: "Commercial stainless steel layout, exhaust ducting, refrigeration zoning, and vendor procurement at wholesale rates.",
        },
        {
          step: "03",
          title: "Chef Hiring & Culinary Trials",
          desc: "Executive chef recruitment, live kitchen taste trials, standardized recipes, and exact food-cost portioning.",
        },
        {
          step: "04",
          title: "Licensing, SOPs & Grand Opening",
          desc: "FSSAI, Fire NOC, Trade License, staff hospitality training, influencer food tasting, and blockbuster opening day.",
        },
      ],
      deliverables: [
        "Commercial kitchen equipment sourcing & layout CAD blueprints",
        "Head chef & line-cook hiring, kitchen brigade training",
        "Menu engineering, food-cost margin controls & recipe books",
        "FSSAI, Fire & Municipal licensing assistance & grand opening PR",
      ],
      link: "/services#restaurant-setup",
      ctaText: "Plan Your Restaurant Setup",
    },
    {
      id: 2,
      title: "Franchise Expansion",
      shortTitle: "Franchise Scaling",
      icon: Store,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      accentGradient: "from-amber-600 via-orange-600 to-yellow-500",
      headline: "Scale from 1 Single Location to a 10+ Outlet Franchise Chain",
      badge: "Multi-City Expansion",
      description:
        "Transform your successful restaurant, retail store, or brand into an attractive, investor-ready franchise system. We draft the legal frameworks, design FOCO/FOFO royalty models, generate qualified investors, and audit outlet quality.",
      stats: [
        { label: "Franchises Scaled", value: "150+", subtext: "Active Network" },
        { label: "Franchisee Retention", value: "98.5%", subtext: "Long-term Stability" },
        { label: "Expansion Reach", value: "12+", subtext: "Cities Across Punjab" },
      ],
      roadmapTitle: "Franchise Growth & Scaling Architecture",
      roadmap: [
        {
          step: "01",
          title: "Franchise Business & Royalty Modeling",
          desc: "Structuring FOFO (Franchise Owned, Franchise Operated) and FOCO models with realistic CAPEX, OPEX, and ROI projections.",
        },
        {
          step: "02",
          title: "Legal Agreements & Disclosure Documents",
          desc: "Air-tight franchise agreements, master franchise contracts, IP protection, and territorial exclusivity clauses.",
        },
        {
          step: "03",
          title: "Investor Matchmaking & Sales Closing",
          desc: "High-net-worth investor lead generation, investor discovery meetings, and complete franchise deal closing support.",
        },
        {
          step: "04",
          title: "Outlet Auditing & Standard SOP Manuals",
          desc: "Standard operating manuals, secret-shopper quality audits, central supply chain controls, and ongoing compliance.",
        },
      ],
      deliverables: [
        "Comprehensive Franchise Disclosure Document (FDD) & investor decks",
        "FOCO & FOFO legal agreements with royalty remittance framework",
        "High-net-worth franchise investor marketing & closing desk",
        "Standard Operational Manuals (SOPs) & brand quality audit checklists",
      ],
      link: "/services#franchise-consultancy",
      ctaText: "Scale Your Business as a Franchise",
    },
    {
      id: 3,
      title: "Brand Management",
      shortTitle: "Luxury Branding",
      icon: Sparkles,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      accentGradient: "from-purple-600 via-indigo-600 to-pink-500",
      headline: "Luxury Visual Identity, 3D Store Architecture & VIP Launches",
      badge: "Unforgettable Brand Experience",
      description:
        "We don't just design logos; we create iconic consumer brands. From brand naming and luxury identity guidelines to 3D store interior concepts, premium packaging design, and celebrity/influencer launch campaigns.",
      stats: [
        { label: "Brand Identities Built", value: "500+", subtext: "Logos & Design Systems" },
        { label: "Packaging Projects", value: "220+", subtext: "Custom Retail & Food" },
        { label: "Celebrity Activations", value: "45+", subtext: "Grand Launch Events" },
      ],
      roadmapTitle: "End-to-End Brand Architecture Framework",
      roadmap: [
        {
          step: "01",
          title: "Brand Strategy & Positioning",
          desc: "Competitor gap analysis, brand archetypes, unique value proposition, and trademark availability checks.",
        },
        {
          step: "02",
          title: "Luxury Visual Identity & Guidelines",
          desc: "Bespoke logo design, typographic hierarchy, signature color palettes, and comprehensive brand guideline manuals.",
        },
        {
          step: "03",
          title: "Packaging & 3D Store Concepts",
          desc: "Custom takeaway packaging, cups, carry bags, label finishes, and 3D architectural interior/exterior store renders.",
        },
        {
          step: "04",
          title: "Celebrity & Influencer Grand Launch",
          desc: "High-impact opening day events with verified regional lifestyle influencers, press releases, and social buzz.",
        },
      ],
      deliverables: [
        "Complete Brand Identity Suite (Logos, Color Systems, Typography)",
        "Physical packaging engineering (Coffee cups, takeaway bags, boxes)",
        "3D Store Interior and Exterior Signage Design renders",
        "Celebrity, press & food/lifestyle influencer launch management",
      ],
      link: "/services#brand-management",
      ctaText: "Elevate Your Brand Identity",
    },
    {
      id: 4,
      title: "IT & Cloud Systems",
      shortTitle: "IT & Cloud POS",
      icon: Cpu,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      accentGradient: "from-indigo-600 via-blue-600 to-cyan-500",
      headline: "Cloud POS, Central Multi-Store ERP & Custom Web Systems",
      badge: "Enterprise Business Tech",
      description:
        "Modernize your traditional operations. We implement rock-solid cloud billing POS systems with live Swiggy/Zomato synchronization, multi-outlet centralized inventory ERPs, customer loyalty engines, and custom high-speed web apps.",
      stats: [
        { label: "System Uptime", value: "99.98%", subtext: "Zero Outages" },
        { label: "POS Billing Speed", value: "<0.8s", subtext: "Ultra-Fast KOT" },
        { label: "Centralized Sync", value: "100%", subtext: "Live Swiggy & Zomato" },
      ],
      roadmapTitle: "Operational Technology Stack Deployment",
      roadmap: [
        {
          step: "01",
          title: "Cloud POS & Kitchen Display (KDS)",
          desc: "Lightning-fast billing hardware, Kitchen Order Ticket (KOT) automation, table QR ordering, and zero order drops.",
        },
        {
          step: "02",
          title: "Swiggy, Zomato & Online Aggregator Sync",
          desc: "Single-screen order acceptance, central menu editing, dynamic price updates, and automated outlet stock off-switches.",
        },
        {
          step: "03",
          title: "Multi-Location Inventory & ERP",
          desc: "Central commissary management, ingredient recipe consumption tracking, low-stock alerts, and daily margin audits.",
        },
        {
          step: "04",
          title: "Custom Web Portals & Mobile Apps",
          desc: "High-performance Next.js web applications, direct ordering engines to save 20-30% aggregator commissions, and CRM.",
        },
      ],
      deliverables: [
        "Cloud Restaurant & Retail POS deployment with thermal printers",
        "Direct Swiggy & Zomato aggregator live menu and order integration",
        "Central multi-branch inventory, recipe costing & ERP software",
        "Custom high-speed website, customer reservation & loyalty portal",
      ],
      link: "/services#information-technology",
      ctaText: "Upgrade Your Tech Infrastructure",
    },
    {
      id: 5,
      title: "AI & Robotics Academy",
      shortTitle: "AI & Robotics",
      icon: Bot,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
      accentGradient: "from-cyan-600 via-blue-600 to-indigo-600",
      headline: "Hands-on Practical AI Masterclasses & Robotics Hardware Labs",
      badge: "Hardware Kit Included",
      description:
        "100% practical, project-driven future skills. Learn Generative AI, Prompt Engineering, and custom AI agents, or build real micro-controlled robots with a take-home Arduino/ESP32 hardware kit at our Zirakpur physical lab.",
      stats: [
        { label: "Students & Pros Trained", value: "850+", subtext: "Learners in Tricity" },
        { label: "Practical Lab Projects", value: "25+", subtext: "Hands-on Builds" },
        { label: "Hardware Kit", value: "Included", subtext: "Every Robotics Student" },
      ],
      roadmapTitle: "Hands-On Curriculum & Learning Roadmap",
      roadmap: [
        {
          step: "01",
          title: "Generative AI & Prompt Engineering",
          desc: "Master ChatGPT-4o, Claude 3.5, Midjourney, and prompt engineering architectures to automate real business workflows.",
        },
        {
          step: "02",
          title: "Take-Home Robotics Hardware Kit",
          desc: "Every robotics student receives an Arduino Uno, ESP32 Wi-Fi microcontroller, sensors, breadboards, and motor drivers.",
        },
        {
          step: "03",
          title: "Autonomous Robotics & Smart IoT",
          desc: "Build obstacle-avoiding autonomous rovers, smartphone Bluetooth RC cars, and Wi-Fi-enabled home automation systems.",
        },
        {
          step: "04",
          title: "Industry Project Portfolio & Certification",
          desc: "Graduate with working physical prototypes, real-world portfolio demonstrations, and verifiable course credentials.",
        },
      ],
      deliverables: [
        "Take-home microcontrollers, ultrasonic sensors & motor chassis kits",
        "Comprehensive GenAI mastery: ChatGPT-4o, Claude 3.5, Python AI",
        "Classes for School Students (Ages 8+), Teens & College Engineers",
        "Free weekend demo classes at Motiaz Business Park, Zirakpur",
      ],
      link: "/services#ai-classes",
      ctaText: "Book Free Weekend Demo Class",
    },
  ];

  const current = pillars[selectedPillar];
  const CurrentIcon = current.icon;

  return (
    <section id="all-offerings" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden scroll-mt-20">
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/90 shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <ShinyText
              text="Comprehensive Business & Tech Architecture"
              color="#1e3a8a"
              shineColor="#f97316"
              speed={3}
              className="text-xs font-bold tracking-wider uppercase"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            <BlurText
              text="What We Provide:"
              delay={60}
              className="text-slate-900 block"
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 block mt-1">
              Every Solution, Highlighted in Full Depth.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We don&apos;t just specialize in one domain. Explore how VIZ Digital drives complete transformation across marketing, hospitality, franchising, branding, enterprise IT, and future tech education.
          </p>
        </div>

        {/* Pillar Switcher Navigation Bar - All 6 Pillars Visually Equal */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 border ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-[1.03] border-slate-900"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border-slate-200/90 shadow-xs"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-white/20 text-white" : pillar.color
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{pillar.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Interactive Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden"
          >
            {/* Top Showcase Banner with Metrics */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white p-7 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5">
                      <CurrentIcon className="w-3.5 h-3.5 text-blue-400" />
                      <span>{current.title}</span>
                    </span>
                    <span className="text-xs font-extrabold text-orange-400 bg-orange-500/15 px-3 py-1 rounded-full border border-orange-500/30">
                      {current.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                    {current.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                    {current.description}
                  </p>
                </div>

                {/* Live Stat Badges Column */}
                <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-2.5">
                  {current.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5"
                    >
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {stat.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white block">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold block">
                        {stat.subtext}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Content: Execution Roadmap & Deliverables */}
            <div className="p-7 sm:p-10 grid lg:grid-cols-12 gap-10">
              {/* Left Column: 4-Step Milestone Roadmap */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Operational Blueprint
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                    {current.roadmapTitle}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {current.roadmap.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                          {step.step}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 leading-snug">
                          {step.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Tangible Deliverables & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 p-6 sm:p-7 rounded-3xl bg-blue-50/50 border border-blue-100">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      What You Receive
                    </span>
                    <h5 className="text-base font-bold text-slate-900">
                      Standard Deliverables & Guarantees
                    </h5>
                  </div>

                  <ul className="space-y-2.5">
                    {current.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-blue-200/60 space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link href={current.link} className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-xs sm:text-sm shadow-md shadow-blue-600/20">
                        <span>Explore Full Scope</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>

                    <a
                      href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20consult%20regarding%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3 rounded-2xl text-xs transition-colors shrink-0 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>

                  <p className="text-[10px] text-center text-slate-500 font-medium">
                    📍 Direct consulting & labs at Motiaz Business Park, Zirakpur, Punjab
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
