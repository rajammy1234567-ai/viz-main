"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "What types of businesses does VIZ Digital consult for?",
    answer:
      "We consult for entrepreneurs, family-owned enterprises, retail brands, healthcare centers, and restaurant owners across Punjab and North India. Our core specializations include Turnkey Restaurant Setup, Franchise Network Scaling, Digital Marketing Funnels, Brand Management & Store Identity, and Enterprise IT Infrastructure.",
  },
  {
    question: "How does VIZ Digital assist 1,000+ Customer Families?",
    answer:
      "Many of our clients are multi-generational family businesses or emerging entrepreneurs. We assist them with hands-on commercial strategy, from feasibility studies and kitchen zoning to franchise legal structuring, POS software automation, and local customer acquisition.",
  },
  {
    question: "What is included in Turnkey Restaurant Set-Up Consultancy?",
    answer:
      "We manage the entire lifecycle: location scouting & footfall evaluation, commercial kitchen equipment sourcing, chef hiring & recipe standardization SOPs, POS/inventory tech installation, brand packaging, and hyper-local grand launch marketing.",
  },
  {
    question: "How do you help regional brands scale into multi-outlet franchises?",
    answer:
      "We design complete franchise operating blueprints: unit economics modeling, legal franchisee agreements, investor prospectus development, franchisee onboarding SOPs, and marketing funnels to recruit qualified franchise investors.",
  },
  {
    question: "Who can join the AI and Robotics classes, and do I need prior coding experience?",
    answer:
      "Anyone! We offer beginner-friendly tracks for school students (Ages 8-15) focusing on STEM logic, block coding, and mechanical assemblies, as well as career-focused tracks for college students, digital marketers, and business owners. No prior coding background is required for our Generative AI, Prompt Engineering, or Junior STEM modules.",
  },
  {
    question: "Is the physical hardware kit included for Robotics students to take home?",
    answer:
      "Yes! Every student enrolled in our practical Robotics & IoT courses receives their own complete hardware kit (including Arduino/ESP32 microcontrollers, motor drivers, Bluetooth modules, sensor arrays, and wiring) to keep and experiment with at home.",
  },
  {
    question: "Can I attend a free demo class before enrolling?",
    answer:
      "Absolutely. We host free 1-hour interactive weekend demo sessions at our Zirakpur innovation lab where students and parents can test the robots, try generative AI tools, and meet the mentors. You can book your demo pass on WhatsApp at 98766 87109.",
  },
  {
    question: "Where is VIZ Digital located and can we meet in person?",
    answer:
      "Our headquarters and physical lab is located at Motiaz Royal Business Park on the Ambala-Chandigarh Expressway in Zirakpur, Punjab. We welcome business founders, parents, and students for in-person strategy sessions and lab visits by prior appointment.",
  },
  {
    question: "How do we get started with a consultation or course enrollment?",
    answer:
      "You can schedule a free discovery or demo session through our website, call us directly at 98766 87109, or message our advisory desk on WhatsApp. We will help you select the exact consulting roadmap or learning track that fits your goals.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 relative border-t border-slate-200/80 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Got Questions?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500">
                Questions
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Find transparent answers about our business consulting process, restaurant setups, franchise architecture, and partnership engagements.
            </p>

            {/* Advisory Direct Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Have a specific business question?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Speak directly with our senior strategy consultant in Zirakpur to discuss tailored solutions for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full rounded-xl py-5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20">
                    Book Discovery Call
                  </Button>
                </Link>
                <a
                  href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20have%20a%20question%20about%20your%20consulting%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-xl py-5 text-xs font-bold border-slate-300 text-slate-800 hover:bg-slate-100 flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Us</span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft"
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-100 last:border-b-0 py-1"
                >
                  <AccordionTrigger className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 hover:no-underline py-4 text-left transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm sm:text-base leading-relaxed pb-4 pt-1">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
