"use client";

import { motion } from "framer-motion";
import {
  Search,
  Compass,
  Hammer,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpotlightCard, ShinyText, BlurText } from "@/components/animations";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Market Feasibility",
    badge: "Foundation & Clarity",
    description:
      "We analyze your business vision, unit economics, target demographics, and commercial competition across Tricity and North India.",
    highlights: [
      "Location scouting & demographic footfall analysis",
      "Financial budgeting & ROI runway modeling",
      "Business viability & compliance blueprint",
    ],
    icon: Compass,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    step: "02",
    title: "Brand Architecture & Identity",
    badge: "Visual & Emotional Pull",
    description:
      "Crafting an unforgettable brand identity, interior design language, store packaging, and high-converting customer touchpoints.",
    highlights: [
      "Trademark, brand voice & visual identity system",
      "Interior customer zoning & layout concepts",
      "Store launch collateral & VIP customer funnels",
    ],
    icon: Sparkles,
    accent: "from-indigo-600 to-purple-600",
  },
  {
    step: "03",
    title: "Turnkey Operational Setup",
    badge: "Hands-on Execution",
    description:
      "We build the physical and digital machinery: vendor procurement, kitchen equipment zoning, staff SOPs, and enterprise cloud POS tech.",
    highlights: [
      "Kitchen equipment sourcing & vendor price negotiations",
      "Staff hiring protocols, training & service SOPs",
      "Cloud POS, inventory tracking & billing systems",
    ],
    icon: Hammer,
    accent: "from-purple-600 to-orange-600",
  },
  {
    step: "04",
    title: "Launch & Franchise Scaling",
    badge: "Unstoppable Growth",
    description:
      "High-impact grand opening campaigns, hyper-local customer acquisition, and structured franchise model architecture for multi-city expansion.",
    highlights: [
      "Hyper-local performance marketing campaigns",
      "Franchise prospectus & legal agreement design",
      "Ongoing KPI audits & store profitability reviews",
    ],
    icon: Rocket,
    accent: "from-orange-600 to-rose-600",
  },
];

export function ConsultingProcess() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <ShinyText
              text="Our Proven Methodology"
              color="#1e3a8a"
              shineColor="#f97316"
              speed={3}
              className="text-xs font-bold tracking-wider uppercase"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            <BlurText
              text="How We Transform Ideas Into"
              delay={60}
              className="text-slate-900 block"
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 block mt-1">
              Commercial Empires
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From Day 1 discovery to opening day crowds and multi-unit franchise expansion, our 4-stage consulting roadmap eliminates costly mistakes.
          </p>
        </div>

        {/* 4-Step Process Grid with SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(37, 99, 235, 0.1)"
                  className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-5">
                    {/* Step number and icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60 inline-block mb-2">
                        {step.badge}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-3 border-t border-slate-100">
                      {step.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Phase {step.step} Milestone</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Discovery Session CTA Bar */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50 p-5 sm:p-8 rounded-3xl border border-blue-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6 shadow-soft">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Ready to start at Step 01?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Schedule an obligation-free 30-minute commercial roadmap session with our consultants in Zirakpur.
            </p>
          </div>

          <Link href="/contact" className="shrink-0 w-full sm:w-auto">
            <Button className="w-full sm:w-auto rounded-xl px-7 py-5 text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20">
              <span>Book Strategy Session</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ConsultingProcess;
