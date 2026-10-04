"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle2,
  Star,
  MapPin,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Filter,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/animations";

export interface ClientItem {
  id: string;
  name: string;
  category: "fnb" | "retail" | "healthcare" | "tech" | "franchise";
  categoryLabel: string;
  founder: string;
  location: string;
  scope: string;
  impact: string;
  rating: number;
  highlight: string;
  icon: any;
  color: string;
  image?: string;
}

export const clientsData: ClientItem[] = [
  {
    id: "spice-table",
    name: "The Spice Table Bistro",
    category: "fnb",
    categoryLabel: "Restaurant & Dining",
    founder: "The Sharma Family",
    location: "Zirakpur & Mohali",
    scope: "Turnkey Restaurant Setup, Kitchen Zoning & SOPs",
    impact: "3 Outlets in 14 Months",
    rating: 5,
    highlight: "Crowd favorite dining brand with 4.9★ rating",
    icon: UtensilsCrossed,
    color: "bg-orange-50 text-orange-600 border-orange-200",
    image: "/images/clients/restaurant_client.jpg",
  },
  {
    id: "golden-thread",
    name: "The Golden Thread",
    category: "retail",
    categoryLabel: "Retail & Apparel",
    founder: "Aman & Simran Preet",
    location: "Chandigarh Sec 17",
    scope: "Brand Identity, Omnichannel Retail & Store Launch",
    impact: "+320% Footfall Surge",
    rating: 5,
    highlight: "Luxury lifestyle flagship store & e-boutique",
    icon: ShoppingBag,
    color: "bg-amber-50 text-amber-700 border-amber-200",
    image: "/images/clients/retail_client.jpg",
  },
  {
    id: "sri-diagnostics",
    name: "Sri Diagnostics Centre",
    category: "healthcare",
    categoryLabel: "Healthcare & Diagnostics",
    founder: "Dr. Sethi Family",
    location: "Panchkula, Haryana",
    scope: "IT Infrastructure, Booking App & Regional Branding",
    impact: "40K+ Patients / Year",
    rating: 5,
    highlight: "Tricity's top rated wellness diagnostics center",
    icon: HeartPulse,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    image: "/images/clients/healthcare_client.jpg",
  },
  {
    id: "kulcha-express",
    name: "Amritsari Kulcha Express",
    category: "franchise",
    categoryLabel: "Franchise Network",
    founder: "Harpreet Singh & Sons",
    location: "14 Locations Across Punjab",
    scope: "Franchise SOP Architecture, Investor Onboarding & Tech",
    impact: "14 Scaled Franchise Stores",
    rating: 5,
    highlight: "Rapidly expanding quick service restaurant network",
    icon: Store,
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    id: "kaffea-roasters",
    name: "Kaffea Specialty Roasters",
    category: "fnb",
    categoryLabel: "Specialty Cafe",
    founder: "Kabir Malhotra",
    location: "Chandigarh Sector 35",
    scope: "Cafe Concept, Interior Experience & Digital Loyalty",
    impact: "2.8x Daily Cup Sales",
    rating: 5,
    highlight: "Artisanal coffee house with young founder leadership",
    icon: Coffee,
    color: "bg-amber-50 text-yellow-800 border-yellow-200",
  },
  {
    id: "urban-glow",
    name: "Urban Glow Aesthetics",
    category: "healthcare",
    categoryLabel: "Aesthetics & Wellness",
    founder: "Pooja & Rohan Verma",
    location: "Mohali CP67 Mall",
    scope: "Clinic Interior Planning, High-Ticket Funnels & CRM",
    impact: "+210% Consultation Bookings",
    rating: 5,
    highlight: "Premium cosmetology & skin aesthetic clinic",
    icon: Sparkles,
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    id: "apex-cloud",
    name: "Apex EduCloud Technologies",
    category: "tech",
    categoryLabel: "Information Technology",
    founder: "Rajesh Gupta",
    location: "Mohali IT Park",
    scope: "Enterprise SaaS Consulting & Cloud Architecture",
    impact: "99.98% System Uptime",
    rating: 5,
    highlight: "Powering 50+ institutes across North India",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    id: "punjab-logistics",
    name: "Punjab Cold Logistics",
    category: "tech",
    categoryLabel: "Enterprise Infrastructure",
    founder: "Dhillon Family",
    location: "Ludhiana & Zirakpur",
    scope: "Fleet Tracking Software, Cold Chain Operations Consulting",
    impact: "38% Route Efficiency Gain",
    rating: 5,
    highlight: "Statewide commercial cold chain fleet management",
    icon: Truck,
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
  {
    id: "zira-organics",
    name: "Zira Green Organics",
    category: "retail",
    categoryLabel: "Retail Superstore",
    founder: "Gurmeet Bawa",
    location: "VIP Road, Zirakpur",
    scope: "Store Layout, Inventory POS Integration & Brand Launch",
    impact: "5,000+ Active Shopper Base",
    rating: 5,
    highlight: "Premier farm-to-table organic retail mart",
    icon: Leaf,
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "elevate-fitness",
    name: "Elevate Gym & Wellness",
    category: "franchise",
    categoryLabel: "Fitness Franchise",
    founder: "Sunny & Mehak Deol",
    location: "Chandigarh & Panchkula",
    scope: "Franchise Licensing, Membership Funnels & Tech Stack",
    impact: "1,200+ Active Members",
    rating: 5,
    highlight: "24/7 smart luxury fitness center franchise",
    icon: Dumbbell,
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "royal-haveli",
    name: "Royal Haveli Dining",
    category: "fnb",
    categoryLabel: "Heritage Dining",
    founder: "Chahal Heritage Group",
    location: "NH-152 Highway, Zirakpur",
    scope: "Grand Opening Launch, Highway Signage & VIP Banquet Ops",
    impact: "Full Weekend Bookings",
    rating: 5,
    highlight: "Iconic 350-seater traditional Punjabi dining haveli",
    icon: Building2,
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    id: "nexus-tech",
    name: "Nexus Cloud Systems",
    category: "tech",
    categoryLabel: "IT & Digital Solutions",
    founder: "Aditya Khurana",
    location: "Chandigarh Tech Zone",
    scope: "Workflow Automation, ERP Consulting & Web Presence",
    impact: "60% Ops Cost Reduction",
    rating: 5,
    highlight: "Custom enterprise management suite for businesses",
    icon: Cpu,
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
];

export function ClientsRoster() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { key: "all", label: "All Clients (1,000+)" },
    { key: "fnb", label: "Food & Restaurants" },
    { key: "retail", label: "Retail & Lifestyle" },
    { key: "healthcare", label: "Healthcare & Wellness" },
    { key: "tech", label: "Tech & IT Solutions" },
    { key: "franchise", label: "Franchise Networks" },
  ];

  const filtered = clientsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-soft">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                selectedCategory === cat.key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search client, brand or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50"
          />
        </div>
      </div>

      {/* Grid of Realistic Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((client) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(37, 99, 235, 0.09)"
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    {/* Header: Client Photo / Logo Icon & Rating */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {client.image ? (
                          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0 group-hover:scale-105 transition-transform bg-slate-100">
                            <Image
                              src={client.image}
                              alt={client.founder}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className={`w-13 h-13 p-3 rounded-2xl border flex items-center justify-center ${client.color} group-hover:scale-105 transition-transform`}
                          >
                            <Icon className="w-6 h-6 stroke-[1.8]" />
                          </div>
                        )}
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80">
                            {client.categoryLabel}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 text-amber-900 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Brand & Founder Names */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified Client Partner</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Founder: <span className="text-slate-800 font-bold">{client.founder}</span>
                      </p>
                    </div>

                    {/* Location Tag */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      <span>{client.location}</span>
                    </div>

                    {/* Consulting Scope */}
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Consulting Provided
                      </span>
                      <p className="text-xs font-medium text-slate-700 leading-snug">
                        {client.scope}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Impact Metric */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                        Growth Impact
                      </span>
                      <span className="text-sm font-extrabold text-slate-900">
                        {client.impact}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Verified</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-base text-slate-600 font-semibold">
            No client partners found matching "{searchQuery}".
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 rounded-xl text-xs font-bold"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
