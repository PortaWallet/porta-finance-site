import { ArrowUpRight } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { Button } from '@/components/ui/button'
import { DEVELOPERS } from '@/content/copy'
import { GITHUB_LABEL, GITHUB_URL } from '@/lib/site'

export function Developers() {
  return (
    <MotionSection id="developers" className="section-y">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-2">{DEVELOPERS.eyebrow}</p>
          <h2 className="section-title">{DEVELOPERS.title}</h2>
          <p className="mt-2 text-sm leading-snug text-muted-foreground">
            {DEVELOPERS.body}
          </p>
        </div>
        <Button asChild variant="secondary">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            {GITHUB_LABEL}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </Button>
      </div>
    </MotionSection>
  )
}
