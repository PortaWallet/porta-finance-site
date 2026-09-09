import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { DEVELOPERS } from '@/content/copy'
import { GITHUB_LABEL, GITHUB_URL } from '@/lib/site'

export function Developers() {
  return (
    <Card id="developers" className="app-card h-full">
      <CardContent className="p-5">
        <p className="eyebrow mb-2">{DEVELOPERS.eyebrow}</p>
        <h2 className="text-lg font-semibold tracking-tight">{DEVELOPERS.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {DEVELOPERS.body}
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
        >
          {GITHUB_LABEL}
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </CardContent>
    </Card>
  )
}
