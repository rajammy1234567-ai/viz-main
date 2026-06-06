"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ArrowRight,
  Globe,
  Target,
  Check,
  Star,
  Code,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full bg-navy-900 overflow-hidden flex items-center pt-20 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-950 z-0" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />

      {/* Animated Particles (CSS Based for lightness) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 max-w-2xl font-lastica">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-brand-cyan border-brand-cyan/40 bg-brand-cyan/10 text-xs font-bold tracking-wider uppercase mb-7 backdrop-blur-sm"
            >
              YOUR ALL-ONE GROWTH PARTNER
            </Badge>
            <h1 className=" text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan">
                ECCYSTEMS
              </span>{" "}
              <br />
              BUILT FOR GROWTH
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mb-9">
              From custom web and development to full-scale social management.
              We handle to the technical heavy lifting so you can focus on your
              business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-brand-cyan to-brand-purple hover:from-brand-purple hover:to-brand-cyan shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all hover:scale-105 border-0"
            >
              <a
                href="/portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
               See PDF
              </a>
            </Button>

            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
            >
              <a
                href="/portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
              </a>
            </Button> */}

          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-400"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-purple" />
              <span>150+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-brand-cyan fill-brand-cyan" />
              <span>4.9 Google Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Right Visual (Floating Cards) */}
        <div className="relative h-[600px] hidden lg:block perspective-container top-[-58px]">
          {/* Card 1: Brand */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: -2, zIndex: 50 }}
            className="absolute top-10 left-10 w-72 glass-card p-6 rounded-3xl z-20 border-t border-l border-white/20 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center mb-4 shadow-lg shadow-brand-cyan/30">
              <Code className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Website Development
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Start to End Solutions
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-slate-300 bg-white/5 p-2 rounded-lg">
                <span>Design & Development</span>
                <Check className="w-3 h-3 text-brand-cyan" />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300 bg-white/5 p-2 rounded-lg">
                <span>Hosting & Domain</span>
                <Check className="w-3 h-3 text-brand-cyan" />
              </div>
            </div>
            <Badge className="absolute -top-3 -right-3 bg-brand-purple hover:bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/40">
              Turnkey Build
            </Badge>
          </motion.div>

          {/* Card 2: Web */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 160, y: 140, scale: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute top-20 right-10 w-72 glass-card p-6 rounded-3xl z-30 border-t border-l border-white/20 shadow-2xl bg-navy-900/40"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center mb-4 shadow-lg shadow-brand-purple/30">
              <Smartphone className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              App Development
            </h3>
            <p className="text-slate-400 text-sm mb-4">iOS & Android</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-slate-300 bg-white/5 p-2 rounded-lg">
                <span>Custom App Builds</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300 bg-white/5 p-2 rounded-lg">
                <span>Sleek Mobile UI</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Growth */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 10 }}
            animate={{ opacity: 1, y: 320, x: 60, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute bottom-[13.5rem] left-[-2rem] w-72 glass-card p-6 rounded-3xl z-40 border-t border-l border-white/20 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center mb-4 shadow-lg shadow-brand-cyan/30">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Digital Management
            </h3>
            <p className="text-slate-400 text-sm mb-4">Handling & Growth</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-slate-300 bg-white/5 p-2 rounded-lg">
                <span>Social Account Pages</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300 bg-white/5 p-2 rounded-lg">
                <span>Strategic Scaling</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
