'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

const spring = { type: 'spring' as const, stiffness: 380, damping: 36 }
const OFFSET = 12

type Props = {
  children: ReactNode
  className?: string
  id?: string
}

/**
 * Fade-up after mount. Never opacity 0 — htmlpreview / failed IO must
 * still show the full page. prefers-reduced-motion skips the offset.
 */
export function MotionSection({ children, className, id }: Props) {
  const reduced = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <motion.section
      id={id}
      className={className}
      initial={false}
      animate={{ y: reduced || ready ? 0 : OFFSET }}
      transition={reduced ? { duration: 0 } : spring}
    >
      {children}
    </motion.section>
  )
}

export function MotionStagger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <motion.div
      className={className}
      initial={false}
      animate={ready && !reduced ? 'show' : 'from'}
      variants={{
        from: {},
        show: {
          transition: { staggerChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function MotionItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      initial={false}
      variants={{
        from: { y: reduced ? 0 : OFFSET },
        show: {
          y: 0,
          transition: reduced ? { duration: 0 } : spring,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
