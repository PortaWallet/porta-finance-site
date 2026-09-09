import { OFFICIAL_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function OfficialLinks({ className }: Props) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {OFFICIAL_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/25 hover:bg-muted/50"
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
