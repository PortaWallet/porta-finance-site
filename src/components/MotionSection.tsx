import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

const ease = [0.22, 1, 0.36, 1] as const

export function MotionSection({ children, className, id, delay = 0 }: Props) {
  const reduced = usePrefersReducedMotion()

  const variants: Variants = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease, delay },
        },
      }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}

type ItemProps = {
  children: ReactNode
  className?: string
}

/** Stagger child for grids — parent must use stagger variants via MotionStagger. */
export function MotionItem({ children, className }: ItemProps) {
  const reduced = usePrefersReducedMotion()

  const variants: Variants = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease },
        },
      }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
}

/** Parent grid that staggers MotionItem children (0.06s). */
export function MotionStagger({ children, className }: StaggerProps) {
  const reduced = usePrefersReducedMotion()

  const variants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: { staggerChildren: 0.06 },
        },
      }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
