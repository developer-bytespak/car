'use client'
import { useRef, useState, useEffect } from 'react'
import { Droplets, Armchair, Sparkles, Shield } from 'lucide-react'
import { gsap, ScrollTrigger } from './ui/useGsap'

const services = [
  {
    icon: Droplets,
    title: 'Exterior Detailing',
    desc: 'Hand wash, clay bar treatment, machine wax & polish. Your paint restored to showroom condition.',
    features: ['Hand Wash & Dry', 'Clay Bar Treatment', 'Machine Wax & Polish', 'Tire Dressing'],
    accentColor: '#0EA5E9',
  },
  {
    icon: Armchair,
    title: 'Interior Detailing',
    desc: 'Deep vacuum, steam clean, leather conditioning & dashboard treatment. Your cabin refreshed completely.',
    features: ['Deep Vacuum', 'Steam Cleaning', 'Leather Care', 'Dashboard Detail'],
    accentColor: '#F97316',
  },
  {
    icon: Sparkles,
    title: 'Full Detail Package',
    desc: 'Complete inside-and-out transformation. The ultimate service for cars that deserve the best.',
    features: ['Full Exterior + Interior', 'Engine Bay Clean', 'Odor Elimination', 'Paint Sealant'],
    accentColor: '#a855f7',
  },
  {
    icon: Shield,
    title: 'Paint Protection',
    desc: 'Ceramic coating and paint sealant application for long-lasting protection and mirror-like finish.',
    features: ['Ceramic Coating', 'Paint Sealant', 'UV Protection', 'Hydrophobic Layer'],
    accentColor: '#22c55e',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Small delay to let the DOM settle after hydration
    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        // Badge + heading animate in
        if (headingRef.current) {
          const els = headingRef.current.children
          gsap.fromTo(
            els,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.12,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: headingRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        // Cards stagger in from bottom
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll('.service-card')
          gsap.fromTo(
            cards,
            { y: 60, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              stagger: 0.12,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        ScrollTrigger.refresh()
      }, sectionRef)

      ctxRef.current = ctx
    })

    const ctxRef = { current: null as gsap.Context | null }

    return () => {
      cancelAnimationFrame(raf)
      ctxRef.current?.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading block */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-brand-blue text-[11px] tracking-[3px] font-bold uppercase bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={12} />
            WHAT WE OFFER
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-heading mt-3">
            OUR <span className="text-brand-blue">SERVICES</span>
          </h2>
          <p className="text-body text-base mt-3 max-w-md mx-auto">
            Every detail handled with precision and care — from bumper to bumper
          </p>
          <div className="section-divider max-w-[200px] mx-auto mt-6" />
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === i
            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="service-card group relative bg-white border border-light-border rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: isHovered
                    ? '0 20px 40px rgba(0,0,0,0.08)'
                    : '0 10px 30px rgba(0,0,0,0.05)',
                  borderColor: isHovered ? `${service.accentColor}40` : undefined,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.accentColor}10`,
                    border: `1px solid ${service.accentColor}20`,
                  }}
                >
                  <Icon size={24} style={{ color: service.accentColor }} />
                </div>

                {/* Title */}
                <h3 className="text-heading text-lg font-bold mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-body text-sm leading-relaxed mb-5">{service.desc}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] text-body font-medium bg-light-bg border border-light-border rounded-lg px-3 py-1.5 tracking-wide"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    transformOrigin: 'center',
                    background: service.accentColor,
                    opacity: isHovered ? 1 : 0.2,
                    transform: `scaleX(${isHovered ? 1 : 0.3})`,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
