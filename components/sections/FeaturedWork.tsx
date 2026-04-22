"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Wallet, Clock, Shield, Star, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Client Logos Data
const clients = [
    "TechFlow", "CircleAI", "Nexus", "Vertex", "Orbit", "Sphere", "Global", "NetCore"
];

// Timeline Data
const processSteps = [
    { num: "1", title: "Discovery", desc: "Understanding goals" },
    { num: "2", title: "Strategy", desc: "Planning roadmap" },
    { num: "3", title: "Creation", desc: "Building solution" },
    { num: "4", title: "Launch", desc: "Going live" },
    { num: "5", title: "Growth", desc: "Scaling up" },
];

export function FeaturedWork() {
    return (
        <section className="bg-navy-950  overflow-hidden text-white relative">

            {/* 1. Client Logos Banner (Top) */}
            <div className="border-b border-white/5 mb-20 bg-navy-900/30 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {clients.map((client, i) => (
                            <span key={i} className="text-xl font-bold font-mono tracking-widest uppercase hover:text-brand-cyan transition-colors cursor-default">
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex justify-between items-end mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Featured Work
                    </motion.h2>
                    <div className="hidden md:block">
                        <Button variant="link" className="text-slate-400 hover:text-white">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* 2. Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-32 h-auto lg:h-[600px]">

                    {/* Left Col - Large Feature Card (Start) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 bg-navy-900/50 rounded-3xl p-8 border border-brand-cyan/30 relative overflow-hidden group hover:border-brand-cyan/60 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-[80px] -z-10" />

                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <h3 className="text-xl font-mono text-slate-400 mb-2">Toast&Lounge</h3>
                                <h4 className="text-3xl font-bold mb-6">Reservation<br />App Redesign</h4>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-navy-950/80 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-brand-purple/20 rounded-full text-brand-purple font-bold">
                                            +40%
                                        </div>
                                        <span className="text-lg font-semibold">Delivery Rate</span>
                                    </div>
                                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="bg-brand-purple h-full"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <Check className="w-4 h-4 text-green-400" /> Verified Results
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Col - Mosaic Images */}
                    <div className="lg:col-span-5 grid grid-rows-2 gap-6">
                        {/* Top Row: Laptop Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-800 rounded-3xl relative overflow-hidden group"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Workspace"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 z-10">
                                <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">Web App</span>
                            </div>
                        </motion.div>

                        {/* Bottom Row: Split Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-zinc-900 rounded-3xl relative overflow-hidden group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop"
                                    alt="Mobile"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500 opacity-70"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-6 flex items-center justify-center relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <div className="text-center relative z-10 transform group-hover:scale-105 transition-transform">
                                    <span className="text-4xl font-bold text-brand-cyan">10k+</span>
                                    <p className="text-xs text-brand-cyan/60 mt-1">Active Users</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Col - Feature List */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3 bg-navy-900 rounded-3xl p-8 border border-white/5 flex flex-col justify-center"
                    >
                        <h3 className="text-xl font-bold mb-8 text-white">Why Use Us?</h3>
                        <ul className="space-y-6">
                            {[
                                { icon: Zap, text: "AI Curated Delivery" },
                                { icon: Wallet, text: "Transparent Pricing" },
                                { icon: Shield, text: "Dedicated Support" },
                                { icon: Star, text: "Proven Results" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-slate-300">
                                    <div className="p-2 bg-white/5 rounded-lg text-brand-cyan">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <Button className="w-full bg-gradient-to-r from-brand-cyan to-brand-purple hover:opacity-90 transition-opacity">
                                View Case Studies
                            </Button>
                        </div>
                    </motion.div>

                </div>

                {/* 3. How We Work Timeline */}
                <div className="relative">
                    <h3 className="text-3xl font-bold mb-16">How We Work</h3>

                    <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-brand-cyan/50 via-brand-purple/50 to-transparent -z-10" />

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group pt-4"
                            >
                                <div className="w-20 h-20 rounded-full bg-navy-900 border-4 border-navy-950 group-hover:border-brand-cyan transition-colors duration-300 flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0 shadow-lg relative z-10">
                                    <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                                        {step.num}
                                    </span>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">{step.title}</h4>
                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
