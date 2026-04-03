'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden bg-light-bg">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-14">
          <span className="text-brand-blue text-[11px] tracking-[3px] font-bold uppercase">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-heading mt-3">
            BOOK YOUR <span className="text-brand-orange">DETAIL</span>
          </h2>
          <p className="text-body text-base mt-3">
            Fill in your info and we&apos;ll get back to you ASAP.
          </p>
          <div className="section-divider max-w-[200px] mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info cards */}
          <AnimatedSection variant="fade-left" className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: 'Call Us', value: '(555) 123-4567', color: '#F97316' },
              { icon: Mail, label: 'Email Us', value: 'info@superiorshinedetailing.com', color: '#0EA5E9' },
              { icon: MapPin, label: 'Service Area', value: 'Local & Surrounding Areas', color: '#22c55e' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4, borderColor: `${item.color}30` }}
                  className="bg-white border border-light-border rounded-xl p-5 flex items-center gap-4 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <span className="text-muted text-[10px] tracking-[2px] uppercase block">{item.label}</span>
                    <span className="text-heading text-sm">{item.value}</span>
                  </div>
                </motion.div>
              )
            })}

            {/* Operating hours */}
            <div className="bg-white border border-light-border rounded-xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.04)]">
              <span className="text-muted text-[10px] tracking-[2px] uppercase block mb-3">Hours</span>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-body">Mon – Sat</span>
                  <span className="text-heading font-medium">7 AM – 7 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-body">Sunday</span>
                  <span className="text-muted">By Appointment</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection variant="fade-right" delay={0.15} className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-green-200 rounded-2xl p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-green-500 text-2xl">&#10003;</span>
                </motion.div>
                <h3 className="text-heading text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-body text-sm">
                  We&apos;ve received your info. We&apos;ll reach out shortly to confirm your booking.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="bg-white border border-light-border rounded-2xl p-7 md:p-9 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                {/* Name */}
                <div>
                  <label className="text-body text-[11px] tracking-[2px] uppercase block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="light-input w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-heading text-sm placeholder-muted outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-body text-[11px] tracking-[2px] uppercase block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="light-input w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-heading text-sm placeholder-muted outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-body text-[11px] tracking-[2px] uppercase block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="light-input w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-heading text-sm placeholder-muted outline-none"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-body text-[11px] tracking-[2px] uppercase block mb-2">
                    Select Package
                  </label>
                  <select className="light-input w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-heading text-sm outline-none appearance-none cursor-pointer">
                    <option value="">Choose a package...</option>
                    <option value="basic">Basic Shine — $99</option>
                    <option value="premium">Premium Detail — $189</option>
                    <option value="ultimate">Ultimate Detail — $299+</option>
                  </select>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(249,115,22,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full btn-shine bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl py-4 text-sm font-bold tracking-[2px] flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(249,115,22,0.2)] mt-2"
                >
                  <Send size={15} />
                  BOOK NOW
                </motion.button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
