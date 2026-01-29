import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useInView } from 'framer-motion';
import {
  Clock,
  CheckSquare,
  TrendingUp,
  ThumbsUp,
  Zap,
  BarChart3,
  Award,
  ArrowUpRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Clock,
    title: 'Collect rent on time',
    description: 'Automated reminders ensure timely payments',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: CheckSquare,
    title: 'Reduce manual work',
    description: 'Digital register for maintenance issues',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Instant availability',
    description: 'Real-time room and bed status',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ThumbsUp,
    title: 'Organized records',
    description: 'Keep tenant data structured and accessible',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Professional management',
    description: 'Digital system builds trust and credibility',
    color: 'from-pink-500 to-pink-600',
  },
];

const stats = [
  { value: 10, suffix: 'h+', label: 'Saved Weekly', icon: Clock, color: 'from-emerald-400 to-emerald-600' },
  { value: 99, suffix: '%', label: 'Rent Collection', icon: TrendingUp, color: 'from-blue-400 to-blue-600' },
  { value: 95, suffix: '%', label: 'Tenant Satisfaction', icon: ThumbsUp, color: 'from-purple-400 to-purple-600' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Benefit items stagger
      const items = contentRef.current?.querySelectorAll('.benefit-item');
      items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
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
      id="benefits"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <Award className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600">Why Choose Us</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Save Time, Increase
              <br />
              <span className="gradient-text-blue">Collections & Improve</span>
              <br />
              Tenant Experience
            </h2>

            <p className="text-lg text-slate-600 mb-10">
              Focus on growing your business while we handle the daily chaos of PG management.
              Our platform is designed to make your life easier.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 shrink-0`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div ref={statsRef} className="relative">
            {/* Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Impact Metrics</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                          <stat.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-slate-400 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">Ready to transform?</p>
                      <p className="text-slate-400 text-sm">Join 500+ PG owners</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-slate-100 p-4 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Rahul Sharma</div>
                    <div className="text-xs text-slate-500">PG Owner, Delhi</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  "StaySmart saved me 15 hours every week. Best investment for my PG business!"
                </p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full" />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
