"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Eye, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const VisionMission = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const visionRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Vision Reveal
            gsap.fromTo(
                visionRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: visionRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Mission Reveal
            gsap.fromTo(
                missionRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: missionRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* Vision Section */}
                    <div ref={visionRef} className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                                <Eye className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                To become the global standard for modern accommodation management,
                                bridging the gap between property owners and tenants through
                                intelligent, seamless, and transparent technology.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Globalizing smart living standards',
                                    'Fostering trust through transparency',
                                    'Leading the digital hospitality revolution'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div ref={missionRef} className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
                                <Rocket className="w-8 h-8 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                To empower property owners with tools that automate mundane tasks,
                                increase operational efficiency, and provide tenants with a
                                premium, hassle-free living experience they deserve.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Empowering 10,000+ property owners',
                                    'Automating 90% of manual processes',
                                    'Enhancing tenant satisfaction worldwide'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
