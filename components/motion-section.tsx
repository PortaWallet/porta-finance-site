'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

const spring = { type: 'spring' as const, stiffness: 380, damping: 32 }

type Props = {
  children: ReactNode
  className?: string
  id?: string
}

/**
 * Visible by default. Never start at opacity 0 — htmlpreview / failed IO
 * would otherwise leave the rest of the page as an empty hole.
 */
export function MotionSection({ children, className, id }: Props) {
  const reduced = usePrefersReducedMotion()

  const variants: Variants = reduced
    ? { show: { opacity: 1, y: 0 } }
    : {
        show: { opacity: 1, y: 0, transition: spring },
      }

  return (
    <motion.section
      id={id}
      className={className}
      initial={false}
      animate="show"
      variants={variants}
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

  const variants: Variants = reduced
    ? { show: {} }
    : { show: { transition: { staggerChildren: 0.08 } } }

  return (
    <motion.div className={className} initial={false} animate="show" variants={variants}>
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

  const variants: Variants = reduced
    ? { show: { opacity: 1, y: 0 } }
    : { show: { opacity: 1, y: 0, transition: spring } }

  return (
    <motion.div className={className} initial={false} animate="show" variants={variants}>
      {children}
    </motion.div>
  )
}
