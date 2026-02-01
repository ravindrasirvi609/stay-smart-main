"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft } from 'lucide-react';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface LegalLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
    lastUpdated?: string;
}

export default function LegalLayout({ title, description, children, lastUpdated }: LegalLayoutProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    // Initialize smooth scroll
    useSmoothScroll();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animation
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                }
            );

            // Fade in content
            gsap.fromTo(
                '.legal-content',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.legal-content',
                        start: 'top 80%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navigation />

            <main ref={sectionRef}>
                {/* Hero Section */}
                <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl" />
                        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 blur-3xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>

                    <div ref={heroRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Back Link */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Home</span>
                        </Link>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex mb-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm">
                                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                                    StaySmart Legal
                                </span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                            <span className="gradient-text-blue">{title}</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl mb-4">
                            {description}
                        </p>

                        {lastUpdated && (
                            <p className="text-sm text-slate-400 font-medium">
                                Last Updated: {lastUpdated}
                            </p>
                        )}
                    </div>
                </section>

                {/* Content Section */}
                <section className="relative py-12 lg:py-20 bg-slate-50/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto legal-content">
                            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/60 prose prose-slate prose-blue max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
