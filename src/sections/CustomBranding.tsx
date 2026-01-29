import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  Globe,
  Layout,
  Palette,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Shield,
  Zap,
  Star,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const brandingFeatures = [
  {
    icon: Globe,
    title: 'Your Custom Domain',
    description: 'Get your own professional domain like www.YourPGName.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Layout,
    title: 'Your PG Name & Logo',
    description: 'Fully branded tenant portal and admin interface with your identity',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Palette,
    title: 'Your Theme Colors',
    description: 'Customize the look and feel to match your brand perfectly',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'SSL Certificate Included',
    description: 'Free SSL certificate for secure HTTPS connections',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Zap,
    title: 'Fast CDN Delivery',
    description: 'Global CDN ensures fast loading times worldwide',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Star,
    title: 'SEO Optimized',
    description: 'Built-in SEO features to help tenants find you online',
    color: 'from-pink-500 to-pink-600',
  },
];

const CustomBranding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftContentRef.current,
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

      // Right content (browser mockup) animation
      gsap.fromTo(
        rightContentRef.current,
        { opacity: 0, x: 60, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Feature items stagger
      const features = leftContentRef.current?.querySelectorAll('.branding-feature');
      features?.forEach((feature, i) => {
        gsap.fromTo(
          feature,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
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
      id="custom-branding"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={leftContentRef}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-600">USP: White Label Solution</span>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Your PG Brand,
              <br />
              Your Website,
              <br />
              <span className="gradient-text">Your Domain</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don't just give you dashboard access; we give you a complete brand identity online.
              Stand out from the competition with your own professional presence.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {brandingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="branding-feature group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Browser Mockup */}
          <div
            ref={rightContentRef}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-60" />

            {/* Browser Window */}
            <motion.div
              className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Browser Chrome */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-slate-900 rounded-lg px-4 py-1.5 flex items-center gap-2">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-slate-400 font-mono">www.yourpgname.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </div>
              </div>

              {/* Website Content */}
              <div className="bg-white">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Layout className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold text-lg">Your PG Name</span>
                    </div>
                    <div className="flex gap-4 text-white/80 text-sm">
                      <span>Home</span>
                      <span>Rooms</span>
                      <span>Contact</span>
                      <span className="text-white font-medium">Login</span>
                    </div>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-b from-blue-50 to-white px-6 py-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Welcome to Your PG</h3>
                    <p className="text-slate-600">Premium living spaces with modern amenities</p>
                  </div>

                  {/* Room Cards */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl p-4 shadow-lg border border-slate-100"
                    >
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3" />
                      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-slate-100 rounded w-1/2" />
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl p-4 shadow-lg border border-slate-100"
                    >
                      <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-3" />
                      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-slate-100 rounded w-1/2" />
                    </motion.div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-900 px-6 py-4">
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span>© 2026 Your PG Name. All rights reserved.</span>
                    <div className="flex gap-4">
                      <span>Privacy</span>
                      <span>Terms</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl border border-slate-100 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">SSL Secured</div>
                  <div className="text-xs text-slate-500">HTTPS Enabled</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-slate-100 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Custom Domain</div>
                  <div className="text-xs text-slate-500">yourpgname.com</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBranding;
