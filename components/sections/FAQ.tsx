"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "How does AI help?",
        answer: "AI accelerates interaction, automates repetitive tasks, and provides data-driven insights to optimize your digital strategy for better results."
    },
    {
        question: "Why choose us?",
        answer: "We combine award-winning design with cutting-edge AI technology to deliver faster, smarter, and more effective digital solutions than traditional agencies."
    },
    {
        question: "What is your process?",
        answer: "Our process involves Discovery, Strategy, Creation, Launch, and Growth. We maintain transparency at every step with regular updates and milestone tracking."
    },
    {
        question: "How to start?",
        answer: "Simply book a free consultation call or fill out our contact form. We'll discuss your goals and propose a tailored roadmap for your success."
    },
    {
        question: "What services do you offer?",
        answer: "We offer complete digital solutions including AI Brand Videos, Web Design & Development, SEO & Content Marketing, and Paid Advertising Management."
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Find answers to common questions about our services and solutions.
                        </p>
                    </motion.div>

                    {/* Right Column - Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8"
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                                    <AccordionTrigger className="text-xl font-medium text-slate-900 hover:text-brand-cyan hover:no-underline py-6 text-left">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
