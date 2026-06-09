"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Ready to transform your digital presence? Let's start the conversation.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
                    {/* Contact Info Panel */}
                    <div className="md:col-span-2 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-3xl p-8 text-white flex flex-col justify-center gap-8 shadow-xl">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
                            <p className="text-white/70 text-sm">Reach out to us directly through any of the channels below.</p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Phone</p>
                                <a href="tel:+919876697109" className="text-white/60 hover:text-brand-cyan transition-colors text-sm leading-relaxed">
                                    +91 9876697109
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:info@viztv.in" className="font-semibold hover:underline break-all">info@viztv.in</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Address</p>
                                <p className="font-semibold leading-relaxed">
                                    Motiaz Royal Business Park,<br />
                                    Zirakpur, India 140603,<br />
                                    India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-3 bg-white dark:bg-navy-900 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 dark:border-navy-800">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                    <Input placeholder="John Doe" className="dark:bg-navy-950" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                    <Input type="email" placeholder="john@example.com" className="dark:bg-navy-950" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <Textarea placeholder="Tell us about your project..." className="min-h-[150px] dark:bg-navy-950" />
                            </div>
                            <Button size="lg" className="w-full bg-gradient-to-r from-brand-cyan to-brand-purple text-lg h-14 rounded-xl text-white">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
