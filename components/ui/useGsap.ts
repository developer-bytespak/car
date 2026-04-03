'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function useGsapScrollTrigger() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return ref
}

export function useGsapFadeIn(
  options: {
    y?: number
    x?: number
    scale?: number
    duration?: number
    delay?: number
    stagger?: number
    childSelector?: string
    start?: string
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const {
      y = 60,
      x = 0,
      scale = 1,
      duration = 1,
      delay = 0,
      stagger = 0,
      childSelector,
      start = 'top 85%',
    } = options

    const targets = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : ref.current

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        x,
        opacity: 0,
        scale,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [options.y, options.x, options.scale, options.duration, options.delay, options.stagger, options.childSelector, options.start])

  return ref
}

export function useGsapParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [speed])

  return ref
}

export function useGsapTextReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const chars = ref.current!.querySelectorAll('.gsap-char')
      if (chars.length) {
        gsap.from(chars, {
          y: 80,
          opacity: 0,
          rotateX: -90,
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}
