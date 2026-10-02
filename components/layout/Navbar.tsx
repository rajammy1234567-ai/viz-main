"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "h-16 sm:h-20 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "h-16 sm:h-20 bg-white/90 backdrop-blur-sm border-b border-slate-100/60"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 h-full flex items-center justify-between max-w-7xl">
        {/* Brand Logo with exact circular transparent PNG */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-sm border border-slate-200/80 group-hover:scale-105 transition-transform duration-300 bg-[#1e232c] shrink-0">
            <Image
              src="/viz_logo.png"
              alt="VIZ Digital Logo"
              fill
              sizes="(max-width: 640px) 36px, 44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
              VIZ <span className="text-blue-600">Digital</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
              Consulting & Growth
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  isActive
                    ? "text-blue-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full"
                    : "text-slate-600 hover:text-blue-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA Area */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          <a
            href="tel:9876687109"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>98766 87109</span>
          </a>

          <Link href="/contact">
            <Button className="rounded-xl px-5 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2">
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
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
              className="w-[85vw] max-w-[340px] bg-white p-5 sm:p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Mobile Drawer Header with Logo */}
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm border border-slate-200 bg-[#1e232c] shrink-0">
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
                    <span className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">
                      Zirakpur, Punjab
                    </span>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <SheetClose asChild key={link.name}>
                        <Link
                          href={link.href}
                          className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                            isActive
                              ? "bg-blue-50 text-blue-600 font-bold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          )}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="space-y-3 pt-6 border-t border-slate-100 mt-6">
                <div className="bg-slate-50 p-3.5 rounded-2xl space-y-1.5 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Direct Contact
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
                    href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20inquire%20about%20your%20consulting%20services."
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
