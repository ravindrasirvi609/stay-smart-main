"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections
import Navigation from '@/sections/Navigation';
import AboutHero from '@/sections/AboutHero';
import VisionMission from '@/sections/VisionMission';
import AboutContent from '@/sections/AboutContent';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

// Hooks
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
                <AboutHero />
                <VisionMission />
                <AboutContent />
                <CTA />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
