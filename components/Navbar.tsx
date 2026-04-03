'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(2,8,24,0.85)] backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo_text_clean.png"
              alt="Superior Shine Auto Detailing"
              width={180}
              height={72}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  className="text-slate-400 text-[11px] tracking-[2px] uppercase font-medium hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block btn-shine bg-gradient-to-r from-neon-orange to-fire-light rounded-full px-6 py-2.5 text-[11px] font-bold tracking-[2px] text-white hover:shadow-[0_6px_25px_rgba(255,106,0,0.4)] transition-all"
          >
            BOOK NOW
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-5 right-5 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-white font-display text-4xl tracking-[4px] hover:text-neon-blue transition-colors"
                >
                  {link.label.toUpperCase()}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="btn-shine bg-gradient-to-r from-neon-orange to-fire-light rounded-full px-10 py-4 text-sm font-bold tracking-[2px] text-white mt-4"
              >
                BOOK NOW
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
