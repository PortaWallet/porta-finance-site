import { SECURITY } from '@/content/copy'

export function Security() {
  return (
    <div id="security">
      <p className="eyebrow mb-3">{SECURITY.eyebrow}</p>
      <h2 className="text-lg font-semibold tracking-tight">{SECURITY.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {SECURITY.body}
      </p>
    </div>
  )
}
