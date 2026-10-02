import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Cpu,
  Sparkles,
  Store,
  UtensilsCrossed,
  CheckCircle2,
  ArrowRight,
  Check,
  ChevronRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "Consulting Services | VIZ Digital",
  description:
    "Explore VIZ Digital's consulting solutions: Digital Marketing, Information Technology, Brand Management, Franchise Consultancy, and Restaurant Set-Up Consultancy in Zirakpur, Punjab.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-20 overflow-x-hidden w-full max-w-full">
      {/* Services Hero Header */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              VIZ Digital Services
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Consulting & <span className="text-blue-600">Growth Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tailored consulting shaped around your business goals, connecting strategy, technology, branding, and operations.
            </p>

            {/* Quick jump anchor links */}
            <div className="pt-6 flex flex-wrap justify-center gap-2">
              {[
                { name: "Digital Marketing", href: "#digital-marketing" },
                { name: "Information Technology", href: "#information-technology" },
                { name: "Brand Management", href: "#brand-management" },
                { name: "Franchise Consultancy", href: "#franchise-consultancy" },
                { name: "Restaurant Set-Up", href: "#restaurant-setup" },
              ].map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-xs transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 1: Digital Marketing */}
      <section id="digital-marketing" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Service 01 • Marketing
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Digital Marketing
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Strategic marketing solutions that strengthen online visibility, build customer engagement, and support business growth.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We look at digital marketing through a commercial lens. Rather than vanity metrics, we craft campaigns and digital presence channels that drive brand awareness, qualified customer conversations, and lasting enterprise value.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Search Engine Visibility & Organic Reach Strategy",
                    "Targeted Customer Acquisition & Performance Campaigns",
                    "Content Alignment with Brand Positioning",
                    "Multi-Channel Engagement & Funnel Optimization",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="rounded-xl px-6 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md">
                      Discuss Digital Marketing
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-soft space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Visibility That Generates Real Value
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Designed for businesses and emerging brands seeking predictable, measurable digital visibility that turns impressions into long-term commercial relationships.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 font-medium space-y-1">
                    <p className="font-semibold text-slate-800">Customized Campaign Design</p>
                    <p>Shaped around your specific market, audience profile, and growth targets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: Information Technology */}
      <section id="information-technology" className="py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Scalable Digital Infrastructure
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Selecting and adopting the right technology tools prevents costly rework. We assist you in matching modern digital architecture to current operational needs and future scale.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-medium space-y-1">
                    <p className="font-semibold text-slate-800">Operational Agility</p>
                    <p>Integrate modern systems that streamline business operations and customer touchpoints.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  Service 02 • Technology
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Information Technology
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Technology consulting to help businesses choose digital infrastructure, applications, and solutions for efficient operations and long-term scalability.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We connect modern technology with business strategy. From selecting core software platforms to guiding custom digital application ecosystems, VIZ Digital provides independent, business-focused tech advisory.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Digital Infrastructure Evaluation & Systems Architecture",
                    "Business Applications & CRM / ERP Selection",
                    "Process Automation & Workflow Efficiency",
                    "Technology Roadmap for Scalable Expansion",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="rounded-xl px-6 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md">
                      Consult on IT Infrastructure
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: Brand Management & Branding */}
      <section id="brand-management" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
                Service 03 • Branding & Experience
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                Brand Management & Branding
              </h2>
              <p className="text-xl font-bold text-purple-700">
                “We build brands that people remember.”
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Branding is more than a logo. It includes the complete customer experience, from brand strategy and identity to promotion, launches, activations, and ongoing management.
              </p>
            </div>

            {/* Checklist of Brand Services */}
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Our Brand Management Capabilities Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Brand strategy and positioning",
                  "Logo, visual identity, brand guidelines, communication style, and marketing assets",
                  "Brand promotion and marketing campaigns",
                  "Influencer and public figure collaborations",
                  "Celebrity collaborations, appearances, and store launches",
                  "Store launches, events, and brand activations",
                  "Ongoing brand management across digital and physical customer touchpoints",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Brand Closing Line Quote */}
              <div className="mt-8 p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200/70 text-center">
                <p className="text-lg sm:text-xl font-bold text-purple-950">
                  “We don’t just build brands. We create experiences around them.”
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <Button className="rounded-xl px-7 py-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md">
                  Discuss Brand Strategy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4: Franchise Consultancy */}
      <section id="franchise-consultancy" className="py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                Service 04 • Franchise Expansion
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                Franchise Consultancy
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                VIZ Digital provides end-to-end franchise consultancy and management, helping brands build franchise networks and convert opportunities into operational outlets.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-amber-200 text-amber-900 text-sm font-semibold">
                End-to-End Journey: Support from the first franchise enquiry through agreement, outlet setup, opening, and operational launch.
              </div>
            </div>

            {/* Franchise Modules Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Franchise Lead Generation", desc: "Targeted campaigns attracting verified investor inquiries." },
                { title: "Lead Management & Follow-ups", desc: "Structured screening, qualification, and relationship nurturing." },
                { title: "Franchise Sales Management", desc: "Pipeline management, negotiation handling, and prospect alignment." },
                { title: "Presentation & Commercial Support", desc: "Tailored pitch decks, ROI modeling, and commercial deal discussions." },
                { title: "Agreement & Closure Coordination", desc: "Legal framework adherence and franchise agreement execution." },
                { title: "Location Evaluation & Finalisation", desc: "Footfall assessment, demographic analysis, and lease review." },
                { title: "Outlet Setup & Launch Coordination", desc: "Timeline management for on-time physical execution." },
                { title: "Branding, Interiors & Vendors", desc: "Turnkey coordination for interiors, equipment, and suppliers." },
                { title: "Startup & Operations Support", desc: "Pre-opening training, operational manuals, and opening day assistance." },
              ].map((module, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-2 hover:border-amber-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{module.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/contact">
                <Button className="rounded-xl px-7 py-5 bg-amber-700 hover:bg-amber-800 text-white font-semibold shadow-md">
                  Explore Franchise Expansion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 5: Restaurant Set-Up Consultancy */}
      <section id="restaurant-setup" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
                Service 05 • Hospitality & F&B
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                Restaurant Set-Up Consultancy
              </h2>
              <p className="text-2xl font-bold text-orange-600">
                “From Concept to Opening Day.”
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Launching a restaurant takes the right concept, location, layout, kitchen, team, systems, and operational planning.
              </p>
            </div>

            {/* Complete 13 Restaurant Modules */}
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Turnkey Restaurant Setup Checklist:
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Restaurant concept development",
                  "Business and operational planning",
                  "Location finalisation and site evaluation",
                  "Restaurant layout and space planning",
                  "Interior planning and design coordination",
                  "Kitchen layout and equipment planning",
                  "Menu design and menu engineering",
                  "Chef and staff hiring",
                  "Vendor and supplier coordination",
                  "SOPs and operational planning",
                  "Staff training and pre-opening preparation",
                  "Branding and restaurant identity",
                  "Pre-opening, launch, and post-launch operational guidance",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Restaurant Closing Quote */}
              <div className="mt-8 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200/70 text-center">
                <p className="text-lg sm:text-xl font-bold text-orange-950">
                  “We help transform an empty space into a professionally planned, market-ready restaurant.”
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <Button className="rounded-xl px-7 py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md">
                  Plan Your Restaurant Launch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Strip */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Need a Custom Consulting Package?
            </h2>
            <p className="text-slate-600 text-base">
              Whether you are an entrepreneur launching a single concept or a brand building a multi-outlet network, VIZ Digital creates tailored consulting roadmaps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="rounded-xl px-8 py-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  Schedule a Consultation
                </Button>
              </Link>
              <a
                href="tel:9876687109"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-xs"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call 98766 87109</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
