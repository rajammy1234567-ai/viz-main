import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
  CheckCircle2,
  PlusCircle,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Our Clients | VIZ Digital - Business Consulting & Growth Solutions",
  description:
    "VIZ Digital partners with businesses, entrepreneurs, and emerging brands to build strong, scalable, and sustainable ventures.",
};

export default function ClientsPage() {
  // 12 cleanly defined editable placeholder slots with sectors
  const clientSlots = [
    { id: "01", sector: "Emerging Consumer Brand", badge: "Brand Partner" },
    { id: "02", sector: "Franchise Retail Network", badge: "Franchise Partner" },
    { id: "03", sector: "Hospitality & Dining Venture", badge: "F&B Client" },
    { id: "04", sector: "Technology & Software Startup", badge: "Tech Client" },
    { id: "05", sector: "Healthcare & Wellness Group", badge: "Enterprise" },
    { id: "06", sector: "Education & Academy Brand", badge: "Institutional" },
    { id: "07", sector: "Commercial Retail Store", badge: "Retail Client" },
    { id: "08", sector: "Quick Service Restaurant (QSR)", badge: "Food & Beverage" },
    { id: "09", sector: "B2B Professional Services", badge: "Corporate Partner" },
    { id: "10", sector: "Regional Multi-Outlet Chain", badge: "Franchise Client" },
    { id: "11", sector: "Lifestyle & Apparel Label", badge: "Brand Partner" },
    { id: "12", sector: "Digital Enterprise Venture", badge: "Emerging Brand" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-20 overflow-x-hidden w-full max-w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Partnerships & Growth
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="text-blue-600">Clients</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              VIZ Digital works with businesses, entrepreneurs, and emerging brands across diverse sectors to turn ambitious concepts into scalable, market-ready ventures.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Narrative */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Partnering for Sustainable, Long-Term Value
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We collaborate closely with visionary founders, retail brands, franchise operators, and restaurant entrepreneurs. Our consulting engagements are customized to ensure every partner achieves commercial clarity, operational resilience, and market distinction.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Grid (Clean Editable Placeholder Slots) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Editor guidance note banner */}
            <div className="bg-blue-50/70 rounded-2xl p-4 sm:p-5 border border-blue-200 flex items-start gap-3.5 text-xs text-blue-900">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-blue-950 mb-0.5">Editable Client Roster</p>
                <p className="text-blue-800 leading-relaxed">
                  The slots below represent reserved showcase placeholders for client logos and company names. Each card is structured to easily integrate real partner logos, brand emblems, and case links as new partnerships are onboarded.
                </p>
              </div>
            </div>

            {/* 12 Placeholder Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clientSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="bg-white rounded-2xl p-6 border-2 border-dashed border-slate-200 hover:border-solid hover:border-blue-400 hover:shadow-soft transition-all duration-300 flex flex-col justify-between text-center group min-h-[190px]"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 flex items-center justify-center mx-auto transition-colors">
                      <Building2 className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full inline-block">
                        {slot.badge}
                      </span>
                      <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        Client Partner Slot {slot.id}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {slot.sector}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100/80">
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-blue-600">
                      Editable Logo Slot
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Invitation CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-3xl p-8 sm:p-12 border border-blue-200/80 text-center shadow-soft space-y-6">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-100/80 px-3.5 py-1.5 rounded-full">
              Work With VIZ Digital
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Become Our Next Brand Success Story
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
              Whether you need strategic marketing, technology infrastructure, brand positioning, franchise rollout, or restaurant setup, we are ready to partner with you.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="rounded-xl px-8 py-6 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
