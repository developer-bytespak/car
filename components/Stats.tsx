'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from './ui/CountUp'

const stats = [
  { target: 500, suffix: '+', color: '#F97316', label: 'SATISFIED CUSTOMERS' },
  { target: 5, suffix: '\u2605', color: '#0EA5E9', label: 'AVERAGE RATING' },
  { target: 3, suffix: '+', color: '#22c55e', label: 'YEARS OF EXCELLENCE' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-5 md:px-10 overflow-hidden bg-light-bg">
      <div className="absolute inset-0">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: i * 0.15, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`text-center ${
              i < stats.length - 1 ? 'md:border-r md:border-light-border' : ''
            }`}
          >
            <div
              className="font-display text-[64px] leading-none"
              style={{ color: stat.color }}
            >
              <CountUp target={stat.target} suffix={stat.suffix} />
            </div>
            <p className="font-sans text-[11px] tracking-[3px] text-muted uppercase mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
