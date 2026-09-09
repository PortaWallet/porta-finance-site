import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
  {
    variants: {
      variant: {
        live: 'border-primary/30 bg-primary/10 text-primary',
        coming:
          'border-border bg-muted/40 text-muted-foreground',
        dogfood:
          'border-accent/35 bg-accent/10 text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'coming',
    },
  },
)

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
