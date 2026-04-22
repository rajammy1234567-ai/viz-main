"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "h-16 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-md"
                : "h-[72px] bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center ml-[-146px] gap-2 group">
                    <div className="relative top-[21px] w-[182px] h-[100px] transition-transform group-hover:scale-110">
                        <Image
                            src="/v2_logo.png"
                            alt="VIZ Digital Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl mt-[26px] ml-[-31px] font-bold tracking-tight text-foreground">
                        VIZ<span className="text-brand-cyan">DIGIT</span><span className="text-brand-purple">"ALL"</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-muted-foreground hover:text-brand-cyan transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-cyan after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button
                            className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-brand-cyan to-brand-purple hover:from-brand-purple hover:to-brand-cyan shadow-lg hover:shadow-brand-cyan/25 transition-all duration-300 hover:scale-105 border-0"
                        >
                            Get Quote
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-8 mt-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-semibold text-foreground hover:text-brand-cyan transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" className="w-full">
                                <Button
                                    className="w-full rounded-full py-6 text-lg font-semibold bg-gradient-to-r from-brand-cyan to-brand-purple hover:from-brand-purple hover:to-brand-cyan shadow-lg"
                                >
                                    Get Quote
                                </Button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
