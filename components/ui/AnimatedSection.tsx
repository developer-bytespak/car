'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

type Variant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-down'

interface Props {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
  once?: boolean
}

const hiddenStates = {
  'fade-up': { opacity: 0, y: 40 },
  'fade-left': { opacity: 0, x: -50 },
  'fade-right': { opacity: 0, x: 50 },
  'scale-in': { opacity: 0, scale: 0.85 },
  'fade-down': { opacity: 0, y: -30 },
}

const visibleState = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
}

export default function AnimatedSection({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  once = true,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hiddenStates[variant]}
      animate={inView ? visibleState : hiddenStates[variant]}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
