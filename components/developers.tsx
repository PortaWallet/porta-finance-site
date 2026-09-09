import { DEVELOPERS } from '@/content/copy'
import { GITHUB_LABEL, GITHUB_URL } from '@/lib/site'

export function Developers() {
  return (
    <div id="developers">
      <p className="eyebrow mb-3">{DEVELOPERS.eyebrow}</p>
      <h2 className="text-lg font-semibold tracking-tight">{DEVELOPERS.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {DEVELOPERS.body}{' '}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary"
        >
          {GITHUB_LABEL}
        </a>
        .
      </p>
    </div>
  )
}
