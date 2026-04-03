'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We serve the local area and surrounding communities. Contact us to confirm your specific location.',
  },
  {
    q: 'How long does each service take?',
    a: 'Basic Shine: 1–1.5 hrs. Premium Detail: 2–3 hrs. Ultimate Detail: 3–5 hrs depending on vehicle size and condition.',
  },
  {
    q: 'Do I need to be home during the service?',
    a: "You don't need to be present the entire time — just available at the start to confirm access and at the end for a final walkthrough.",
  },
  {
    q: 'What products do you use?',
    a: 'We use only premium, professional-grade detailing products safe for all paint types, interiors, and protective coatings.',
  },
  {
    q: 'Can I book same-day?',
    a: 'Same-day bookings are available based on our schedule. Call us directly for the fastest confirmation.',
  },
  {
    q: 'Is satisfaction guaranteed?',
    a: "Absolutely. If you're not completely happy with the results, we'll make it right — guaranteed.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden bg-white">
      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-14">
          <span className="text-brand-orange text-[11px] tracking-[3px] font-bold uppercase">
            GOT QUESTIONS?
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-heading mt-3">
            FREQUENTLY <span className="text-brand-blue">ASKED</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto mt-6" />
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <AnimatedSection key={i} variant="fade-up" delay={i * 0.05}>
                <motion.div
                  animate={{
                    borderColor: isOpen ? 'rgba(14,165,233,0.3)' : '#E2E8F0',
                    boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.06)' : '0 4px 15px rgba(0,0,0,0.03)',
                  }}
                  className="bg-white border border-light-border rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex justify-between items-center w-full py-5 px-6 text-left group"
                  >
                    <span className={`text-[15px] font-semibold pr-4 transition-colors duration-300 ${
                      isOpen ? 'text-brand-blue' : 'text-heading group-hover:text-body'
                    }`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? 'text-brand-blue' : 'text-muted'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <div className="w-12 h-[1px] bg-gradient-to-r from-brand-blue to-transparent mb-3" />
                          <p className="text-body text-[14px] leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
