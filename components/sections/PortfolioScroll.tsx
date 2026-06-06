"use client";

import {
  BrainCircuit,
  Video,
  ImageIcon,
  PenTool,
  Bot,
  Sparkles,
  Laptop,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Mastery Coaching",
    description:
      "Learn Artificial Intelligence from beginner to advanced with practical projects and real-world guidance.",
  },
  {
    icon: Video,
    title: "AI Video Creation",
    description:
      "Master AI video generation using the latest tools to create professional videos in minutes.",
  },
  {
    icon: ImageIcon,
    title: "AI Image Generation",
    description:
      "Create stunning AI-generated images, product photos, social media posts, and digital artwork.",
  },
  {
    icon: PenTool,
    title: "Content & Prompt Writing",
    description:
      "Learn prompt engineering and create blogs, ads, emails, scripts, and marketing content with AI.",
  },
  {
    icon: Bot,
    title: "Top AI Tools Training",
    description:
      "Get hands-on experience with ChatGPT, Claude, Gemini, Midjourney, Perplexity, Runway, and many more AI tools.",
  },
  {
    icon: Sparkles,
    title: "Canva AI & Design",
    description:
      "Design beautiful presentations, reels, thumbnails, resumes, and branding assets using Canva AI.",
  },
  {
    icon: Laptop,
    title: "Automation & Productivity",
    description:
      "Learn to automate daily work, save hours of time, and boost productivity using AI workflows.",
  },
  {
    icon: GraduationCap,
    title: "Career & Freelancing",
    description:
      "Build high-income AI skills, create your portfolio, and start freelancing or grow your business.",
  },
];

export function PortfolioScroll() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-200/30 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            🚀 What You'll Learn
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Everything You Need To
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Master AI
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Join our AI coaching program and learn the latest AI tools, content
            creation, automation, design, video generation, freelancing, and
            productivity skills with practical guidance.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            Learn AI. Build Skills. Grow Your Career.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/90">
            From AI-generated videos and images to Canva AI, ChatGPT, prompt
            engineering, automation, freelancing, and the latest AI tools—we
            help you gain practical skills that you can use in real projects and
            your professional journey.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:scale-105">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
}