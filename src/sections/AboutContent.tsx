"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Zap, Globe, MessageSquare, Award } from 'lucide-react';

const values = [
    {
        icon: ShieldCheck,
        title: 'Trust & Security',
        description: 'We prioritize your data security and financial transparency above all else.',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        icon: Heart,
        title: 'User Centric',
        description: 'Every feature we build is designed with the actual user experience in mind.',
        color: 'text-red-500',
        bg: 'bg-red-50'
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'We continuously evolve our platform to meet the needs of tomorrow.',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50'
    },
    {
        icon: Globe,
        title: 'Integrity',
        description: 'Honesty and reliability are the foundation of everything we do.',
        color: 'text-green-500',
        bg: 'bg-green-50'
    },
    {
        icon: MessageSquare,
        title: 'Open Communication',
        description: 'We believe in clear channels between management and residents.',
        color: 'text-purple-500',
        bg: 'bg-purple-50'
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We strive for the highest quality in every line of code we write.',
        color: 'text-cyan-500',
        bg: 'bg-cyan-50'
    }
];

const AboutContent = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Our Story Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
                    <p className="text-lg text-slate-600">
                        The principles that guide us every day in our quest to
                        redefine property management.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 ${value.bg} ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 lg:p-16 rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-indigo-950 text-white relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">The StaySmart Journey</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            Founded by hospitality experts and tech enthusiasts, StaySmart was born out of
                            frustration with outdated management systems. Today, we're proud to help hundreds
                            of property owners reclaim their time and provide better homes for their tenants.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <span className="font-bold text-blue-400">100+</span>
                                <span className="ml-2 text-slate-300">Properties</span>
                            </div>
                            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <span className="font-bold text-purple-400">15,000+</span>
                                <span className="ml-2 text-slate-300">Daily Users</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/30 rounded-full blur-[100px]" />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutContent;
