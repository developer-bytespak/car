'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowUp } from 'lucide-react'
import Image from 'next/image'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
]

const socials = [
  { label: 'IG', name: 'Instagram' },
  { label: 'FB', name: 'Facebook' },
  { label: 'TT', name: 'TikTok' },
  { label: 'YT', name: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-deep border-t border-white/[0.04] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.05),transparent_70%)] pointer-events-none" />

      {/* Back to top */}
      <div className="relative z-10 flex justify-center -mt-5">
        <motion.a
          href="#"
          whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(255,106,0,0.3)' }}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-orange to-fire-light flex items-center justify-center text-white shadow-lg cursor-pointer"
        >
          <ArrowUp size={16} />
        </motion.a>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-10 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo_text_clean.png"
                alt="Superior Shine Auto Detailing"
                width={220}
                height={88}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Professional mobile auto detailing — we bring the shine to your driveway. Premium products, expert hands, showroom results.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.name}
                  whileHover={{
                    y: -3,
                    borderColor: '#00AEEF',
                    color: '#00AEEF',
                    boxShadow: '0 0 15px rgba(0,174,239,0.2)',
                  }}
                  className="w-9 h-9 rounded-full border border-white/[0.07] flex items-center justify-center text-slate-600 text-xs font-bold transition-colors"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[11px] tracking-[3px] uppercase font-bold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4, color: '#00AEEF' }}
                    className="text-slate-600 text-sm hover:text-neon-blue transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-neon-orange inline-block flex-shrink-0" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-[11px] tracking-[3px] uppercase font-bold mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'info@superiorshinedetailing.com', color: '#00AEEF' },
                { icon: Phone, label: 'Phone', value: '(555) 123-4567', color: '#FF6A00' },
                { icon: MapPin, label: 'Service Area', value: 'Local & Surrounding Areas', color: '#22c55e' },
                { icon: Clock, label: 'Hours', value: 'Mon–Sat · 7 AM – 7 PM', color: '#fbbf24' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: `${item.color}12`,
                        border: `1px solid ${item.color}18`,
                      }}
                    >
                      <Icon size={14} style={{ color: item.color }} />
                    </span>
                    <div>
                      <span className="text-slate-700 text-[10px] tracking-[2px] uppercase block">{item.label}</span>
                      <span className="text-slate-500 text-sm">{item.value}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-slate-700 text-[11px] tracking-widest">
            &copy; 2025 Superior Shine Auto Detailing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pkg-green animate-slide-dot" />
            <span className="text-slate-600 text-[11px] tracking-[2px]">
              Currently accepting bookings
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
