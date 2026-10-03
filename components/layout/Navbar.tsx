"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Phone,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ChevronDown,
  TrendingUp,
  UtensilsCrossed,
  Store,
  Cpu,
  Bot,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allServices = [
    {
      name: "Digital Marketing",
      href: "/services#digital-marketing",
      desc: "Meta & Google Ads, Local SEO, High-ROI Lead Funnels",
      icon: TrendingUp,
      color: "text-blue-600 bg-blue-50",
    },
    {
      name: "Restaurant Setup",
      href: "/services#restaurant-setup",
      desc: "Turnkey 60-90 Day Launch, Kitchen Zoning & Chef Hiring",
      icon: UtensilsCrossed,
      color: "text-orange-600 bg-orange-50",
    },
    {
      name: "Franchise Expansion",
      href: "/services#franchise-consultancy",
      desc: "10+ Multi-City Outlets, Investor Pitch & Legal SOPs",
      icon: Store,
      color: "text-amber-600 bg-amber-50",
    },
    {
      name: "Brand Management",
      href: "/services#brand-management",
      desc: "Luxury Identity, 3D Store Interiors & Launch Activations",
      icon: Sparkles,
      color: "text-purple-600 bg-purple-50",
    },
    {
      name: "IT & Cloud Systems",
      href: "/services#information-technology",
      desc: "Cloud POS, Swiggy/Zomato Sync & Multi-Branch ERP",
      icon: Cpu,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      name: "AI & Robotics Academy",
      href: "/services#ai-classes",
      desc: "Practical GenAI & Hands-On Take-Home Hardware Labs",
      icon: Bot,
      color: "text-cyan-600 bg-cyan-50",
    },
  ];

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Clients", href: "/clients" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "h-16 sm:h-[72px] bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "h-16 sm:h-[76px] bg-white/80 backdrop-blur-sm border-b border-slate-100/70"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 h-full flex items-center justify-between max-w-7xl">
        {/* Brand Logo - Settled, Balanced & Professional */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 transition-opacity hover:opacity-90"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-xs border border-slate-200/90 group-hover:scale-105 transition-transform duration-300 bg-[#1e232c] shrink-0">
            <Image
              src="/viz_logo.png"
              alt="VIZ Digital Logo"
              fill
              sizes="(max-width: 640px) 36px, 40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
                VIZ <span className="text-blue-600">Digital</span>
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
              Consulting • Academy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Spacious & Balanced with All Services Dropdown */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-xs">
          <Link
            href="/"
            className={`text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 ${
              pathname === "/"
                ? "bg-white text-blue-600 shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
            }`}
          >
            Home
          </Link>

          {/* Interactive Services Dropdown Covering All 6 Verticals */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                pathname.startsWith("/services") || servicesOpen
                  ? "bg-white text-blue-600 shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
              }`}
            >
              <span>Services & Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>

            {/* Comprehensive Services Dropdown Panel */}
            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What We Provide (All 6 Pillars)
                  </span>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <span>View Roadmap</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {allServices.map((srv) => {
                    const Icon = srv.icon;
                    return (
                      <Link
                        key={srv.name}
                        href={srv.href}
                        onClick={() => setServicesOpen(false)}
                        className="p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start gap-3 group"
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${srv.color} group-hover:scale-105 transition-transform`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {srv.name}
                          </p>
                          <p className="text-[10px] text-slate-500 line-clamp-1 leading-snug">
                            {srv.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/clients"
            className={`text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 ${
              pathname === "/clients"
                ? "bg-white text-blue-600 shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
            }`}
          >
            Clients
          </Link>

          <Link
            href="/about"
            className={`text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 ${
              pathname === "/about"
                ? "bg-white text-blue-600 shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 ${
              pathname === "/contact"
                ? "bg-white text-blue-600 shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Right CTA Area - Settled & Clean */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          <a
            href="tel:9876687109"
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors"
            title="Call VIZ Digital directly"
          >
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="hidden xl:inline">98766 87109</span>
          </a>

          <Link href="/contact">
            <Button className="rounded-full px-5 py-2 text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:scale-[1.02] flex items-center gap-1.5 h-9 sm:h-10">
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger & Call Action */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:9876687109"
            className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors shrink-0"
            aria-label="Call VIZ Digital"
          >
            <Phone className="w-4 h-4" />
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 shrink-0"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-[360px] bg-white p-5 sm:p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Mobile Drawer Header with Logo */}
                <div className="flex items-center gap-3 pb-5 mb-4 border-b border-slate-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-xs border border-slate-200 bg-[#1e232c] shrink-0">
                    <Image
                      src="/viz_logo.png"
                      alt="VIZ Digital"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
                      VIZ <span className="text-blue-600">Digital</span>
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase mt-0.5">
                      Zirakpur, Punjab
                    </span>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        pathname === "/"
                          ? "bg-blue-50 text-blue-600 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>Home</span>
                    </Link>
                  </SheetClose>

                  {/* All 6 Core Services Explicitly Listed in Mobile Drawer */}
                  <div className="pt-2 pb-1">
                    <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      All What We Provide
                    </p>
                    <div className="space-y-1 pl-1">
                      {allServices.map((srv) => {
                        const Icon = srv.icon;
                        return (
                          <SheetClose asChild key={srv.name}>
                            <Link
                              href={srv.href}
                              className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                            >
                              <div
                                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${srv.color}`}
                              >
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span>{srv.name}</span>
                            </Link>
                          </SheetClose>
                        );
                      })}
                    </div>
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/clients"
                      className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        pathname === "/clients"
                          ? "bg-blue-50 text-blue-600 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>Clients & Case Studies</span>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        pathname === "/about"
                          ? "bg-blue-50 text-blue-600 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>About Us</span>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        pathname === "/contact"
                          ? "bg-blue-50 text-blue-600 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>Contact Us</span>
                    </Link>
                  </SheetClose>
                </nav>
              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="space-y-3 pt-6 border-t border-slate-100 mt-6">
                <div className="bg-slate-50 p-3.5 rounded-2xl space-y-1.5 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Direct Advisory Desk
                  </p>
                  <a
                    href="tel:9876687109"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>98766 87109</span>
                  </a>
                  <p className="text-xs text-slate-500 truncate">
                    vizdigitalofficial@gmail.com
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:9876687109"
                    className="flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2.5 rounded-xl text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20inquire%20about%20your%20consulting%20services%20and%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold py-2.5 rounded-xl text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <SheetClose asChild>
                  <Link href="/contact" className="w-full block">
                    <Button className="w-full rounded-xl py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md text-sm">
                      Get Free Consultation
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
