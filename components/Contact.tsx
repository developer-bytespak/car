'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-dark-mid" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,174,239,0.06),transparent_60%)]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,106,0,0.04),transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-14">
          <span className="text-neon-blue text-[11px] tracking-[3px] font-bold uppercase">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-white mt-3">
            BOOK YOUR <span className="text-neon-orange text-neon-orange-glow">DETAIL</span>
          </h2>
          <p className="text-slate-500 text-base mt-3">
            Fill in your info and we&apos;ll get back to you ASAP.
          </p>
          <div className="glow-divider max-w-[200px] mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info cards */}
          <AnimatedSection variant="fade-left" className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: 'Call Us', value: '(555) 123-4567', color: '#FF6A00' },
              { icon: Mail, label: 'Email Us', value: 'info@superiorshinedetailing.com', color: '#00AEEF' },
              { icon: MapPin, label: 'Service Area', value: 'Local & Surrounding Areas', color: '#22c55e' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4, borderColor: `${item.color}30` }}
                  className="glass-card rounded-xl p-5 flex items-center gap-4 transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <span className="text-slate-600 text-[10px] tracking-[2px] uppercase block">{item.label}</span>
                    <span className="text-slate-300 text-sm">{item.value}</span>
                  </div>
                </motion.div>
              )
            })}

            {/* Operating hours */}
            <div className="glass-card rounded-xl p-5">
              <span className="text-slate-600 text-[10px] tracking-[2px] uppercase block mb-3">Hours</span>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Mon – Sat</span>
                  <span className="text-white font-medium">7 AM – 7 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Sunday</span>
                  <span className="text-slate-600">By Appointment</span>
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
                className="glass-card rounded-2xl p-12 text-center"
                style={{ borderColor: 'rgba(34,197,94,0.2)' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-green-400 text-2xl">✓</span>
                </motion.div>
                <h3 className="text-white text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-slate-400 text-sm">
                  We&apos;ve received your info. We&apos;ll reach out shortly to confirm your booking.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="glass-card rounded-2xl p-7 md:p-9 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="text-slate-500 text-[11px] tracking-[2px] uppercase block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="glow-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-700 outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-slate-500 text-[11px] tracking-[2px] uppercase block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="glow-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-700 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-slate-500 text-[11px] tracking-[2px] uppercase block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="glow-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-700 outline-none"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-slate-500 text-[11px] tracking-[2px] uppercase block mb-2">
                    Select Package
                  </label>
                  <select className="glow-input w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none appearance-none cursor-pointer">
                    <option value="" className="bg-dark-bg">Choose a package...</option>
                    <option value="basic" className="bg-dark-bg">Basic Shine — $99</option>
                    <option value="premium" className="bg-dark-bg">Premium Detail — $189</option>
                    <option value="ultimate" className="bg-dark-bg">Ultimate Detail — $299+</option>
                  </select>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(255,106,0,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full btn-shine bg-gradient-to-r from-neon-orange-dim via-neon-orange to-fire-light text-white rounded-xl py-4 text-sm font-bold tracking-[2px] flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,106,0,0.15)] mt-2"
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
