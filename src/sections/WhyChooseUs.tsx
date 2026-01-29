import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, AlertTriangle, TrendingUp, Users, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { icon: Clock, text: 'Manual rent tracking causes missed payments' },
  { icon: Users, text: 'Tenant data becomes messy and unorganized' },
  { icon: AlertTriangle, text: 'Rooms/bed availability is hard to manage' },
  { icon: Clock, text: 'Reminders and follow-ups take too much time' },
  { icon: TrendingUp, text: 'Complaints & maintenance tracking becomes difficult' },
];

const solutions = [
  { icon: CheckCircle, text: 'Automated Payments & Reminders', color: 'bg-green-500' },
  { icon: CheckCircle, text: 'Real-time Dashboard & Reports', color: 'bg-blue-500' },
  { icon: CheckCircle, text: 'Organized Tenant Data', color: 'bg-purple-500' },
  { icon: CheckCircle, text: 'Instant Room Availability', color: 'bg-orange-500' },
  { icon: CheckCircle, text: 'Streamlined Complaint Management', color: 'bg-pink-500' },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

      // Left card (problems) animation
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, x: -80, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Right card (solutions) animation
      gsap.fromTo(
        rightCardRef.current,
        { opacity: 0, x: 80, rotateY: 15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stagger list items
      const leftItems = leftCardRef.current?.querySelectorAll('.problem-item');
      const rightItems = rightCardRef.current?.querySelectorAll('.solution-item');

      leftItems?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftCardRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      rightItems?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightCardRef.current,
              start: 'top 75%',
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
      id="why-choose-us"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 lg:mb-20"
        >
          <span className="text-slate-900">Managing a PG is Hard </span>
          <span className="relative inline-block">
            <span className="text-slate-400">Without a System</span>
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path
                d="M2 4C50 1 150 1 198 4"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 4"
              />
            </svg>
          </span>
          <br />
          <span className="gradient-text-blue">We Make It Simple</span>
        </h2>

        {/* Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Problems Card */}
          <div
            ref={leftCardRef}
            className="relative group"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white rounded-2xl p-8 lg:p-10 border-2 border-red-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Without Our System</h3>
                  <p className="text-sm text-slate-500">The old way of managing</p>
                </div>
              </div>

              {/* Problems List */}
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li
                    key={index}
                    className="problem-item flex items-start gap-4 p-4 rounded-xl bg-red-50/50 hover:bg-red-50 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <problem.icon className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-slate-700 font-medium">{problem.text}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                  BEFORE
                </span>
              </div>
            </div>
          </div>

          {/* Solutions Card */}
          <div
            ref={rightCardRef}
            className="relative group"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white rounded-2xl p-8 lg:p-10 border-2 border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">With StaySmart</h3>
                  <p className="text-sm text-slate-500">The smart way forward</p>
                </div>
              </div>

              {/* Solutions List */}
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    className="solution-item flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 transition-all duration-300 group/item"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <div className={`w-8 h-8 ${solution.color} rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-${solution.color}/30`}>
                      <solution.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-800 font-semibold group-hover/item:text-slate-900 transition-colors">
                      {solution.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-green-100">
                <p className="text-slate-600 text-sm mb-4">
                  Transform your PG management with our all-in-one digital solution.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                >
                  Start Your Transformation
                </motion.button>
              </div>

              {/* Decorative */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-bold">
                  AFTER
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'PG Owners' },
                { value: '50K+', label: 'Tenants Managed' },
                { value: '99.9%', label: 'Uptime' },
                { value: '4.9/5', label: 'Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
