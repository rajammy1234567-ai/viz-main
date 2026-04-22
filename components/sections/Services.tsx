"use client";

import { Video, Palette, Globe, Megaphone, BarChart, MousePointer2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const services = [
    {
        title: "AI Brand Videos",
        description: "AI-generated product demos, brand stories, and social ads delivered in 48 hours.",
        icon: Video,
        accent: "from-purple-500 to-indigo-500",
        badge: "48hr Turnaround",
    },
    {
        title: "Logo & Identity",
        description: "Distinctive visual identities that resonate with your audience and stand the test of time.",
        icon: Palette,
        accent: "from-pink-500 to-rose-500",
        badge: "100% Original",
    },
    {
        title: "Business Websites",
        description: "Fast, SEO-optimized, conversion-focused sites that turn visitors into customers.",
        icon: Globe,
        accent: "from-sky-400 to-blue-500",
        badge: "SEO Optimized",
    },
    {
        title: "Landing Pages",
        description: "High-converting landing pages designed to maximize your marketing ROI.",
        icon: MousePointer2,
        accent: "from-amber-400 to-orange-500",
        badge: "40% Conversion",
    },
    {
        title: "SEO & Content",
        description: "Data-driven strategies to dominate search results and drive organic traffic.",
        icon: Megaphone,
        accent: "from-emerald-400 to-green-500",
        badge: "3-Month Results",
    },
    {
        title: "Paid Advertising",
        description: "Strategic ad campaigns on Google, Meta, and LinkedIn that scale your revenue.",
        icon: BarChart,
        accent: "from-brand-blue to-brand-cyan",
        badge: "$2.5M+ Managed",
    },
];

export function Services() {
    const router = useRouter();

    const handleLearnMore = () => {
        router.push('/contact');
    };

    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-purple font-semibold tracking-wider uppercase text-sm">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Complete Digital Solutions
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Everything your brand needs to thrive online, powered by AI and human creativity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group glass-card p-8 rounded-3xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,242,255,0.2)] hover:border-brand-cyan/50"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent === "from-brand-blue to-brand-cyan" ? "from-brand-cyan to-brand-purple" : service.accent} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-white/10 group-hover:bg-brand-cyan/20 transition-colors">
                                    {service.badge}
                                </span>
                                <Button
                                    variant="ghost"
                                    className="text-brand-purple hover:text-brand-cyan hover:bg-transparent p-0 flex items-center gap-2"
                                    onClick={handleLearnMore}
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
