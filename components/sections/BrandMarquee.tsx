"use client";

import {
  UtensilsCrossed,
  Sparkles,
  HeartPulse,
  ShoppingBag,
  Cpu,
  Truck,
  Coffee,
  GraduationCap,
  Dumbbell,
  Leaf,
  Store,
  Building2,
  Bot,
  Brain,
  TrendingUp,
} from "lucide-react";

export function BrandMarquee() {
  const brands = [
    { name: "Meta & Google Ads", category: "Performance Marketing", icon: TrendingUp, color: "text-blue-400 bg-blue-950 border border-blue-500/30" },
    { name: "GenAI & Prompt Labs", category: "OpenAI & Claude Mastery", icon: Brain, color: "text-purple-400 bg-purple-950 border border-purple-500/30" },
    { name: "Arduino & IoT Lab", category: "Hands-on Robotics Kits", icon: Bot, color: "text-cyan-400 bg-cyan-950 border border-cyan-500/30" },
    { name: "The Spice Table Cafe", category: "Dining & Bistro", icon: UtensilsCrossed, color: "text-orange-600 bg-orange-50" },
    { name: "The Golden Thread", category: "Luxury Retail", icon: ShoppingBag, color: "text-amber-600 bg-amber-50" },
    { name: "Sri Diagnostics Centre", category: "Healthcare IT", icon: HeartPulse, color: "text-emerald-600 bg-emerald-50" },
    { name: "Amritsari Kulcha Express", category: "14 Outlets QSR", icon: Store, color: "text-red-600 bg-red-50" },
    { name: "Urban Glow Aesthetics", category: "Wellness Salon", icon: Sparkles, color: "text-purple-600 bg-purple-50" },
    { name: "Kaffea Specialty Roasters", category: "Cafe Franchise", icon: Coffee, color: "text-yellow-700 bg-yellow-50" },
    { name: "Apex EduCloud Solutions", category: "Edutech Platform", icon: GraduationCap, color: "text-blue-600 bg-blue-50" },
    { name: "Elevate Gym & Fitness", category: "Health & Fitness", icon: Dumbbell, color: "text-cyan-600 bg-cyan-50" },
    { name: "Punjab Cold Logistics", category: "Enterprise Supply", icon: Truck, color: "text-indigo-600 bg-indigo-50" },
    { name: "Zira Organics Superstore", category: "Grocery Network", icon: Leaf, color: "text-green-600 bg-green-50" },
    { name: "Nexus Cloud Systems", category: "Enterprise SaaS", icon: Cpu, color: "text-sky-600 bg-sky-50" },
    { name: "Royal Haveli Fine Dining", category: "Hospitality Group", icon: Building2, color: "text-rose-600 bg-rose-50" },
  ];

  return (
    <div className="py-10 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
      {/* Subtle Glow Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 mb-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Powering 1,000+ Thriving Brands, Performance Marketing Funnels & Next-Gen AI Innovators
        </p>
      </div>

      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {[...brands, ...brands].map((brand, idx) => {
          const Icon = brand.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-sm shadow-sm hover:border-blue-500/50 hover:bg-slate-800 transition-all shrink-0 cursor-default"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${brand.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-white block whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                  {brand.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
