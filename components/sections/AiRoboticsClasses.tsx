"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Cpu,
  Sparkles,
  TrendingUp,
  Brain,
  Rocket,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  Layers,
  Phone,
  MessageCircle,
  ArrowRight,
  Boxes,
  Code2,
  Wrench,
  Zap,
  Laptop,
  GraduationCap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard, ShinyText } from "@/components/animations";

type Category = "all" | "ai" | "robotics" | "marketing";

interface Course {
  id: string;
  category: "ai" | "robotics" | "marketing";
  title: string;
  image: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  icon: typeof Bot;
  level: string;
  duration: string;
  schedule: string;
  description: string;
  highlights: string[];
  tools: string[];
  certificate: string;
  hardwareKit?: boolean;
}

const coursesData: Course[] = [
  {
    id: "gen-ai-masterclass",
    category: "ai",
    title: "Generative AI & Prompt Engineering Masterclass",
    image: "/images/services/ai-classes.jpg",
    badge: "🔥 Most Popular • High Demand",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    accentColor: "from-purple-600 to-indigo-600",
    icon: Sparkles,
    level: "All Levels (No Coding Needed)",
    duration: "6 Weeks",
    schedule: "Weekend & Weekday Batches",
    description:
      "Master generative artificial intelligence tools to supercharge business productivity, creative content creation, marketing workflows, and automation.",
    highlights: [
      "Master ChatGPT-4o, Claude 3.5 Sonnet, Google Gemini & DeepSeek",
      "AI Image & Video creation with Midjourney v6, Runway & Leonardo",
      "Advanced prompt engineering architectures (Chain-of-Thought, Persona)",
      "Build custom no-code AI Agents & customer support chatbots",
      "Automate repetitive daily workflows using Zapier & Make.com AI",
    ],
    tools: ["ChatGPT-4o", "Claude 3.5", "Midjourney", "Make.com", "LangChain"],
    certificate: "Certified Generative AI Specialist",
    hardwareKit: false,
  },
  {
    id: "hands-on-robotics-iot",
    category: "robotics",
    title: "Hands-on Robotics & IoT Engineering Lab",
    image: "/images/services/robotics-classes.jpg",
    badge: "⚡ Hardware Kit Included • Practical",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    accentColor: "from-cyan-600 to-blue-600",
    icon: Bot,
    level: "Beginner to Intermediate",
    duration: "8 Weeks",
    schedule: "Physical Lab at Zirakpur Center",
    description:
      "A complete hands-on hardware laboratory course. Students assemble physical circuits, code microcontrollers, and build autonomous robots from scratch.",
    highlights: [
      "Complete Take-Home Arduino & ESP32 Hardware Kit provided to every student",
      "Build Obstacle-Avoiding Robots, Bluetooth RC Cars & Line-Follower Bots",
      "Learn C/C++ microcontroller programming & breadboard circuit wiring",
      "Smart Home IoT: Control relays, lights, and sensors via smartphone app",
      "Sensor mastery: Ultrasonic, IR, Gyroscope, DHT11, OLED screens & Servos",
    ],
    tools: ["Arduino Uno", "ESP32 Wi-Fi", "C/C++", "Blynk IoT", "Sensors Kit"],
    certificate: "Certified Robotics & IoT Developer",
    hardwareKit: true,
  },
  {
    id: "applied-ai-python",
    category: "ai",
    title: "Applied AI & Machine Learning with Python",
    image: "/images/services/ai-classes.jpg",
    badge: "🚀 Career Bootcamp • Coding",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    accentColor: "from-blue-600 to-indigo-600",
    icon: Brain,
    level: "Intermediate (Basic Logic Helpful)",
    duration: "12 Weeks",
    schedule: "Interactive Live + Offline Lab",
    description:
      "Deep dive into real-world artificial intelligence. Code machine learning algorithms, build computer vision models, and train predictive AI systems with Python.",
    highlights: [
      "Python programming for Data Science: NumPy, Pandas & Matplotlib",
      "Supervised & Unsupervised Machine Learning algorithms with Scikit-learn",
      "Neural Networks & Deep Learning fundamentals with PyTorch",
      "Computer Vision models for object detection & face recognition",
      "Deploy AI applications to cloud APIs & build portfolio web apps",
    ],
    tools: ["Python 3", "PyTorch", "Scikit-Learn", "OpenCV", "Jupyter"],
    certificate: "Applied AI & ML Developer Certificate",
    hardwareKit: false,
  },
  {
    id: "stem-junior-robotics",
    category: "robotics",
    title: "STEM Junior Robotics & Coding Lab (Ages 8-15)",
    image: "/images/services/robotics-classes.jpg",
    badge: "🌟 Kids & Teens Special",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    accentColor: "from-amber-500 to-orange-600",
    icon: Boxes,
    level: "School Students (Ages 8-15)",
    duration: "6 Weeks",
    schedule: "After-School & Weekend Sessions",
    description:
      "Ignite curiosity and critical thinking! Young minds learn visual block coding, mechanical gears, motors, and build fun interactive motorized robots.",
    highlights: [
      "Visual block-based drag-and-drop coding using MIT Scratch & Blockly",
      "Assemble 8+ working mechanical models & robotic creatures",
      "Safe electronic circuits with LEDs, buzzers, switches, and motors",
      "Develop problem-solving, logical reasoning & spatial design skills",
      "Fun end-of-course Robot Race & Mini Hackathon with medals & awards",
    ],
    tools: ["Scratch 3.0", "STEM Robot Kit", "Micro:bit", "Motor Modules"],
    certificate: "Junior Robotics Innovator Badge & Certificate",
    hardwareKit: true,
  },
  {
    id: "advanced-robotics-drone",
    category: "robotics",
    title: "Advanced Robotics, Raspberry Pi & Drone Tech",
    image: "/images/services/robotics-classes.jpg",
    badge: "🛸 Next-Gen Tech • Limited Seats",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentColor: "from-emerald-600 to-teal-600",
    icon: Wrench,
    level: "Advanced (College/Grads/Techies)",
    duration: "10 Weeks",
    schedule: "Physical Lab & Field Testing",
    description:
      "For engineering students and makers: Linux-based robotics, camera-guided autonomous rovers, ROS architecture, and quadcopter drone flight mechanics.",
    highlights: [
      "Raspberry Pi 4/5 hardware setup, Linux terminal & Python GPIO control",
      "OpenCV real-time video processing for autonomous lane & target tracking",
      "Quadcopter drone mechanics, flight controllers, ESC calibration & propellers",
      "Autonomous waypoint navigation & PID tuning principles",
      "Introduction to ROS (Robot Operating System) for multi-sensor robots",
    ],
    tools: ["Raspberry Pi", "OpenCV", "ROS", "Drone Controllers", "Linux"],
    certificate: "Autonomous Robotics & Drone Specialist",
    hardwareKit: true,
  },
  {
    id: "ai-digital-marketing-bootcamp",
    category: "marketing",
    title: "AI-Powered Digital Marketing & Growth Bootcamp",
    image: "/images/services/digital-marketing.jpg",
    badge: "📈 Live Client Budgets • 4x+ ROAS",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    accentColor: "from-rose-600 to-orange-600",
    icon: TrendingUp,
    level: "Beginner to Professional",
    duration: "8 Weeks",
    schedule: "Live Agency Client Projects",
    description:
      "Learn performance marketing the modern way. Combine Meta Ads, Google Search, SEO, and AI automation to generate massive leads and viral brand reach.",
    highlights: [
      "Run live Meta (Facebook & Instagram) ad campaigns with real ROI optimization",
      "Google Search & Performance Max ads setup, keyword research & bidding",
      "Hyperlocal SEO & Google My Business ranking for local walk-in stores",
      "Generate 30 days of high-converting ad copy & visuals using AI in 1 hour",
      "Conversion rate optimization (CRO), landing page design & lead funnels",
    ],
    tools: ["Meta Ads", "Google Ads", "GA4", "ChatGPT", "Canva Pro", "Semrush"],
    certificate: "Certified Digital Marketing & AI Growth Strategist",
    hardwareKit: false,
  },
];

