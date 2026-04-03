'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Phone } from 'lucide-react'
import SparkleField from './ui/SparkleField'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/car-is-parked-man-washing-it.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-60"
        style={{
          background: 'linear-gradient(135deg, #020818 0%, #0a1628 25%, transparent 50%, #0d0a15 75%, #020818 100%)',
          backgroundSize: '400% 400%',
          animation: 'heroGradient 15s ease infinite',
        }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,174,239,0.12),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,106,0,0.08),transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(0,174,239,0.04),transparent_50%)]" />
      </div>

      {/* Mesh grid */}
      <div className="absolute inset-0 mesh-grid opacity-50" />

      {/* Floating particles */}
      <SparkleField />

      {/* Cinematic light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-[2px] h-full"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,174,239,0.3), transparent)' }}
          animate={{ x: [0, 1200], opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,106,0,0.3), transparent)' }}
          animate={{ y: [0, 800], opacity: [0, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, delay: 2 }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 text-center pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2.5 glass-card px-5 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-pkg-green animate-slide-dot" />
          <span className="text-neon-blue text-[11px] tracking-[3px] uppercase font-semibold">
            Premium Auto Detailing
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[clamp(56px,10vw,120px)] leading-[0.9] tracking-[4px] text-white mb-2"
        >
          SUPERIOR
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[clamp(56px,10vw,120px)] leading-[0.9] tracking-[4px] text-shimmer mb-6"
        >
          SHINE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10"
        >
          {/* Where precision meets perfection. Professional mobile detailing that transforms your car into a showroom masterpiece. */}
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
            className="glass-card rounded-full px-5 py-2.5 flex items-center gap-3 hover:border-neon-blue/30 transition-all group"
          >
            <span className="w-7 h-7 rounded-full bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
              <Mail size={13} className="text-neon-blue" />
            </span>
            <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">info@superiorshinedetailing.com</span>
          </a>
          <a
            href="tel:5551234567"
            className="glass-card rounded-full px-5 py-2.5 flex items-center gap-3 hover:border-neon-orange/30 transition-all group"
          >
            <span className="w-7 h-7 rounded-full bg-neon-orange/10 border border-neon-orange/20 flex items-center justify-center">
              <Phone size={13} className="text-neon-orange" />
            </span>
            <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">(555) 123-4567</span>
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
            className="btn-shine bg-gradient-to-r from-neon-orange-dim via-neon-orange to-fire-light text-white rounded-full px-10 py-4 text-sm font-bold tracking-widest hover:-translate-y-1 transition-all hover:shadow-[0_10px_40px_rgba(255,106,0,0.4)] text-center animate-pulse-glow"
            style={{ boxShadow: '0 0 30px rgba(255,106,0,0.2)' }}
          >
            BOOK NOW
          </a>
          <a
            href="#packages"
            className="border border-neon-blue/40 text-neon-blue rounded-full px-9 py-4 text-sm font-semibold hover:bg-neon-blue/10 hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,174,239,0.15)] transition-all text-center"
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
        <ChevronDown size={24} className="text-neon-blue/50" />
      </motion.div>
    </section>
  )
}
