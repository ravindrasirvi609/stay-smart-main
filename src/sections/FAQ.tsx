import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Can I use my own domain?',
    answer: 'Yes! With our Premium plan, you can use your own custom domain (like www.yourpgname.com). We provide free SSL certificate and handle all the technical setup for you. Your tenants will see a fully branded experience with your PG name and logo.',
  },
  {
    question: 'Can I add multiple managers?',
    answer: 'Absolutely! You can create unlimited manager accounts with role-based access control. Each manager can be assigned specific permissions - some can manage rent collection, others can handle complaints, and you have full control over what each manager can access.',
  },
  {
    question: 'Is tenant data secure?',
    answer: 'Security is our top priority. We use bank-grade 256-bit SSL encryption, secure authentication, and regular security audits. All data is stored in ISO-certified data centers with 99.9% uptime guarantee. We are GDPR compliant and never share your data with third parties.',
  },
  {
    question: 'Can tenants see their rent history?',
    answer: 'Yes, tenants have access to their own portal where they can view complete rent history, payment receipts, due amounts, and payment status. They can also download receipts and track their payment history over time.',
  },
  {
    question: 'Do you provide support & onboarding?',
    answer: 'We provide comprehensive onboarding support including data migration assistance, training sessions for your team, and dedicated support. Standard plan includes email support, while Premium plan includes 24/7 priority support with a dedicated account manager.',
  },
  {
    question: 'What happens if I want to cancel?',
    answer: 'You can cancel anytime with no questions asked. We believe in earning your business every month. If you cancel, you can export all your data and take it with you. There are no long-term contracts or hidden cancellation fees.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you get immediate access to premium features. When you downgrade, the changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Our platform is fully responsive and works great on mobile browsers. We also offer progressive web app (PWA) support, so you can install it on your phone like a native app. Native iOS and Android apps are coming soon!',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      // FAQ items animation
      const items = sectionRef.current?.querySelectorAll('.faq-item');
      items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">Got Questions?</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="gradient-text-blue">Questions</span>
          </h2>

          <p className="text-lg text-slate-600">
            Everything you need to know about StaySmart. Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === index
                    ? 'border-blue-300 shadow-lg shadow-blue-500/10'
                    : 'border-slate-200 hover:border-blue-200 hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-semibold pr-4 transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-slate-900'
                    }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-100 text-slate-500'
                      }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">Still have questions?</p>
                <p className="text-slate-400">We're here to help you</p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.a
                href="mailto:support@staysmart.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
              <motion.a
                href="tel:+918107199052"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
