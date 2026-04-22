import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                {/* Top Row - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-48 h-24 transition-transform group-hover:scale-110">
                                <Image
                                    src="/v2_logo.png"
                                    alt="VIZ Digital Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight">VIZ<span className="text-brand-cyan">DIGIT</span><span className="text-brand-purple">"ALL"</span></span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Transforming brands through the power of artificial intelligence and strategic design.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "Services", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                                        className="text-white/60 hover:text-brand-cyan transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {["AI Videos", "Branding", "Web Design", "SEO", "Advertising"].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-white/60 hover:text-brand-cyan transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-brand-cyan mt-1 shrink-0" />
                                <a href="tel:+916284689718" className="text-white/60 hover:text-brand-cyan transition-colors text-sm leading-relaxed">
                                    +91 6284689718
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-brand-cyan mt-1 shrink-0" />
                                <a href="mailto:info@viztv.in" className="text-white/60 hover:text-brand-cyan transition-colors text-sm leading-relaxed break-all">
                                    info@viztv.in
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-brand-cyan mt-1 shrink-0" />
                                <span className="text-white/60 text-sm leading-relaxed">
                                    935, 9th Floor, Escon Prima, Zirakpur, India 140603, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row - Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/60">
                        © 2026 Digital Visions. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-white/60">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <span className="text-white/20">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <span className="text-white/20">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
