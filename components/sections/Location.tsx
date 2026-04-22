"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function LocationSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Title with Large Watermark Text Effect */}
                <div className="relative text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white relative z-10 inline-block">
                        Our Location
                    </h2>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl font-bold text-slate-200 dark:text-navy-800 opacity-20 whitespace-nowrap -z-10 pointer-events-none select-none">
                        Our Location
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                    {/* Contact Info Card */}
                    <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 md:p-12 shadow-lg border border-slate-100 dark:border-navy-800 flex flex-col justify-center h-full">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-brand-cyan" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</p>
                                    <a href="tel:+916284689718" className="text-lg font-medium text-navy-900 dark:text-white hover:text-brand-cyan transition-colors">+91 6284689718</a><br></br>
                                    <a href="https://wa.me/916284689718" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-navy-900 dark:text-white hover:text-brand-cyan transition-colors">WhatsApp: +91 6284689718</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-brand-purple" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</p>
                                    <a href="mailto:info@viztv.in" className="text-lg font-medium text-navy-900 dark:text-white hover:text-brand-purple transition-colors">info@viztv.in</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-brand-cyan" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Address</p>
                                    <p className="text-lg font-medium text-navy-900 dark:text-white max-w-sm">
                                        935, 9th Floor, Escon Prima,<br />Zirakpur, India 140603,<br />India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-brand-purple" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Open Hours</p>
                                    <p className="text-lg font-medium text-navy-900 dark:text-white">Monday - Friday: 9 AM - 6 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="bg-slate-200 dark:bg-navy-800 rounded-[32px] overflow-hidden shadow-lg h-[400px] lg:h-auto min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.3!2d76.8277!3d30.6447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feee0b2e8c6b1%3A0x7e1c2b0e1e2e2e2e!2sMotiaz%20Royal%20Business%20Park%2C%20Zirakpur%2C%20Punjab%20140603!5e0!3m2!1sen!2sin!4v1708800000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Office Location"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
