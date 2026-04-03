'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CalendarDays, MapPin, Wrench, Sparkles } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const steps = [
  {
    num: '01',
    icon: CalendarDays,
    title: 'Book Online',
    desc: 'Pick a date and time that works for you. Quick and easy scheduling.',
    color: '#F97316',
  },
  {
    num: '02',
    icon: MapPin,
    title: 'We Come to You',
    desc: 'Our team arrives at your location fully equipped and ready to shine.',
    color: '#0EA5E9',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'We Detail',
    desc: 'Thorough cleaning inside and out with premium professional products.',
    color: '#22c55e',
  },
  {
    num: '04',
    icon: Sparkles,
    title: 'You Enjoy',
    desc: 'Drive away in a car that looks and feels brand new. Guaranteed.',
    color: '#a855f7',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start end', 'end center'],
  })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="text-brand-orange text-[11px] tracking-[3px] font-bold uppercase">
            THE PROCESS
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-heading mt-3">
            HOW IT <span className="text-brand-orange">WORKS</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto mt-6" />
        </AnimatedSection>

        <div ref={lineRef} className="relative">
          {/* Animated connecting line — desktop */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-light-border rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: lineWidth,
                background: 'linear-gradient(90deg, #F97316, #0EA5E9, #22c55e, #a855f7)',
              }}
            />
          </div>

          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  {/* Step circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      boxShadow: `0 10px 30px ${step.color}25`,
                    }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-5 cursor-pointer transition-all duration-300 bg-white"
                    style={{
                      background: `${step.color}08`,
                      border: `2px solid ${step.color}30`,
                      boxShadow: `0 8px 25px ${step.color}10`,
                    }}
                  >
                    <Icon size={28} style={{ color: step.color }} />
                  </motion.div>

                  {/* Step number */}
                  <span
                    className="font-display text-sm tracking-[3px] mb-2"
                    style={{ color: `${step.color}90` }}
                  >
                    STEP {step.num}
                  </span>

                  <h4 className="text-heading text-sm font-bold tracking-wide mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted text-xs leading-relaxed max-w-[180px]">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
