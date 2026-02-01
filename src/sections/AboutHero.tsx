"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Rocket } from 'lucide-react';

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      // Simple parallax for background elements
      gsap.to('.hero-blob', {
        y: (i, target) => -50 * (i + 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-blob absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="hero-blob absolute top-[40%] -right-[10%] w-[50%] h-[70%] bg-purple-100/40 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="hero-blob absolute -bottom-[20%] left-[20%] w-[30%] h-[50%] bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 border border-blue-100 shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>Innovating Hospitality Management</span>
        </motion.div>

        <div ref={textRef}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Revolutionizing the <br />
            <span className="gradient-text-blue">Living Experience</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            StaySmart is more than just a software; it's a vision to digitalize and simplify 
            property management for a smarter, more connected world.
          </p>
        </div>

        {/* Floating cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { icon: Users, label: 'Community Focused', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: Target, label: 'Vision Driven', color: 'text-purple-500', bg: 'bg-purple-50' },
            { icon: Rocket, label: 'Future Ready', color: 'text-cyan-500', bg: 'bg-cyan-50' },
            { icon: Sparkles, label: 'Tech Enabled', color: 'text-indigo-500', bg: 'bg-indigo-50' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center gap-3 hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-700">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
