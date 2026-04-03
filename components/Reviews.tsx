'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const reviews = [
  {
    name: 'James M.',
    initials: 'JM',
    gradient: 'from-brand-orange to-amber-400',
    quote: 'Absolutely amazing results. My car looks brand new — the interior transformation was unbelievable. Will book every month!',
    platform: 'Google',
  },
  {
    name: 'Sarah R.',
    initials: 'SR',
    gradient: 'from-brand-blue to-sky-400',
    quote: 'Super convenient — they came right to my house. The Premium Detail was worth every penny. Highly recommended!',
    platform: 'Google',
  },
  {
    name: 'David K.',
    initials: 'DK',
    gradient: 'from-purple-500 to-purple-400',
    quote: 'Professional, punctual, and thorough. The clay bar and machine wax made my car shine like a mirror!',
    platform: 'Yelp',
  },
  {
    name: 'Michael T.',
    initials: 'MT',
    gradient: 'from-green-500 to-emerald-400',
    quote: 'The Ultimate Detail package is worth every cent. Engine bay looks factory fresh. These guys know what they are doing!',
    platform: 'Facebook',
  },
  {
    name: 'Lisa W.',
    initials: 'LW',
    gradient: 'from-brand-orange to-brand-blue',
    quote: 'Had pet hair everywhere and stains on the seats. After their service, the car smelled and looked like it just rolled off the lot.',
    platform: 'Google',
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % reviews.length)
  }
  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const getVisible = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(current + i) % reviews.length])
    }
    return items
  }

  return (
    <section id="reviews" className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden bg-light-bg">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="text-brand-blue text-[11px] tracking-[3px] font-bold uppercase">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-heading mt-3">
            WHAT CUSTOMERS <span className="text-brand-blue">SAY</span>
          </h2>

          {/* Rating display */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="font-display text-5xl text-heading">5.0</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  >
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-muted text-xs mt-1">Based on 500+ reviews</p>
            </div>
          </div>
          <div className="section-divider max-w-[200px] mx-auto mt-6" />
        </AnimatedSection>

        {/* Review cards - carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisible().map((review, i) => (
              <motion.div
                key={`${review.name}-${current}-${i}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                }}
                className="bg-white border border-light-border rounded-2xl p-7 relative group transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                {/* Quote icon */}
                <Quote size={30} className="text-brand-blue/15 mb-3" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-body text-[13px] leading-relaxed italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`bg-gradient-to-br ${review.gradient} w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold text-white shadow-md`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <span className="text-heading text-sm font-semibold block">{review.name}</span>
                    <span className="text-muted text-xs">via {review.platform}</span>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-blue/20 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-light-border shadow-sm flex items-center justify-center text-body hover:border-brand-blue/30 transition-colors"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-brand-blue'
                      : 'w-2 bg-light-border hover:bg-muted'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-light-border shadow-sm flex items-center justify-center text-body hover:border-brand-blue/30 transition-colors"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
