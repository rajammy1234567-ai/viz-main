"use client";

import { useState, useEffect, useRef } from "react";
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
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Film,
  X,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ShinyText,
  CountUp,
  TiltedCard,
  ClickSpark,
} from "@/components/animations";

export interface HeroShowcaseItem {
  id: number;
  type?: "video" | "image";
  vertical: string;
  shortLabel: string;
  icon: any;
  image?: string;
  videoSrc?: string;
  badge: string;
  badgeColor: string;
  keyMetric: string;
  metricSub: string;
  title: string;
  description: string;
  deliverableChips: string[];
  link: string;
  accentGlow: string;
}

export const heroShowcases: HeroShowcaseItem[] = [
  {
    id: 0,
    type: "video",
    vertical: "Official Brand Reel",
    shortLabel: "Brand Film",
    icon: Film,
    videoSrc: "/ai-viz-digital.mp4",
    badge: "Official Showcase • 1080p HD",
    badgeColor: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white",
    keyMetric: "360° Engine",
    metricSub: "Commercial Scaling & AI Innovation",
    title: "VIZ Digital — Complete Growth & Tech Architecture",
    description:
      "Watch how we architect turnkey dining venues, manage 4.85x ROAS ad funnels, scale multi-city franchises, and engineer hands-on robotics labs.",
    deliverableChips: [
      "🎬 54-Sec Brand Film",
      "⚡ Turnkey Execution",
      "🤖 AI & Robotics Studio",
    ],
    link: "#visual-showcase",
    accentGlow: "from-blue-600 via-indigo-600 to-cyan-500",
  },
  {
    id: 1,
    type: "image",
    vertical: "Restaurant & Cafe Setup",
    shortLabel: "Restaurant",
    icon: UtensilsCrossed,
    image: "/images/services/restaurant-setup.jpg",
    badge: "Turnkey Launch • 60–90 Days",
    badgeColor: "bg-orange-500 text-white",
    keyMetric: "150+ Outlets",
    metricSub: "Commercial Dining Outlets Launched",
    title: "Turnkey Kitchen & Restaurant Architecture",
    description:
      "Location scouting, commercial kitchen layout CAD, chef hiring, recipe SOPs & grand opening day.",
    deliverableChips: [
      "📐 Kitchen Zoning Blueprint",
      "👨‍🍳 Chef & Staff Recruited",
      "📜 FSSAI & Fire NOC Done",
    ],
    link: "/services#restaurant-setup",
    accentGlow: "from-orange-500 to-amber-500",
  },
  {
    id: 2,
    type: "image",
    vertical: "Digital Marketing & Ads",
    shortLabel: "Marketing",
    icon: TrendingUp,
    image: "/images/services/digital-marketing.jpg",
    badge: "4.85x Audited ROAS",
    badgeColor: "bg-blue-600 text-white",
    keyMetric: "340+ Leads/Mo",
    metricSub: "Direct WhatsApp & Phone Walk-ins",
    title: "High-ROI Performance Ad Funnels",
    description:
      "Hyperlocal Meta & Google ad campaigns that drive real footfall, table reservations, and verified leads.",
    deliverableChips: [
      "🎯 Hyperlocal Meta & Google Ads",
      "📹 High-Converting Video Reels",
      "⚡ WhatsApp Instant Lead Bot",
    ],
    link: "/services#digital-marketing",
    accentGlow: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    type: "image",
    vertical: "Franchise Expansion",
    shortLabel: "Franchise",
    icon: Store,
    image: "/images/services/franchise-consultancy.jpg",
    badge: "150+ Outlets Scaled",
    badgeColor: "bg-amber-600 text-white",
    keyMetric: "98.5%",
    metricSub: "Franchisee Network Retention",
    title: "Single Store to 10+ Multi-City Franchise Chain",
    description:
      "Franchise model blueprint, FOCO/FOFO legal agreements, vetted investor lead generation & audits.",
    deliverableChips: [
      "📋 Legal Franchise Agreements",
      "🤝 Vetted Investor Deal-Closing",
      "🏢 Turnkey Store Onboarding",
    ],
    link: "/services#franchise-consultancy",
    accentGlow: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    type: "image",
    vertical: "Robotics & STEM Labs",
    shortLabel: "Robotics",
    icon: Bot,
    image: "/images/services/robotics-classes.jpg",
    badge: "Take-Home Hardware Kit",
    badgeColor: "bg-cyan-600 text-white",
    keyMetric: "100% Practical",
    metricSub: "Build Working 4WD Autonomous Rovers",
    title: "Hands-on Robotics & IoT Engineering",
    description:
      "Students assemble physical Arduino/ESP32 circuits, wire sensors, and code autonomous obstacle bots.",
    deliverableChips: [
      "📦 Arduino/ESP32 Kit Included",
      "🚗 Obstacle-Avoiding 4WD Bot",
      "🏆 STEM Project Certification",
    ],
    link: "/services#robotics-classes",
    accentGlow: "from-cyan-500 to-blue-600",
  },
  {
    id: 5,
    type: "image",
    vertical: "Luxury Brand Management",
    shortLabel: "Branding",
    icon: Sparkles,
    image: "/images/services/brand-management.jpg",
    badge: "Luxury Packaging & Identity",
    badgeColor: "bg-purple-600 text-white",
    keyMetric: "360° Identity",
    metricSub: "Packaging, Interiors & Launch PR",
    title: "Luxury Visual Identity & Store Experiences",
    description:
      "Gold-foil product packaging, architectural retail aesthetics, menus, and VIP grand launch activations.",
    deliverableChips: [
      "✨ Foil Embossed Packaging",
      "🏪 Store Interior Aesthetics",
      "📸 Influencer VIP Launch PR",
    ],
    link: "/services#brand-management",
    accentGlow: "from-purple-600 to-pink-500",
  },
  {
    id: 6,
    type: "image",
    vertical: "AI & Tech Masterclass",
    shortLabel: "AI Classes",
    icon: Brain,
    image: "/images/services/ai-classes.jpg",
    badge: "GenAI & Prompt Mastery",
    badgeColor: "bg-indigo-600 text-white",
    keyMetric: "10x Productivity",
    metricSub: "Custom AI Agents & Automation",
    title: "Generative AI, ChatGPT & Agent Studio",
    description:
      "Practical AI mastery: prompt engineering, ChatGPT-4o workflows, Python for AI, and automated business agents.",
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

  // Video State
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(54.34);
  const [isCinemaOpen, setIsCinemaOpen] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const cinemaVideoRef = useRef<HTMLVideoElement>(null);

  // Auto-rotate hero showcases every 6.5s ONLY when on photo slides and not hovered
  useEffect(() => {
    // If on video (tab 0) or user has paused, do not auto-rotate
    if (activeTab === 0 || isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroShowcases.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, activeTab]);

  // Video controls
  const togglePlay = () => {
    if (!heroVideoRef.current) return;
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      heroVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setHasInteracted(true);
    if (!heroVideoRef.current) return;
    const nextState = !isMuted;
    heroVideoRef.current.muted = nextState;
    setIsMuted(nextState);
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.currentTime = 0;
    heroVideoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroVideoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const target = ratio * (heroVideoRef.current.duration || duration || 54.34);
    heroVideoRef.current.currentTime = target;
    setCurrentTime(target);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Cinema modal actions
  const openCinemaModal = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.pause();
      setIsPlaying(false);
    }
    setIsCinemaOpen(true);
  };

  const closeCinemaModal = () => {
    if (cinemaVideoRef.current) {
      cinemaVideoRef.current.pause();
    }
    setIsCinemaOpen(false);
    if (heroVideoRef.current && activeTab === 0) {
      heroVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // ESC key listener for Cinema Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCinemaOpen) {
        closeCinemaModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCinemaOpen]);

  const current = heroShowcases[activeTab] || heroShowcases[0];
  const CurrentIcon = current.icon;
  const isCurrentVideo = current.type === "video";

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/30 to-white w-full max-w-full">
      {/* Interactive Micro Click Sparks */}
      <ClickSpark
        sparkColor="#2563EB"
        sparkCount={10}
        sparkRadius={24}
        className="w-full max-w-full min-w-0 overflow-hidden"
      >
        {/* Dynamic Ambient Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [contain:paint]">
          <div className="absolute top-10 left-1/4 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-blue-500/12 rounded-full blur-[80px] sm:blur-[130px] animate-pulse-slow" />
          <div className="absolute bottom-10 right-1/4 w-[220px] sm:w-[460px] h-[220px] sm:h-[460px] bg-indigo-500/12 rounded-full blur-[80px] sm:blur-[130px] animate-pulse-slow delay-1000" />
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
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-[10px] sm:text-[11px] font-bold shrink-0">
                  <Film className="w-3.5 h-3.5 shrink-0" />
                  <span>Featured Video Inside</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-800 px-1">
                  Restaurants • Ads • Franchises • AI & Robotics • Zirakpur
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.12] break-words">
                  Scale Your Business With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                    Proven Systems & AI
                  </span>{" "}
                  Innovation.
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 break-words">
                  Turnkey Restaurant & Cafe Launches, Hyperlocal High-ROI Marketing, Multi-City Franchise Expansion, Luxury Branding, IT Infrastructure & Hands-On AI & Robotics Masterclasses.
                </p>
              </motion.div>

              {/* Tangible Service Highlights Strip */}
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
                {/* Watch Brand Video Button */}
                <Button
                  onClick={() => {
                    setActiveTab(0);
                    toggleMute();
                    heroVideoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  size="lg"
                  className="w-full sm:w-auto rounded-2xl px-5 py-5 sm:py-6 text-xs sm:text-base font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group border border-white/20 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                  </div>
                  <span>Watch Brand Film</span>
                  <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">
                    0:54
                  </span>
                </Button>

                <a href="#visual-showcase" className="w-full sm:w-auto max-w-full block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-2xl px-5 py-5 sm:py-6 text-xs sm:text-base font-bold border-blue-300 text-blue-700 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Eye className="w-4 h-4 shrink-0 text-blue-600" />
                    <span>Deliverables</span>
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
                    className="w-full sm:w-auto rounded-2xl px-4 py-5 sm:py-6 text-xs sm:text-base font-bold border-emerald-300 text-emerald-800 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp</span>
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

            {/* Right Column: Stunning Interactive Visual Showcase Stage with Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative w-full max-w-full min-w-0 mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <TiltedCard scaleOnHover={1.01} rotateAmplitude={3} glareOpacity={0.12} className="w-full max-w-full min-w-0">
                {/* Backlight Glow based on active vertical */}
                <div
                  className={`absolute -inset-1.5 bg-gradient-to-r ${current.accentGlow} rounded-3xl blur-2xl opacity-40 animate-pulse-slow pointer-events-none transition-all duration-700`}
                />

                <div className="relative bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl w-full max-w-full min-w-0 flex flex-col">
                  {/* Top Bar with Live Indicator & Quick Controls */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-slate-800/80 bg-slate-900/95 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <CurrentIcon className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-extrabold text-white text-xs truncate">
                        {current.vertical}
                      </span>
                      {isCurrentVideo && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase hidden sm:inline-block">
                          1080p HD
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isCurrentVideo ? (
                        <>
                          <button
                            onClick={toggleMute}
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                              isMuted
                                ? "bg-amber-500/20 text-amber-300 border border-amber-400/40 hover:bg-amber-500/30 animate-pulse"
                                : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/30"
                            }`}
                          >
                            {isMuted ? (
                              <>
                                <VolumeX className="w-3.5 h-3.5" />
                                <span>Unmute</span>
                              </>
                            ) : (
                              <>
                                <Volume2 className="w-3.5 h-3.5" />
                                <span>Sound On</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={openCinemaModal}
                            title="Open Theater View"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setActiveTab(0)}
                            className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30 flex items-center gap-1 cursor-pointer"
                          >
                            <Film className="w-3 h-3" />
                            <span>Play Video</span>
                          </button>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping ml-1" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Main Visual Stage: Video Player or Image Carousel */}
                  <div className="relative aspect-video sm:h-80 md:h-[350px] w-full overflow-hidden bg-black select-none">
                    {isCurrentVideo ? (
                      /* HIGH DEFINITION VIDEO PLAYER */
                      <div className="relative w-full h-full group bg-black">
                        <video
                          ref={heroVideoRef}
                          autoPlay
                          muted={isMuted}
                          loop
                          playsInline
                          preload="auto"
                          onTimeUpdate={() => {
                            if (heroVideoRef.current) {
                              setCurrentTime(heroVideoRef.current.currentTime);
                              if (heroVideoRef.current.duration) {
                                setDuration(heroVideoRef.current.duration);
                              }
                            }
                          }}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={togglePlay}
                        >
                          <source src="/ai-viz-digital.mp4" type="video/mp4" />
                          <source src="/ai-viz-digital.mov" type="video/quicktime" />
                          <source src="/ai%20viz%20digital%20.mov" type="video/quicktime" />
                          Your browser does not support HTML5 video.
                        </video>

                        {/* Top Gradient for badge legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

                        {/* Floating Category Pill */}
                        <div className="absolute top-3 left-3 z-10 pointer-events-none">
                          <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-md ${current.badgeColor}`}>
                            {current.badge}
                          </span>
                        </div>

                        {/* Floating Key Metric Pill */}
                        <div className="absolute top-3 right-3 z-10 pointer-events-none">
                          <div className="bg-slate-950/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-right shadow-md">
                            <span className="text-xs sm:text-sm font-black text-amber-300 block leading-tight">
                              {current.keyMetric}
                            </span>
                          </div>
                        </div>

                        {/* Center Pause/Play Indicator */}
                        {!isPlaying && (
                          <div
                            onClick={togglePlay}
                            className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-2xs cursor-pointer z-20"
                          >
                            <div className="w-16 h-16 rounded-full bg-blue-600/95 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/30">
                              <Play className="w-7 h-7 fill-white ml-1" />
                            </div>
                          </div>
                        )}

                        {/* Floating Unmute Helper banner if user hasn't unmuted */}
                        {isMuted && !hasInteracted && (
                          <div
                            onClick={toggleMute}
                            className="absolute top-12 left-1/2 -translate-x-1/2 z-20 cursor-pointer bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-amber-400/40 px-3.5 py-1.5 rounded-full shadow-xl backdrop-blur-md text-[11px] font-bold flex items-center gap-2 animate-bounce transition-all hover:scale-105"
                          >
                            <VolumeX className="w-4 h-4 text-amber-400 shrink-0" />
                            <span className="whitespace-nowrap">Tap for Sound (54s Film) 🔊</span>
                          </div>
                        )}

                        {/* Bottom Glass Overlay Controls */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20 space-y-1.5">
                          {/* Progress Scrubber */}
                          <div
                            onClick={handleSeek}
                            className="w-full bg-white/20 hover:bg-white/30 h-1.5 hover:h-2 rounded-full cursor-pointer overflow-hidden transition-all relative"
                          >
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-100"
                              style={{ width: `${(currentTime / (duration || 54.34)) * 100}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between text-xs text-slate-300 pt-0.5">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={togglePlay}
                                className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                              >
                                {isPlaying ? (
                                  <Pause className="w-3 h-3 fill-white" />
                                ) : (
                                  <Play className="w-3 h-3 fill-white ml-0.5" />
                                )}
                              </button>

                              <button
                                onClick={handleRestart}
                                title="Replay"
                                className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                              >
                                <RotateCcw className="w-2.5 h-2.5" />
                              </button>

                              <span className="font-mono text-[10px] sm:text-[11px] text-slate-300">
                                {formatTime(currentTime)} / {formatTime(duration)}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-slate-400 hidden sm:inline">
                                AI VIZ Digital Official
                              </span>
                              <button
                                onClick={openCinemaModal}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-2 py-0.5 rounded border border-blue-400/20 transition-colors cursor-pointer"
                              >
                                <Maximize2 className="w-3 h-3" />
                                <span>Theater</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* IMAGE SHOWCASE FOR OTHER VERTICALS */
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={current.id}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.4 }}
                          className="relative w-full h-full"
                        >
                          {current.image && (
                            <Image
                              src={current.image}
                              alt={current.title}
                              fill
                              priority
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover"
                            />
                          )}

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

                          {/* Floating Back to Video Action */}
                          <button
                            onClick={() => setActiveTab(0)}
                            className="absolute top-12 left-3.5 z-10 bg-blue-600/90 hover:bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md transition-transform hover:scale-105 cursor-pointer"
                          >
                            <Film className="w-3 h-3" />
                            <span>Switch to Video</span>
                          </button>

                          {/* Bottom Overlay on Image: Title & Deliverable Chips */}
                          <div className="absolute bottom-3 left-3.5 right-3.5 z-10 space-y-2">
                            <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-md">
                              {current.title}
                            </h3>

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
                    )}
                  </div>

                  {/* Auto-rotation Progress Line (active for slides) */}
                  <div className="w-full bg-slate-800 h-1 overflow-hidden">
                    <motion.div
                      key={activeTab}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused || activeTab === 0 ? "100%" : "100%" }}
                      transition={{ duration: activeTab === 0 ? 0.1 : 6.5, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400"
                    />
                  </div>

                  {/* Interactive Visual Thumbnail Strip - Directly click to see Video or any Vertical */}
                  <div className="p-3 bg-slate-950 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400 pb-2 px-1">
                      <span>Interactive Showcase Gallery</span>
                      <span className="text-blue-400">Click to switch</span>
                    </div>

                    <div className="grid grid-cols-7 gap-1 w-full">
                      {heroShowcases.map((tab) => {
                        const TabIcon = tab.icon;
                        const isCurrent = activeTab === tab.id;
                        const isVideoTab = tab.type === "video";

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
                            <div className="relative w-full h-8 rounded-lg overflow-hidden shrink-0 bg-slate-800 flex items-center justify-center">
                              {isVideoTab ? (
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                  <Film className="w-4 h-4 text-white drop-shadow animate-pulse" />
                                </div>
                              ) : tab.image ? (
                                <>
                                  <Image
                                    src={tab.image}
                                    alt={tab.shortLabel}
                                    fill
                                    sizes="50px"
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-slate-950/30" />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <TabIcon className="w-3 h-3 text-white drop-shadow" />
                                  </div>
                                </>
                              ) : (
                                <TabIcon className="w-3.5 h-3.5 text-white" />
                              )}
                            </div>
                            <span
                              className={`text-[8.5px] font-bold truncate w-full pt-1 block leading-tight ${
                                isVideoTab && isCurrent ? "text-cyan-300" : "text-slate-200"
                              }`}
                            >
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

      {/* FULLSCREEN THEATER CINEMA MODAL */}
      <AnimatePresence>
        {isCinemaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-3 sm:p-6"
            onClick={closeCinemaModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-white">
                      AI VIZ Digital — Official Brand Film (1080p Full HD)
                    </h3>
                    <p className="text-[10px] text-slate-400 hidden sm:block">
                      North India's 360° Commercial Growth, Turnkey Hospitality & AI Systems
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeCinemaModal}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cinema Video */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={cinemaVideoRef}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="/ai-viz-digital.mp4" type="video/mp4" />
                  <source src="/ai-viz-digital.mov" type="video/quicktime" />
                  <source src="/ai%20viz%20digital%20.mov" type="video/quicktime" />
                </video>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-bold text-slate-200">
                    Ready to scale your business with VIZ Digital?
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Turnkey Restaurants • Performance Ads • Franchise Scaling • Robotics Labs
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20watched%20your%20brand%20video%20and%20want%20to%20consult."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <a
                    href="tel:9876687109"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
