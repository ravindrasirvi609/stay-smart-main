"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Calendar,
    Clock,
    Send,
    CheckCircle,
    Loader2,
    ArrowRight,
    Sparkles,
} from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { format } from 'date-fns';

gsap.registerPlugin(ScrollTrigger);

const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hello@staysmart.in',
        href: 'mailto:hello@staysmart.in',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 81071 99052',
        href: 'tel:+918107199052',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Bangalore, India',
        href: '#',
        color: 'from-orange-500 to-red-500',
    },
];

export default function ContactPage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [calendarOpen, setCalendarOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animation
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            setErrorMessage('Please select a date and time for the demo');
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/schedule-demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    date: format(selectedDate, 'yyyy-MM-dd'),
                    time: selectedTime,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to schedule demo');
            }

            setSubmitStatus('success');
            setFormData({ name: '', email: '', company: '', phone: '', message: '' });
            setSelectedDate(undefined);
            setSelectedTime('');
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navigation />

            <main ref={sectionRef}>
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
                        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-400/15 blur-3xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    </div>

                    <div ref={heroRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm">
                                <Sparkles className="w-4 h-4 text-purple-500" />
                                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Get in Touch
                                </span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight mb-6">
                            <span className="text-slate-900">Let&apos;s Talk About </span>
                            <span className="gradient-text-blue">Your PG</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-12">
                            Schedule a personalized demo and discover how StaySmart can transform your PG management.
                        </p>

                        {/* Contact Cards */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-sm font-medium text-slate-500 mb-1">{item.label}</h3>
                                    <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Schedule Demo Form Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Glow Effect */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl pointer-events-none" />

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Form Card */}
                                <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-100">
                                    {/* Header */}
                                    <div className="text-center mb-10">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                                            <Calendar className="w-4 h-4" />
                                            Schedule a Demo
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                                            Book Your Free Demo Session
                                        </h2>
                                        <p className="text-slate-600">
                                            Choose a convenient time and we&apos;ll show you everything StaySmart can do.
                                        </p>
                                    </div>

                                    {submitStatus === 'success' ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                        >
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Demo Scheduled!</h3>
                                            <p className="text-slate-600 mb-6">
                                                We&apos;ve received your request. Our team will reach out shortly to confirm your demo.
                                            </p>
                                            <Button
                                                onClick={() => setSubmitStatus('idle')}
                                                variant="outline"
                                                className="gap-2"
                                            >
                                                Schedule Another Demo
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                                            {/* Personal Info */}
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name *</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="John Doe"
                                                        required
                                                        className="h-12"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email Address *</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="john@example.com"
                                                        required
                                                        className="h-12"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">Company / PG Name</Label>
                                                    <Input
                                                        id="company"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        placeholder="Your PG Name"
                                                        className="h-12"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="+91 81071 99052"
                                                        className="h-12"
                                                    />
                                                </div>
                                            </div>

                                            {/* Date & Time Selection */}
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label>Preferred Date *</Label>
                                                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                className="w-full h-12 justify-start text-left font-normal"
                                                            >
                                                                <Calendar className="mr-2 h-4 w-4" />
                                                                {selectedDate ? format(selectedDate, 'PPP') : 'Select a date'}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <CalendarComponent
                                                                mode="single"
                                                                selected={selectedDate}
                                                                onSelect={(date) => {
                                                                    setSelectedDate(date);
                                                                    setCalendarOpen(false);
                                                                }}
                                                                disabled={(date) => date < new Date() || date.getDay() === 0}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Preferred Time *</Label>
                                                    <div className="grid grid-cols-4 gap-2">
                                                        {timeSlots.map((time) => (
                                                            <button
                                                                key={time}
                                                                type="button"
                                                                onClick={() => setSelectedTime(time)}
                                                                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all ${selectedTime === time
                                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                                                                    }`}
                                                            >
                                                                {time}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Additional Notes</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Tell us about your PG, number of rooms, current challenges, etc."
                                                    rows={4}
                                                    className="resize-none"
                                                />
                                            </div>

                                            {/* Error Message */}
                                            {submitStatus === 'error' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                                                >
                                                    {errorMessage}
                                                </motion.div>
                                            )}

                                            {/* Submit Button */}
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all rounded-xl"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                            Scheduling...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="mr-2 h-5 w-5" />
                                                            Schedule Demo
                                                        </>
                                                    )}
                                                </Button>
                                            </motion.div>

                                            {/* Trust Indicators */}
                                            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-slate-500 text-sm">
                                                <span className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    Free consultation
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    No commitment
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-green-500" />
                                                    30-minute session
                                                </span>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
