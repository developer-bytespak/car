'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Droplets, Armchair, Sparkles, Shield } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const services = [
  {
    icon: Droplets,
    title: 'Exterior Detailing',
    desc: 'Hand wash, clay bar treatment, machine wax & polish. Your paint restored to showroom condition.',
    features: ['Hand Wash & Dry', 'Clay Bar Treatment', 'Machine Wax & Polish', 'Tire Dressing'],
    accentColor: '#00AEEF',
    accentGradient: 'from-neon-blue to-ice-dark',
  },
  {
    icon: Armchair,
    title: 'Interior Detailing',
    desc: 'Deep vacuum, steam clean, leather conditioning & dashboard treatment. Your cabin refreshed completely.',
    features: ['Deep Vacuum', 'Steam Cleaning', 'Leather Care', 'Dashboard Detail'],
    accentColor: '#FF6A00',
    accentGradient: 'from-neon-orange to-fire-light',
  },
  {
    icon: Sparkles,
    title: 'Full Detail Package',
    desc: 'Complete inside-and-out transformation. The ultimate service for cars that deserve the best.',
    features: ['Full Exterior + Interior', 'Engine Bay Clean', 'Odor Elimination', 'Paint Sealant'],
    accentColor: '#a855f7',
    accentGradient: 'from-purple-500 to-purple-400',
  },
  {
    icon: Shield,
    title: 'Paint Protection',
    desc: 'Ceramic coating and paint sealant application for long-lasting protection and mirror-like finish.',
    features: ['Ceramic Coating', 'Paint Sealant', 'UV Protection', 'Hydrophobic Layer'],
    accentColor: '#22c55e',
    accentGradient: 'from-green-500 to-emerald-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,174,239,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,106,0,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-neon-blue text-[11px] tracking-[3px] font-bold uppercase glass-card px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={12} />
            WHAT WE OFFER
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-white mt-3">
            OUR <span className="text-neon-blue text-neon-glow">SERVICES</span>
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-md mx-auto">
            Every detail handled with precision and care — from bumper to bumper
          </p>
          <div className="glow-divider max-w-[200px] mx-auto mt-6" />
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === i
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative glass-card card-shine rounded-2xl p-7 cursor-pointer transition-all duration-500"
                style={{
                  boxShadow: isHovered
                    ? `0 20px 60px -12px ${service.accentColor}30, 0 0 30px ${service.accentColor}10`
                    : 'none',
                  borderColor: isHovered ? `${service.accentColor}40` : 'rgba(255,255,255,0.08)',
                }}
              >
                {/* Animated gradient border on hover */}
                {isHovered && (
                  <motion.div
                    layoutId="service-glow"
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      border: `1px solid ${service.accentColor}40`,
                      boxShadow: `inset 0 0 30px ${service.accentColor}08`,
                    }}
                  />
                )}

                {/* Icon */}
                <motion.div
                  animate={isHovered ? { rotate: [0, -8, 8, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.accentColor}15`,
                    border: `1px solid ${service.accentColor}25`,
                    boxShadow: isHovered ? `0 0 20px ${service.accentColor}20` : 'none',
                  }}
                >
                  <Icon size={24} style={{ color: service.accentColor }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.desc}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] text-slate-500 glass-card rounded-lg px-2.5 py-1 tracking-wide"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <motion.div
                  animate={isHovered ? { opacity: 1, scaleX: 1 } : { opacity: 0.5, scaleX: 0.3 }}
                  className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r ${service.accentGradient} rounded-full`}
                  style={{ transformOrigin: 'center' }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
