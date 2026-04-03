'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] w-[300px] h-[300px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(0,174,239,0.08) 0%, transparent 70%)',
        left: pos.x - 150,
        top: pos.y - 150,
      }}
      animate={{ left: pos.x - 150, top: pos.y - 150 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
    />
  )
}
