"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, Clock, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function LightHero() {
    return (
        <section className="py-24 bg-white dark:bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-brand-cyan font-semibold text-sm"
                        >
                            <Award className="w-4 h-4" />
                            Award-Winning Agency
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1]"
                        >
                            Transform Your <br />
                            Digital Presence with <br />
                            <span className="italic relative">
                                AI Expertise
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-200/50 -z-10" />
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-slate-600 leading-relaxed max-w-lg"
                        >
                            At VIZ Digital, we specialize in branding, web design, AI videos, and digital marketing. Our cutting-edge solutions are designed to elevate your brand and drive measurable results.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative max-w-md"
                        >
                            <div className="flex bg-slate-100 rounded-full p-2 pl-6 shadow-inner">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent border-0 focus:ring-0 flex-1 min-w-0 outline-none text-slate-900 placeholder:text-slate-400"
                                />
                                <Button className="rounded-full bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-6 h-auto text-base">
                                    Get Started
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual (Bento Grid) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        {/* Main Image */}
                        <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-[40px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                                alt="Office"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Badge: 24h Service */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute top-10 right-0 bg-white p-6 rounded-3xl shadow-xl z-20"
                        >
                            <div className="relative w-20 h-20 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="#F1F5F9" strokeWidth="6" />
                                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="#00F2FF" strokeWidth="6" strokeDasharray="226" strokeDashoffset="45" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
                                    <span className="text-xl font-bold text-slate-900">24 H</span>
                                    <span className="text-[10px] text-slate-500 font-medium">Service</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Card: Testimonial */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="absolute bottom-0 right-8 bg-brand-purple p-8 rounded-[32px] text-white max-w-[280px] shadow-2xl z-20"
                        >
                            <Quote className="w-8 h-8 mb-4 opacity-50 fill-current" />
                            <p className="text-lg font-medium leading-snug mb-4">
                                "Outstanding service and results. They transformed our vision into reality."
                            </p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white" />)}
                            </div>
                        </motion.div>

                        {/* Floating Badge: 500 Clients */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="absolute bottom-20 left-[-20px] bg-white px-8 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-4"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                                        <Image
                                            src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`}
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="font-bold text-slate-900">
                                Over 500 Clients
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
