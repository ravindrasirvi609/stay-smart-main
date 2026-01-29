import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  HelpCircle,
  IndianRupee,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
// Button component not used

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Complete PG management for daily operations',
    price: 35,
    period: '/bed/month',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: Zap,
    popular: false,
    features: [
      'Rooms & Bed Management',
      'Tenant Management',
      'Rent & Due Tracking',
      'Payment History',
      'Automated Rent Reminders',
      'Complaints / Maintenance Tracking',
      'Tenant Login + Manager Login',
      'Dashboard & Reports',
      'Email Support',
      'Basic Analytics',
    ],
    cta: 'Start Standard',
    ctaVariant: 'outline' as const,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Custom branding + your own domain for a premium PG',
    price: 50,
    period: '/bed/month',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: Crown,
    popular: true,
    features: [
      'Everything in Standard',
      'Custom Branding (Logo + Colors + PG Name)',
      'Custom Domain Support (yourpgname.com)',
      'SSL + Secure Website Setup',
      'Branded Tenant Portal',
      'Priority Support (24/7)',
      'Advanced Analytics',
      'API Access',
      'Dedicated Account Manager',
      'White-label Solution',
    ],
    cta: 'Get Premium',
    ctaVariant: 'default' as const,
  },
];

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [, setHoveredPlan] = useState<string | null>(null);
  const router = useRouter();

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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="pricing"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6"
          >
            <IndianRupee className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-600">Transparent Pricing</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="gradient-text-blue">StaySmart</span> Pricing
          </h2>

          <p className="text-lg text-slate-600">
            Simple, transparent & scalable pricing for every PG.
            <br />
            Pay only for the beds you manage — <strong>upgrade anytime.</strong>
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`pricing-card relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </motion.div>
                </div>
              )}

              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${plan.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${plan.popular ? 'opacity-10' : ''
                  }`}
              />

              {/* Card */}
              <motion.div
                className={`relative h-full bg-white rounded-2xl p-8 lg:p-10 border-2 ${plan.popular ? 'border-purple-200 shadow-2xl' : 'border-slate-200 shadow-lg'
                  } hover:border-transparent transition-all duration-500`}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-slate-500 text-sm">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      ₹{plan.price}
                    </span>
                    <span className="text-slate-500 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    Billed monthly. No hidden fees.
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/contact')}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg mb-8 flex items-center justify-center gap-2 transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
                      : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                {/* Features */}
                <div className="border-t border-slate-100 pt-8">
                  <p className="text-sm font-semibold text-slate-900 mb-4">
                    {plan.popular ? 'Everything in Standard, plus:' : 'What\'s included:'}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className={`text-sm ${plan.popular && index < 1 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Help Text */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
                  <HelpCircle className="w-4 h-4" />
                  <span>Need help choosing? <button onClick={() => router.push('/contact')} className="text-blue-500 hover:underline">Contact us</button></span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-slate-900">
            <div className="text-left">
              <p className="text-white font-semibold">Managing 100+ beds?</p>
              <p className="text-slate-400 text-sm">Get custom enterprise pricing</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
              className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