export function AiRoboticsClasses() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredCourses =
    activeTab === "all"
      ? coursesData
      : coursesData.filter((c) => c.category === activeTab);

  return (
    <section
      id="ai-robotics-classes"
      className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-[#0b1329] to-slate-950 text-white relative overflow-hidden border-y border-slate-800"
    >
      {/* Dynamic Ambient Background Tech Grids & Neon Glow Orbs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cyber Grid Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 px-4 py-1.5 rounded-full border border-blue-400/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <ShinyText
              text="VIZ Tech Academy • Admissions Open"
              color="#38bdf8"
              shineColor="#f43f5e"
              speed={3}
              className="text-xs font-bold tracking-wider uppercase"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Learn Tomorrow&apos;s Tech Today: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              AI, Robotics & Digital Marketing
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between theoretical knowledge and real-world mastery.
            Hands-on physical hardware kits, live agency digital marketing projects,
            and cutting-edge Artificial Intelligence labs right here in Zirakpur, Punjab.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 pt-4">
            {[
              { id: "all", label: "All Programs", icon: Layers, count: "6 Courses" },
              { id: "ai", label: "Artificial Intelligence (AI)", icon: Brain, count: "2 Masterclasses" },
              { id: "robotics", label: "Robotics & Hardware Labs", icon: Bot, count: "3 Labs" },
              { id: "marketing", label: "Digital Marketing Academy", icon: TrendingUp, count: "Live Agency" },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Category)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex"
                >
                  <div className="w-full bg-slate-900/90 rounded-3xl border border-slate-700/80 shadow-xl hover:border-cyan-400/60 hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 backdrop-blur-xl relative overflow-hidden">
                    {/* Top Ambient Glow */}
                    <div
                      className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${course.accentColor} opacity-15 rounded-full blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity`}
                    />

                    {/* Course Photography Banner */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950 shrink-0">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                      {/* Floating Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md bg-slate-900/85 border ${course.badgeColor}`}
                        >
                          {course.badge}
                        </span>
                        {course.hardwareKit && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-cyan-950/90 backdrop-blur-md text-cyan-300 px-2 py-0.5 rounded-md border border-cyan-500/40">
                            ⚡ Kit Included
                          </span>
                        )}
                      </div>

                      {/* Bottom Overlay on Image: Icon & Category */}
                      <div className="absolute bottom-2.5 left-3.5 z-10 flex items-center gap-2">
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${course.accentColor} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-200/90 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded border border-cyan-500/20">
                          {course.category.toUpperCase()} Lab
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {course.description}
                        </p>

                        {/* Batch Meta Pills (Level, Duration, Mode) */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/50">
                            <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/50">
                            <GraduationCap className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span className="truncate">{course.level}</span>
                          </div>
                        </div>

                        {/* Key Syllabus Modules */}
                        <div className="space-y-2 pt-2 border-t border-slate-800">
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Key Practical Modules:
                          </p>
                          <ul className="space-y-2">
                            {course.highlights.map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-200"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools & Tech Chips */}
                        <div className="pt-2">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Tools & Hardware Mastered:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {course.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-[10px] font-semibold bg-slate-800 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-700"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Certification Badge */}
                        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 text-[11px] text-slate-300">
                          <Award className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>
                            Includes:{" "}
                            <strong className="text-white">{course.certificate}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Bottom CTA Actions */}
                      <div className="pt-5 mt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2.5">
                        <a
                          href={`https://wa.me/919876687109?text=Hello%20VIZ%20Tech%20Academy,%20I%20am%20interested%20in%20enrolling%20in%20the%20${encodeURIComponent(
                            course.title
                          )}.%20Please%20share%20the%20batch%20timings%20and%20fees.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex-1"
                        >
                          <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-5 rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-1.5">
                            <MessageCircle className="w-4 h-4 fill-slate-950" />
                            <span>Book Free Demo</span>
                          </Button>
                        </a>

                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800 text-xs py-5 rounded-xl font-semibold"
                          >
                            Enroll Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 4 Pillars of VIZ Academy */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Boxes,
              title: "Physical Hardware Included",
              desc: "Every Robotics student gets their own complete kit (Arduino/Sensors/ESP32) to keep and build at home.",
              color: "text-cyan-400 bg-cyan-500/10",
            },
            {
              icon: Brain,
              title: "100% Practical AI Labs",
              desc: "No boring PowerPoint slides. Build live models, automate workflows, and code real AI applications.",
              color: "text-purple-400 bg-purple-500/10",
            },
            {
              icon: TrendingUp,
              title: "Real Client Agency Projects",
              desc: "Digital marketing students run live ads with real budgets, analyzing ROI on Google & Meta platforms.",
              color: "text-rose-400 bg-rose-500/10",
            },
            {
              icon: Award,
              title: "Govt & Industry Recognized",
              desc: "Verified course certificates, portfolio building, internship pathways, and hackathon guidance.",
              color: "text-amber-400 bg-amber-500/10",
            },
          ].map((pillar, idx) => {
            const PIcon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all space-y-3"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold ${pillar.color}`}
                >
                  <PIcon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Early Bird & Demo Class Strip */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-purple-900/60 p-6 sm:p-8 rounded-3xl border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-wider bg-white/10 text-cyan-300 px-3 py-1 rounded-full inline-block border border-white/10">
              Weekend Demo Class Alert
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Attend a Free 1-Hour Live AI & Robotics Hands-on Demo!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Experience our innovation lab at Motiaz Royal Business Park, Zirakpur. Bring your curiosity, we provide the tech!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20reserve%20a%20seat%20for%20the%20Free%20Weekend%20Demo%20Class%20in%20AI%20and%20Robotics."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105 text-xs sm:text-sm text-center"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Reserve Free Seat via WhatsApp</span>
            </a>
            <a
              href="tel:9876687109"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 transition-colors text-xs sm:text-sm text-center"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call: 98766 87109</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
