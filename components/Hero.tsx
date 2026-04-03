'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/car-is-parked-man-washing-it.jpg')" }}
      />
      {/* Minimal dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 text-center pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] px-5 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-pkg-green animate-slide-dot" />
          <span className="text-brand-blue text-[11px] tracking-[3px] uppercase font-semibold">
            Premium Auto Detailing
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[clamp(56px,10vw,120px)] leading-[0.9] tracking-[4px] text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
        >
          SUPERIOR
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[clamp(56px,10vw,120px)] leading-[0.9] tracking-[4px] text-shimmer mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
        >
          SHINE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="text-white/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10"
        >
        </motion.p>

        {/* Contact pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
        >
          <a
            href="mailto:info@superiorshinedetailing.com"
            className="bg-white/90 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white transition-all group"
          >
            <span className="w-7 h-7 rounded-full bg-brand-blue/10 flex items-center justify-center">
              <Mail size={13} className="text-brand-blue" />
            </span>
            <span className="text-body text-sm group-hover:text-heading transition-colors">info@superiorshinedetailing.com</span>
          </a>
          <a
            href="tel:5551234567"
            className="bg-white/90 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white transition-all group"
          >
            <span className="w-7 h-7 rounded-full bg-brand-orange/10 flex items-center justify-center">
              <Phone size={13} className="text-brand-orange" />
            </span>
            <span className="text-body text-sm group-hover:text-heading transition-colors">(555) 123-4567</span>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#contact"
            className="btn-shine bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full px-10 py-4 text-sm font-bold tracking-widest hover:-translate-y-1 transition-all hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)] text-center"
          >
            BOOK NOW
          </a>
          <a
            href="#packages"
            className="border-2 border-white/80 text-white rounded-full px-9 py-4 text-sm font-semibold hover:bg-white/20 backdrop-blur-sm transition-all text-center"
          >
            VIEW PACKAGES
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-white/50" />
      </motion.div>
    </section>
  )
}
