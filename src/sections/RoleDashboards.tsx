import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  User,
  Users,
  LayoutDashboard,
  Settings,
  BarChart3,
  Bell,
  FileText,
  MessageSquare,
  CreditCard,
  Wrench,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    id: 'admin',
    title: 'Admin Login',
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-indigo-50',
    icon: ShieldCheck,
    description: 'Complete control over the entire system',
    features: [
      { icon: LayoutDashboard, text: 'Full system control & overview' },
      { icon: Settings, text: 'Manage PG settings & configurations' },
      { icon: Users, text: 'Manage managers & role-based access' },
      { icon: BarChart3, text: 'Advanced reports and analytics' },
      { icon: ShieldCheck, text: 'Security & compliance management' },
    ],
    stats: [
      { label: 'Total Revenue', value: '₹12.5L', change: '+15%' },
      { label: 'Occupancy Rate', value: '94%', change: '+5%' },
      { label: 'Active Tenants', value: '248', change: '+12' },
    ],
  },
  {
    id: 'manager',
    title: 'Manager Login',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    icon: User,
    description: 'Day-to-day operations management',
    features: [
      { icon: Users, text: 'Add/update tenant information' },
      { icon: LayoutDashboard, text: 'Allocate rooms & beds' },
      { icon: CreditCard, text: 'Track rent collection' },
      { icon: Wrench, text: 'Handle complaints & maintenance' },
      { icon: Bell, text: 'Send notices & reminders' },
    ],
    stats: [
      { label: 'Pending Dues', value: '₹45K', change: '-8%' },
      { label: 'New Requests', value: '12', change: '+3' },
      { label: 'Today\'s Tasks', value: '8', change: '2 done' },
    ],
  },
  {
    id: 'tenant',
    title: 'Tenant Login',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    icon: Users,
    description: 'Self-service portal for tenants',
    features: [
      { icon: CreditCard, text: 'View rent details & payment history' },
      { icon: Wrench, text: 'Raise complaints & track status' },
      { icon: Bell, text: 'View notices & reminders' },
      { icon: FileText, text: 'Access profile and documents' },
      { icon: MessageSquare, text: 'Chat with management' },
    ],
    stats: [
      { label: 'Rent Due', value: '₹8,500', change: 'Due in 5 days' },
      { label: 'Complaints', value: '2', change: '1 resolved' },
      { label: 'Notices', value: '3', change: '1 new' },
    ],
  },
];

const RoleDashboards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeRole, setActiveRole] = useState('admin');
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeRoleData = roles.find((r) => r.id === activeRole) || roles[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.role-title',
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

      // Tabs animation
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: tabsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="role-dashboards"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="role-title text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
          >
            <LayoutDashboard className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600">Role-Based Access</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Separate Login for{' '}
            <span className="gradient-text-blue">Everyone</span>
          </h2>

          <p className="text-lg text-slate-600">
            Dedicated portals for Admin, Manager, and Tenant ensure smooth communication and operations.
          </p>
        </div>

        {/* Role Tabs */}
        <div
          ref={tabsRef}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {roles.map((role) => (
            <motion.button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeRole === role.id
                  ? 'text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeRole === role.id && (
                <motion.div
                  layoutId="activeRoleBg"
                  className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-xl`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <role.icon className="w-5 h-5" />
                {role.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left: Features List */}
              <div className={`${activeRoleData.bgColor} rounded-3xl p-8 lg:p-10`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activeRoleData.color} flex items-center justify-center shadow-lg`}>
                    <activeRoleData.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{activeRoleData.title}</h3>
                    <p className="text-slate-600">{activeRoleData.description}</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {activeRoleData.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeRoleData.color} flex items-center justify-center shrink-0`}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium pt-2">{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Dashboard Preview */}
              <div className="relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${activeRoleData.color} rounded-3xl opacity-10 blur-2xl`} />
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white px-4 py-1.5 rounded-lg text-xs text-slate-400 font-mono shadow-sm border border-slate-200">
                        {activeRole}.staysmart.in
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 bg-slate-50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeRoleData.color} flex items-center justify-center`}>
                          <activeRoleData.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-slate-800">{activeRoleData.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-200 rounded-full" />
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {activeRoleData.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="bg-white rounded-xl p-4 shadow-sm border border-slate-100"
                        >
                          <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                          <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                          <div className={`text-xs ${stat.change.startsWith('+') || stat.change.includes('done') || stat.change.includes('resolved') ? 'text-green-500' : 'text-orange-500'}`}>
                            {stat.change}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Activity Feed */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                      <div className="text-sm font-semibold text-slate-800 mb-4">Recent Activity</div>
                      <div className="space-y-3">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${activeRoleData.color} opacity-50`} />
                            <div className="flex-1">
                              <div className="h-3 bg-slate-100 rounded w-3/4 mb-1" />
                              <div className="h-2 bg-slate-50 rounded w-1/2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl border border-slate-100 p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeRoleData.color}`} />
                    <span className="text-sm font-medium text-slate-700">Live Preview</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RoleDashboards;
