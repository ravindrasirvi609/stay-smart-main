"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Features from '@/sections/Features';
import RoleDashboards from '@/sections/RoleDashboards';
import CustomBranding from '@/sections/CustomBranding';
import Benefits from '@/sections/Benefits';
import HowItWorks from '@/sections/HowItWorks';
import Pricing from '@/sections/Pricing';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

// Hooks
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    // Initialize smooth scroll
    useSmoothScroll();

    useEffect(() => {
        // Refresh ScrollTrigger on load
        ScrollTrigger.refresh();

        // Handle resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main>
                <Hero />
                <WhyChooseUs />
                <Features />
                <RoleDashboards />
                <CustomBranding />
                <Benefits />
                <HowItWorks />
                <Pricing />
                <FAQ />
                <CTA />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
