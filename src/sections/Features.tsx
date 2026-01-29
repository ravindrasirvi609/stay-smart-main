import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  BedDouble,
  Users,
  IndianRupee,
  Bell,
  AlertCircle,
  BarChart3,
  Shield,
  Zap,
  FileText,
  MessageSquare,
  Settings,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Room & Bed Management',
    description: 'Manage room types, beds, occupancy, availability & allocations with an intuitive drag-and-drop interface.',
    icon: BedDouble,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
  },
  {
    title: 'Tenant Management',
    description: 'Store tenant profiles, documents, joining/leaving dates, and contact details in one secure place.',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
  },
  {
    title: 'Rent & Payment Tracking',
    description: 'Track monthly rent, deposits, dues, payment status, and auto-generate receipts instantly.',
    icon: IndianRupee,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
  },
  {
    title: 'Automatic Reminders',
    description: 'Send automated reminders for rent due, late payments & lease renewals via SMS and email.',
    icon: Bell,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
  },
  {
    title: 'Complaints & Maintenance',
    description: 'Tenants can raise issues and managers can track resolution status in real-time.',
    icon: AlertCircle,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100',
  },
  {
    title: 'Reports & Dashboard',
    description: 'View collections, pending dues, occupancy rate, and performance reports with beautiful charts.',
    icon: BarChart3,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
  },
  {
    title: 'Document Management',
    description: 'Securely store and manage tenant documents, agreements, and ID proofs with encryption.',
    icon: FileText,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-100',
  },
  {
    title: 'Communication Hub',
    description: 'Built-in messaging system for seamless communication between tenants and managers.',
    icon: MessageSquare,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100',
  },
  {
    title: 'Custom Settings',
    description: 'Configure rent cycles, late fees, notice periods, and other PG-specific settings.',
    icon: Settings,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">Powerful Features</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text-blue">Manage Your PG</span>
          </h2>

          <p className="text-lg text-slate-600">
            Powerful core modules designed to digitize your operations and streamline your workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature-card group relative bg-white rounded-2xl p-6 lg:p-8 border ${feature.borderColor} hover:border-transparent transition-all duration-500`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {/* Hover Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Enterprise-grade security</p>
              <p className="text-slate-400 text-sm">Your data is encrypted and protected 24/7</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              View All Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
