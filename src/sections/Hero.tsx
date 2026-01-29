import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(dashboardRef.current, {
        opacity: 0,
        y: 100,
        rotateX: 15,
        scale: 0.9,
      });

      // Main timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.5')
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6')
        .to(buttonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .to(dashboardRef.current, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
        }, '-=0.4');

      // Floating orbs animation
      const orbs = orbsRef.current?.querySelectorAll('.orb');
      orbs?.forEach((orb, i) => {
        gsap.to(orb, {
          y: `random(-30, 30)`,
          x: `random(-20, 20)`,
          duration: `random(3, 5)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5,
        });
      });

      // Dashboard parallax on scroll
      gsap.to(dashboardRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Animated Background Orbs */}
      <div ref={orbsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="orb absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-400/15 blur-3xl" />
        <div className="orb absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            ref={badgeRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                New: Advanced Reports Dashboard
              </span>
              <Sparkles className="w-4 h-4 text-purple-500" />
            </div>
          </motion.div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] mb-6"
          >
            <span className="text-slate-900">Run Your PG </span>
            <span className="relative inline-block">
              <span className="gradient-text-blue">Smartly</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path
                  d="M2 8C50 2 150 2 298 8"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="text-slate-600 font-medium">Manage Rooms, Tenants & Rent</span>
            <br />
            <span className="text-slate-400 font-normal text-3xl sm:text-4xl md:text-5xl">in One Place</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A complete PG / Hostel Management System with{' '}
            <span className="font-semibold text-slate-800">Tenant Login</span>,{' '}
            <span className="font-semibold text-slate-800">Manager Login</span> &{' '}
            <span className="font-semibold text-slate-800">Admin Panel</span>.
            Get custom branding + your own domain and manage everything from anywhere.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 rounded-xl"
              >
                <Play className="mr-2 h-5 w-5 fill-current" />
                Book Free Demo
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-700 rounded-xl transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            {[
              { icon: Zap, text: 'Easy to use' },
              { icon: Shield, text: 'Secure' },
              { icon: Sparkles, text: 'Mobile friendly' },
              { icon: Zap, text: 'Fast setup' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 text-sm font-medium text-slate-500"
              >
                <item.icon className="w-4 h-4 text-blue-500" />
                {item.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard Preview */}
          <div
            ref={dashboardRef}
            className="relative max-w-5xl mx-auto perspective-1000"
            style={{ perspective: '1000px' }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />
            
            {/* Dashboard Container */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-200/60">
              {/* Browser Chrome */}
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white px-4 py-1.5 rounded-lg text-xs text-slate-400 font-mono shadow-sm border border-slate-200">
                    dashboard.staysmart.com
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-slate-50">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4" />
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-8 bg-slate-100 rounded-lg" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="col-span-9 space-y-4">
                    {/* Header */}
                    <div className="h-16 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-4 justify-between">
                      <div className="flex gap-2">
                        <div className="w-24 h-8 bg-slate-100 rounded-lg" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-slate-100 rounded-full" />
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
                      </div>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { color: 'from-blue-500 to-blue-600', label: 'Total Tenants' },
                        { color: 'from-green-500 to-green-600', label: 'Occupancy' },
                        { color: 'from-purple-500 to-purple-600', label: 'Revenue' },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                          className="bg-white rounded-xl shadow-sm border border-slate-100 p-4"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg mb-3`} />
                          <div className="h-4 w-20 bg-slate-100 rounded mb-2" />
                          <div className="h-6 w-16 bg-slate-200 rounded" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Chart Area */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 h-48">
                      <div className="flex items-end justify-between h-full gap-2 px-4">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 1.8 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md opacity-80"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 top-1/4 bg-white rounded-xl shadow-xl border border-slate-100 p-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Rent Collected</div>
                  <div className="text-xs text-green-600">+12.5%</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-6 bottom-1/4 bg-white rounded-xl shadow-xl border border-slate-100 p-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Secure</div>
                  <div className="text-xs text-slate-500">256-bit SSL</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
