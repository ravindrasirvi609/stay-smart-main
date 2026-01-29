import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  MousePointerClick,
  Settings,
  Rocket,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Book a Demo',
    description: 'Schedule a personalized demo where we understand your PG requirements and show you how StaySmart can help.',
    icon: MousePointerClick,
    color: 'from-blue-500 to-blue-600',
    features: ['Free 30-minute session', 'Personalized walkthrough', 'Q&A with our experts'],
  },
  {
    number: '02',
    title: 'Setup Your PG',
    description: 'We help you configure rooms, rent structure, managers, and set up your custom branding & domain.',
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
    features: ['Room & bed configuration', 'Custom branding setup', 'Domain configuration'],
  },
  {
    number: '03',
    title: 'Start Managing',
    description: 'Tenants can login, you can track rent, send reminders, and generate reports - all from one dashboard.',
    icon: Rocket,
    color: 'from-pink-500 to-pink-600',
    features: ['Tenant onboarding', 'Rent tracking', 'Automated reminders'],
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Progress line animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Steps animation
      const stepCards = stepsRef.current?.querySelectorAll('.step-card');
      stepCards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 70%',
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
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600">Simple Process</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Start in <span className="gradient-text-blue">3 Simple Steps</span>
          </h2>

          <p className="text-lg text-slate-600">
            Getting started is easier than you think. We'll guide you through every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative max-w-6xl mx-auto">
          {/* Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-card relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {/* Step Number Badge */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                    
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className={`text-sm font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-500 justify-center">
                        <CheckCircle className={`w-4 h-4 bg-gradient-to-br ${step.color} rounded-full text-white`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-6 lg:-right-8 z-10">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center"
                    >
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Ready to get started?</p>
                <p className="text-slate-400 text-sm">Book your free demo today</p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                Book Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors duration-300"
              >
                <Users className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
