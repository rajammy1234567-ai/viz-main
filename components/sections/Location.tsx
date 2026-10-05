"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageCircle,
  Navigation,
  Building2,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard, ShinyText, BlurText } from "@/components/animations";

export function LocationSection() {
  const googleMapsUrl =
    "https://maps.google.com/?q=Motiaz+Royal+Business+Park,+Zirakpur,+Punjab+140603";

  return (
    <section className="py-16 sm:py-28 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden [overflow-x:clip] border-t border-slate-100 w-full max-w-full isolate">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [contain:paint]">
        <div className="absolute top-1/3 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full min-w-0">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs max-w-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping shrink-0" />
            <ShinyText
              text="Headquarters & Presence"
              color="#1e3a8a"
              shineColor="#f97316"
              speed={3}
              className="text-xs font-bold tracking-wider uppercase"
            />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight break-words">
            <BlurText
              text="Strategically Based in"
              delay={70}
              className="text-slate-900 inline sm:block"
            />
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 inline sm:block mt-1">
              Zirakpur, Punjab
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Conveniently situated in the Tricity commercial corridor (Chandigarh, Mohali, Panchkula) with rapid access to national highways and airports.
          </p>
        </div>

        {/* Quick Regional Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-4xl mx-auto w-full min-w-0">
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">15 Mins to Airport</p>
              <p className="text-[11px] text-slate-500 font-medium truncate">Shaheed Bhagat Singh Intl Airport</p>
            </div>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">Motiaz Business Park</p>
              <p className="text-[11px] text-slate-500 font-medium truncate">Prime Commercial Complex</p>
            </div>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">Highway Connectivity</p>
              <p className="text-[11px] text-slate-500 font-medium truncate">Direct on NH-152 Expressway</p>
            </div>
          </div>
        </div>

        {/* Main Grid: Details Left, Interactive Map Right */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full min-w-0">
          {/* Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 h-full min-w-0 w-full"
          >
            <SpotlightCard
              spotlightColor="rgba(37, 99, 235, 0.09)"
              className="bg-white rounded-3xl p-4 sm:p-7 md:p-9 border border-slate-200/90 shadow-soft flex flex-col justify-between space-y-6 h-full min-w-0"
            >
              <div className="space-y-6">
                {/* Header inside card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">VIZ Digital Office</h3>
                    <p className="text-xs text-slate-500">Corporate Consulting Hub</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open for Consultations</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Office Address
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                      Motiaz Royal Business Park, <br />
                      Ambala-Chandigarh Expressway, <br />
                      Zirakpur, Punjab 140603, India
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Call & Direct Line
                    </p>
                    <a
                      href="tel:9876687109"
                      className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                    >
                      +91 98766 87109
                    </a>
                    <p className="text-xs text-slate-500">
                      Direct founder & strategy advisory
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email Desk
                    </p>
                    <a
                      href="mailto:vizdigitalofficial@gmail.com"
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block"
                    >
                      vizdigitalofficial@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Working Hours
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      Monday – Saturday: 9:30 AM – 6:30 PM (IST)
                    </p>
                    <p className="text-xs text-slate-500">
                      In-person meetings by prior appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-xl py-5 text-xs font-bold border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-blue-400 flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-blue-600" />
                    <span>Get Driving Directions</span>
                  </Button>
                </a>

                <a
                  href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20schedule%20an%20in-person%20meeting%20at%20your%20Zirakpur%20office."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full"
                >
                  <Button className="w-full rounded-xl py-5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Schedule Visit</span>
                  </Button>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Interactive Map (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-soft flex flex-col justify-between relative overflow-hidden min-h-[320px] sm:min-h-[420px] min-w-0 w-full"
          >
            {/* Top Interactive Banner on Map */}
            <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-200/80 mb-3 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Motiaz Royal Business Park • Zirakpur, Punjab</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline shrink-0"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Map Iframe Container */}
            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.324835492196!2d76.82772597652758!3d30.644719289874837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feee0b2e8c6b1%3A0x7e1c2b0e1e2e2e2e!2sMotiaz%20Royal%20Business%20Park%2C%20Zirakpur%2C%20Punjab%20140603!5e0!3m2!1sen!2sin!4v1708800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="VIZ Digital Headquarters - Motiaz Royal Business Park Zirakpur"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
