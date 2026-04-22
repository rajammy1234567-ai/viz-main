"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Sample portfolio data - using placeholders
const portfolioItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        title: "Neon Abstract",
        category: "AI Art",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1549411986-7b44766b68a6?q=80&w=2670&auto=format&fit=crop",
        title: "Modern Architecture",
        category: "Photography",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c15?q=80&w=2670&auto=format&fit=crop",
        title: "Color Splash",
        category: "Digital Art",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
        title: "Fluid Gradient",
        category: "Motion Design",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop",
        title: "Abstract Shapes",
        category: "3D Design",
    }
];

export function PortfolioScroll() {
    const targetRef = useRef<HTMLDivElement>(null);

    // Use scroll progress for horizontal movement
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], // Triggers when section enters/leaves view
    });

    // Map vertical scroll to horizontal scroll
    // Adjust these values to control scroll speed and direction
    // This moves the slider to the left as you scroll down
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="py-24 bg-white dark:bg-slate-50 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-navy-900 mb-6">
                    Inspiring Client Creations
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-600 max-w-2xl mx-auto">
                    A showcase of our finest work, driven by innovation and creativity.
                </p>
            </div>

            <div className="relative w-full">
                <motion.div
                    style={{ x }}
                    className="flex gap-8 px-6 w-max"
                >
                    {/* Duplicate items for infinite scroll effect feel */}
                    {[...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative group w-[300px] md:w-[400px] h-[250px] md:h-[300px] rounded-[32px] overflow-hidden flex-shrink-0 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Optional: Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-white text-sm font-medium uppercase tracking-wider mb-1">
                                    {item.category}
                                </span>
                                <h3 className="text-white text-2xl font-bold">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
