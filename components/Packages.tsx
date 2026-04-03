'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Zap, Star } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const plans = [
  {
    name: 'BASIC SHINE',
    price: '$99',
    color: '#22c55e',
    features: [
      'Exterior Hand Wash',
      'Wheel & Tire Cleaning',
      'Windows Cleaned (inside & out)',
      'Quick Interior Vacuum',
      'Wipe Down of Surfaces',
    ],
    note: 'Best for Weekly / Bi-Weekly Customers',
    popular: false,
  },
  {
    name: 'PREMIUM DETAIL',
    price: '$189',
    color: '#00AEEF',
    features: [
      'Everything in Basic Shine',
      'Deep Interior Vacuum',
      'Steam Cleaning',
      'Dashboard & Door Panels Detailed',
      'Seat Cleaning (Cloth or Leather)',
      'Spray Wax Protection',
      'Door Jambs Cleaned',
    ],
    note: 'Our Most Popular Package',
    popular: true,
  },
  {
    name: 'ULTIMATE DETAIL',
    price: '$299+',
    color: '#FF6A00',
    features: [
      'Everything in Premium Detail',
      'Carpet Shampoo Extraction',
      'Heavy Stain Removal',
      'Leather Conditioning',
      'Clay Bar Treatment',
      'Machine Wax & Polish',
      'Engine Bay Cleaning',
    ],
    note: 'The Complete Transformation',
    popular: false,
  },
]

const addOns = [
  { name: 'Pet Hair Removal', price: '$30–$60' },
  { name: 'Headlight Restoration', price: '$60' },
  { name: 'Odor Removal', price: '$50' },
  { name: 'Engine Detail', price: '$60–$100' },
]

export default function Packages() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="packages" className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-dark-mid" />
      <div className="absolute inset-0 section-glow-blue pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="text-neon-orange text-[11px] tracking-[3px] font-bold uppercase">
            TRANSPARENT PRICING
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-white mt-3">
            DETAILING <span className="text-neon-blue text-neon-glow">PACKAGES</span>
          </h2>
          <p className="text-slate-600 text-base mt-3">
            No hidden fees. No surprises. Just results.
          </p>
          <div className="glow-divider max-w-[200px] mx-auto mt-6" />
        </AnimatedSection>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-visible"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -12, scale: plan.popular ? 1.03 : 1.02 }}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-500 flex flex-col ${
                plan.popular ? 'md:-mt-6 md:pt-10' : ''
              }`}
              style={{
                boxShadow: hoveredIndex === i
                  ? `0 25px 60px ${plan.color}20, 0 0 40px ${plan.color}10`
                  : plan.popular
                  ? `0 0 40px ${plan.color}15`
                  : 'none',
              }}
            >
              {/* Animated gradient border for popular plan */}
              {plan.popular && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    padding: '1.5px',
                    background: 'linear-gradient(135deg, #00AEEF, #FF6A00, #00AEEF)',
                    backgroundSize: '300% 300%',
                    animation: 'gradientShift 4s ease infinite',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                  }}
                />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-blue to-ice-dark text-white text-[10px] font-black tracking-[2px] px-5 py-1.5 rounded-full whitespace-nowrap z-20 shadow-[0_0_20px_rgba(0,174,239,0.4)]"
                >
                  <Star size={10} className="inline mr-1 -mt-0.5" />
                  MOST POPULAR
                </motion.span>
              )}

              {/* Plan name */}
              <span
                className="text-[10px] tracking-[3px] font-bold uppercase"
                style={{ color: plan.color }}
              >
                {plan.name}
              </span>

              {/* Price */}
              <div
                className="font-display text-[56px] leading-none mt-2 mb-1"
                style={{ color: plan.color }}
              >
                {plan.price}
              </div>

              <div className="glow-divider my-5" />

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-slate-400 text-[13px] flex items-start gap-3">
                    <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className="text-slate-600 text-[11px] italic mb-5 mt-auto">{plan.note}</p>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full rounded-xl py-3 text-xs font-bold tracking-[2px] transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-neon-blue to-ice-dark text-white shadow-[0_6px_25px_rgba(0,174,239,0.3)]'
                    : 'border text-white hover:bg-white/5'
                }`}
                style={
                  !plan.popular
                    ? { borderColor: `${plan.color}30`, color: plan.color }
                    : undefined
                }
              >
                Select {plan.name.split(' ').pop()}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-Ons */}
        <AnimatedSection variant="scale-in" className="mt-8">
          <div className="glass-card rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-0" style={{ borderColor: 'rgba(251,191,36,0.15)' }}>
            <div className="md:border-r md:border-white/5 md:pr-8">
              <h4 className="text-gold text-[11px] tracking-[3px] font-bold mb-5 flex items-center gap-2">
                <Zap size={12} />
                ADD-ONS
              </h4>
              {addOns.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center border-b border-white/5 py-2.5"
                >
                  <span className="text-slate-400 text-[13px]">{item.name}</span>
                  <span className="text-gold text-[13px] font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="md:pl-8 mt-6 md:mt-0 flex items-center">
              <div className="bg-[rgba(251,191,36,0.05)] border border-[rgba(251,191,36,0.12)] rounded-xl p-5">
                <p className="text-[#d4a017] italic text-[13px] leading-relaxed">
                  <strong className="text-gold not-italic">Pro Tip:</strong> Most customers go with the Premium package — it gives the best results for the price!
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
