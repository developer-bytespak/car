'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function generateParticles() {
  return Array.from({ length: 30 }, (_, i) => {
    const r1 = seededRandom(i * 7 + 1)
    const r2 = seededRandom(i * 13 + 2)
    const r3 = seededRandom(i * 19 + 3)
    const r4 = seededRandom(i * 23 + 4)
    const r5 = seededRandom(i * 31 + 5)
    const r6 = seededRandom(i * 37 + 6)
    return {
      id: i,
      x: r1 * 100,
      y: r2 * 100,
      size: r3 * 3 + 1,
      duration: r4 * 4 + 3,
      delay: r5 * 3,
      color: r6 > 0.5 ? '#00AEEF' : '#FF6A00',
      opacity: r3 * 0.5 + 0.2,
    }
  })
}

const particles = generateParticles()

export default function SparkleField() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{
            opacity: [0, p.opacity, 0],
            scale: [0.5, 1.2, 0.5],
            y: [0, -30 - p.duration * 5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
