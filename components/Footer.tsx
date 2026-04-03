'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
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
    <footer className="relative bg-light-alt border-t border-light-border overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-10 border-b border-light-border">
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
            <p className="text-body text-sm leading-relaxed mb-5">
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
                    borderColor: '#0EA5E9',
                    color: '#0EA5E9',
                    boxShadow: '0 4px 15px rgba(14,165,233,0.15)',
                  }}
                  className="w-9 h-9 rounded-full border border-light-border bg-white flex items-center justify-center text-muted text-xs font-bold transition-colors"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-heading text-[11px] tracking-[3px] uppercase font-bold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4, color: '#0EA5E9' }}
                    className="text-body text-sm hover:text-brand-blue transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange inline-block flex-shrink-0" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-heading text-[11px] tracking-[3px] uppercase font-bold mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'info@superiorshinedetailing.com', color: '#0EA5E9' },
                { icon: Phone, label: 'Phone', value: '(555) 123-4567', color: '#F97316' },
                { icon: MapPin, label: 'Service Area', value: 'Local & Surrounding Areas', color: '#22c55e' },
                { icon: Clock, label: 'Hours', value: 'Mon–Sat · 7 AM – 7 PM', color: '#f59e0b' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: `${item.color}10`,
                        border: `1px solid ${item.color}20`,
                      }}
                    >
                      <Icon size={14} style={{ color: item.color }} />
                    </span>
                    <div>
                      <span className="text-muted text-[10px] tracking-[2px] uppercase block">{item.label}</span>
                      <span className="text-body text-sm">{item.value}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-muted text-[11px] tracking-widest">
            &copy; 2025 Superior Shine Auto Detailing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pkg-green animate-slide-dot" />
            <span className="text-muted text-[11px] tracking-[2px]">
              Currently accepting bookings
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
