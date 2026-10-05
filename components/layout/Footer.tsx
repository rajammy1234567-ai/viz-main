import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

export function Footer() {
  const servicesList = [
    { name: "Digital Marketing & Growth", href: "/services#digital-marketing" },
    { name: "AI Classes & Masterclasses", href: "/services#ai-classes" },
    { name: "Robotics & Hardware Labs", href: "/services#robotics-classes" },
    { name: "Information Technology", href: "/services#information-technology" },
    { name: "Brand Management & Branding", href: "/services#brand-management" },
    { name: "Franchise Consultancy", href: "/services#franchise-consultancy" },
    { name: "Restaurant Set-Up Consultancy", href: "/services#restaurant-setup" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services & Masterclasses", href: "/services" },
    { name: "AI & Robotics Classes", href: "/services#ai-classes" },
    { name: "About Us", href: "/about" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-50 text-slate-600 pt-10 sm:pt-16 pb-8 border-t border-slate-200 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full overflow-hidden">
        {/* Top Highlight Banner - Fully Responsive for Mobile & Desktop */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-10 sm:mb-14 border border-slate-200 shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <span className="text-[11px] font-bold text-orange-600 tracking-wider uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60 inline-block">
              Where Strategy Meets Innovation
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
              Ready to scale your business or master future tech?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Partner with VIZ Digital in Zirakpur, Punjab for strategic consulting, high-ROI digital marketing, franchise expansion, and hands-on AI & Robotics Masterclasses with hardware kits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 text-sm text-center"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20inquire%20about%20your%20consulting%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold px-4 py-3 rounded-xl transition-colors text-sm text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4 Columns Grid - Strict 12-column responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-12 sm:mb-16 w-full min-w-0">
          {/* Column 1: Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4 min-w-0">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm border border-slate-200/80 bg-[#1e232c] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/viz_logo.png"
                  alt="VIZ Digital Logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  VIZ <span className="text-blue-600">Digital</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">
                  Consulting & Growth Solutions
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              VIZ Digital is a premium business consulting and growth solutions company based in Zirakpur, Punjab. We help businesses, entrepreneurs, and emerging brands turn ideas into strong, scalable, and sustainable ventures.
            </p>

            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950 text-xs font-medium space-y-1">
              <p className="font-bold">“Your vision. Our expertise. A smarter path to growth.”</p>
              <p className="text-slate-500 text-[11px]">
                Zirakpur, Punjab • Serving Emerging Brands
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 min-w-0">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-xs sm:text-sm font-medium py-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols on lg) */}
          <div className="lg:col-span-3 min-w-0">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 sm:mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {servicesList.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-xs sm:text-sm font-medium py-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols on lg) */}
          <div className="lg:col-span-3 min-w-0">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 sm:mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Phone</p>
                  <a
                    href="tel:9876687109"
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                  >
                    98766 87109
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Email</p>
                  <a
                    href="mailto:vizdigitalofficial@gmail.com"
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block"
                  >
                    vizdigitalofficial@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    Zirakpur, Punjab, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row - Copyright & Quick Links */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} VIZ Digital. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs">
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About VIZ Digital
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/clients" className="hover:text-blue-600 transition-colors">
              Our Clients
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
