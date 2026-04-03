'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = ['READY', 'FOR', 'YOUR', 'SUPERIOR', 'SHINE', '?']
  const shimmerWords = ['SUPERIOR', 'SHINE', '?']

  return (
    <section className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />

      {/* Animated radial glows */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,174,239,0.08),transparent_50%)] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,106,0,0.05),transparent_50%)] pointer-events-none"
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Word-by-word reveal */}
        <h2 className="font-display text-[clamp(40px,7vw,80px)] leading-tight mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={inView ? { rotateX: 0, opacity: 1 } : { rotateX: -90, opacity: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ transformOrigin: 'top center', display: 'inline-block' }}
              className={`mr-3 ${shimmerWords.includes(word) ? 'text-shimmer' : 'text-white'}`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-slate-500 text-lg mb-10"
        >
          Don&apos;t wait — book your detail today and drive away transformed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-shine bg-gradient-to-r from-neon-orange-dim via-neon-orange to-fire-light text-white rounded-full px-10 py-4 text-sm font-bold tracking-widest hover:-translate-y-1 transition-all hover:shadow-[0_10px_40px_rgba(255,106,0,0.4)]"
          >
            Book Now
          </a>
          <a
            href="tel:5551234567"
            className="border border-neon-blue/40 text-neon-blue rounded-full px-9 py-4 text-sm font-semibold hover:bg-neon-blue/10 hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,174,239,0.15)] transition-all"
          >
            Call Us Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
