import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Sparkles,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Star,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Quote,
  Users,
  Award,
  Phone,
  MessageCircle,
  UtensilsCrossed,
  ShoppingBag,
  HeartPulse,
} from "lucide-react";
import { ClientsRoster } from "@/components/sections/ClientsRoster";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { ShinyText, BlurText, CountUp } from "@/components/animations";

export const metadata = {
  title: "Our Clients & Success Stories | 1,000+ Happy Customer Families | VIZ Digital",
  description:
    "Explore how over 1,000+ customer families, retail brands, and restaurant franchises scaled sustainable commercial businesses with VIZ Digital in Punjab and North India.",
};

const featuredFamilyCases = [
  {
    family: "The Sharma Family",
    business: "The Spice Table Cafe & Restaurant",
    category: "F&B / Turnkey Restaurant Setup",
    location: "Zirakpur & Mohali, Punjab",
    image: "/images/clients/client_family_1.jpg",
    highlight: "From Empty Space to 3 Thriving Outlets in 14 Months",
    quote:
      "When we decided to enter the restaurant industry, we had great recipes but zero commercial planning. VIZ Digital transformed everything: kitchen architecture, chef hiring SOPs, brand positioning, and grand opening marketing. We are now running 3 crowded branches.",
    metrics: [
      { label: "Outlets Launched", value: "3 Branches" },
      { label: "Daily Footfall", value: "450+ Diners" },
      { label: "Google Rating", value: "4.9 / 5.0" },
    ],
    scope: "Complete Concept Design, Kitchen Layouts, Staff SOPs & Hyperlocal Launch Campaigns",
  },
  {
    family: "Aman & Simran Preet",
    business: "The Golden Thread Luxury Lifestyle",
    category: "Retail Architecture & Brand Revamp",
    location: "Sector 17, Chandigarh",
    image: "/images/clients/client_family_2.jpg",
    highlight: "+320% Footfall & Tripled Annual Revenue",
    quote:
      "VIZ Digital modernized our multi-generational boutique into an aspirational lifestyle brand. Their advice on visual merchandising, premium brand storytelling, and high-converting local campaigns gave us record sales during every festive season.",
    metrics: [
      { label: "Revenue Surge", value: "+320%" },
      { label: "VIP Club Members", value: "18,000+" },
      { label: "Avg Ticket Size", value: "2.4x Higher" },
    ],
    scope: "Brand Identity, Omnichannel Merchandising, Social Growth & Flagship Store Launch",
  },
  {
    family: "Dr. Ramesh & Vikram Sethi Family",
    business: "Sri Diagnostics & Wellness Centre",
    category: "Healthcare Infrastructure & IT",
    location: "Panchkula & Zirakpur",
    image: "/images/clients/client_family_3.jpg",
    highlight: "40,000+ Annual Patients & 99.98% System Reliability",
    quote:
      "In healthcare, trust and digital speed are everything. VIZ Digital helped us deploy an integrated patient booking application, cloud diagnostic reporting system, and dependable regional reputation marketing.",
    metrics: [
      { label: "Patients Served", value: "40,000+" },
      { label: "Diagnostic Hubs", value: "3 Centers" },
      { label: "Retention Rate", value: "98.5%" },
    ],
    scope: "Enterprise Health IT Architecture, Cloud Patient Portal & High-Trust Tricity Branding",
  },
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-20 overflow-x-hidden w-full max-w-full">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-slate-50/40 to-white py-16 sm:py-24 border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <ShinyText
                text="1,000+ Happy Customer Families & Businesses"
                color="#1e3a8a"
                shineColor="#f97316"
                speed={3}
                className="text-xs font-bold tracking-wider uppercase"
              />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              <BlurText
                text="Real Clients. Real Families."
                delay={60}
                className="text-slate-900 block"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 block mt-1">
                Remarkable Commercial Growth.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore the real stories, brands, and family businesses across Punjab, Chandigarh Tricity, and North India that have scaled their operations, outlets, and revenues with VIZ Digital.
            </p>

            {/* Quick Live Stats Strip */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                {
                  renderedValue: <CountUp to={1000} separator="," suffix="+" />,
                  label: "Happy Client Families",
                  sub: "Guided to Long-Term Success",
                },
                {
                  renderedValue: <CountUp to={150} suffix="+" />,
                  label: "Outlets & Franchises",
                  sub: "Operational Across India",
                },
                {
                  renderedValue: (
                    <span>
                      ₹<CountUp to={150} />Cr+
                    </span>
                  ),
                  label: "Cumulative Value",
                  sub: "Generated for Partners",
                },
                {
                  renderedValue: <CountUp to={99.2} decimals={1} suffix="%" />,
                  label: "Satisfaction Rate",
                  sub: "Verified Client Reviews",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 p-4 rounded-2xl border border-slate-200/80 shadow-xs text-center"
                >
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {stat.renderedValue}
                  </div>
                  <div className="text-xs font-bold text-blue-700 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Brand Marquee */}
      <BrandMarquee />

      {/* Featured Client Family Deep-Dive Stories */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              How Our Client Families Succeeded
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Behind every business we consult is a passionate founder and family. Here is how our strategic partnership built real, lasting value.
            </p>
          </div>

          <div className="space-y-12">
            {featuredFamilyCases.map((story, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden grid lg:grid-cols-12 gap-0 group hover:shadow-card-hover transition-all duration-300"
              >
                {/* Authentic Client Photo Column */}
                <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[440px] bg-slate-950 overflow-hidden group">
                  <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px]">
                    <Image
                      src={story.image}
                      alt={`${story.family} - ${story.business}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority={idx === 0}
                    />

                    {/* Gradient scrims for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Top Verified Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <div className="bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-white">
                          Verified Client Partner
                        </span>
                      </div>
                      <span className="text-xs font-bold text-orange-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-orange-400/30 shadow-md">
                        {story.category}
                      </span>
                    </div>

                    {/* Bottom Client Details Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-orange-300 font-semibold mb-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{story.location}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white drop-shadow-md">
                        {story.family}
                      </h3>
                      <p className="text-xs text-slate-200 font-medium">{story.business}</p>
                      
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                        <span>Headquartered in Punjab</span>
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          5.0 Verified Review
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        {story.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                        <span className="text-xs font-bold text-slate-700 ml-1">
                          5.0 Client Rating
                        </span>
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {story.highlight}
                    </h4>

                    {/* Testimonial Quote */}
                    <div className="relative pl-5 border-l-4 border-blue-600 bg-white p-4 rounded-r-2xl border border-slate-200/60 shadow-xs">
                      <Quote className="w-5 h-5 text-blue-300 absolute -top-2 -left-3" />
                      <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                        “{story.quote}”
                      </p>
                    </div>

                    {/* Scope of Engagement */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        VIZ Digital Consulting Scope:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium bg-white p-3 rounded-xl border border-slate-200/60">
                        {story.scope}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-3 text-center sm:text-left">
                    {story.metrics.map((m, mi) => (
                      <div key={mi} className="bg-white p-3 rounded-xl border border-slate-200/60">
                        <div className="text-base sm:text-lg font-black text-slate-900">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Filterable Client Brand Showcase */}
      <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Verified Client Roster
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Partner Brands
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Search by sector, city, or brand name to view our consulting engagements across diverse industries.
            </p>
          </div>

          {/* Interactive Roster */}
          <ClientsRoster />
        </div>
      </section>

      {/* Customer Family Reviews Strip */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Founders Say About Working With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Harpreet Singh",
                role: "Franchise Founder",
                company: "Amritsari Kulcha Express (14 Outlets)",
                text: "Scaling beyond 2 outlets was chaos until VIZ Digital came in. They built our investor prospectus, legal franchisee agreements, and kitchen SOPs. We opened 12 franchise outlets in 18 months smoothly.",
                rating: 5,
              },
              {
                name: "Pooja Verma",
                role: "Managing Director",
                company: "Urban Glow Aesthetics, Mohali",
                text: "The guidance on customer onboarding, premium clinic layout, and digital appointment funnels made our opening month profitable immediately. Their team treats your money like their own.",
                rating: 5,
              },
              {
                name: "Gurmeet Bawa",
                role: "Retail Founder",
                company: "Zira Green Organics, Zirakpur",
                text: "From vendor contracts to automated POS software and local launch events, VIZ Digital delivered complete peace of mind. Truly the most reliable growth consultants in Punjab.",
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-slate-50 p-7 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    “{review.text}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold">{review.role}</p>
                  <p className="text-[11px] text-slate-500">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-300 px-4 py-1.5 rounded-full inline-block border border-white/10">
            Join 1,000+ Thriving Businesses
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Become Our Next Brand Success Story?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you want to launch a new restaurant, scale a franchise network, modernize your IT infrastructure, or rebrand your business, our consulting team in Zirakpur is ready.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-2xl px-8 py-6 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30"
              >
                <span>Book Free Discovery Session</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <a
              href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20saw%20your%20client%20stories%20and%20want%20to%20consult%20about%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-600/20 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Direct WhatsApp Advisory</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
